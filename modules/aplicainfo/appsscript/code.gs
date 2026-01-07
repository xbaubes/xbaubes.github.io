// Entrades des de Google Forms (trigger automàtic)
function onFormSubmit(e) {

  Logger.log(JSON.stringify(e.namedValues));
  Logger.log(e.namedValues)

  const nom = e.namedValues["Com et dius?"][0];
  const correu = e.namedValues["Adreça electrònica"][0];
  const categoria = e.namedValues["Indica quina informació vols rebre"][0];

  const missatgeCategoria = obtenirMissatgePerCategoria(categoria);

  const missatge =
  `Hola ${nom},\n\nGràcies per sol·licitar info!\nHas triat la categoria: ${categoria}.\nAquesta és la info sol·licitada: ${missatgeCategoria}`;

  GmailApp.sendEmail(correu, "Confirmació d’inscripció", missatge);
}

// --- Web externa (endpoint)
function doPost(e) {

  /***** CONFIG *****/
  const SHEET_ID   = "1Z-fsgR8-kSbITLJtZPpKMXU6sSZdfZaQHHGUg5rRrK8"; // google sheets ID
  const SHEET_NAME = "Respostes al formulari 1";

  try {
    // Detecta si ve JSON o x-www-form-urlencoded / FormData
    let nom, correu, categoria;

    if (e.postData && e.postData.type === 'application/json') {
      const body = JSON.parse(e.postData.contents || '{}');
      nom = body.nom;
      correu = body.correu;
      categoria = body.categoria;
      // (Opcional) body.token per validar
    } else {
      nom = e.parameter.nom;
      correu = e.parameter.correu;
      categoria = e.parameter.categoria;
      // (Opcional) e.parameter.token per validar
    }

    // Validacions bàsiques
    if (!nom || !correu || !categoria) {
      return ContentService.createTextOutput(JSON.stringify({ ok:false, error:"Falten camps" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }

    // Seguretat: afegeix un token secret i valida’l a doPost per evitar SPAM
    
    // (Opcional però recomanat) Secret compartit per evitar abusos
    // if (e.parameter.token !== 'EL_TEU_SECRET') { ... }

    // Reutilitza la lògica existent
    const missatgeCategoria = obtenirMissatgePerCategoria(categoria);
    const missatge =
      `Hola ${nom},\n\nGràcies per sol·licitar info!\nHas triat la categoria: ${categoria}.\nAquesta és la info sol·licitada: ${missatgeCategoria}`;

    GmailApp.sendEmail(correu, "Confirmació d’inscripció", missatge);

    // Append al full amb els 4 camps exactes i en l’ordre demanat
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sh = ss.getSheetByName(SHEET_NAME);
    const ts = Utilities.formatDate(new Date(), "Europe/Madrid", "dd/MM/yyyy HH:mm:ss");
    // ORDRE: Marca de temps | Adreça electrònica | Com et dius? | Indica quina informació vols rebre
    sh.appendRow([ts, correu, nom, categoria]);

    return ContentService.createTextOutput(JSON.stringify({ ok:true }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok:false, error: String(err) }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
/*
// Funció compartida per enviar correu
function enviarCorreu(nom, correu, missatge, origen) {
  const cos = `Origen: ${origen}\nNom: ${nom}\nCorreu: ${correu}\nMissatge:\n${missatge}`;
  GmailApp.sendEmail("destinatari@exemple.com", "Nou missatge rebut", cos);
}
*/
function obtenirMissatgePerCategoria(categoria) {
  //const full = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("missatges");
  const fitxer = SpreadsheetApp.openById("1RFDisZrnT0HdfIvyRVuP90vKxzVuzJnqh6SSMKVqF88");
  const full = fitxer.getSheetByName("info");
  const dades = full.getDataRange().getValues();  // totes les files i columnes

  for (let i = 1; i < dades.length; i++) {  // comencem a 1 per saltar la capçalera
    if (dades[i][0] === categoria) {
      return dades[i][1];  // retornem el missatge
    }
  }

  return "No tenim informació disponible per aquesta categoria.";
}
