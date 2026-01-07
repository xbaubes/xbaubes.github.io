function testingForm() {
  const e = {
    namedValues: {
      "Com et dius?": ["xbaubes"],
      "Adreça electrònica": ["xbaubes@xtec.cat"],
      "Indica quina informació vols rebre": ["A"]
    }
  };

  onFormSubmit(e);  // Aquí crides la teva funció com si fos activada pel formulari
}

// Test amb dades tipus FormData / x-www-form-urlencoded
function test_doPost_form() {
  const e = {
    parameter: {
      nom: "Prova Form",
      correu: "xbaubes@xtec.cat",
      categoria: "A"
    },
    postData: {
      type: "application/x-www-form-urlencoded",
      contents: "nom=Prova+Form&correu=prova%40example.com&categoria=A"
    }
  };

  const res = doPost(e);
  Logger.log(res.getContent()); // Mostra el resultat al log
}

// Test amb dades tipus JSON
function test_doPost_json() {
  const payload = {
    nom: "Prova JSON",
    correu: "xbaubes@xtec.cat",
    categoria: "B"
  };

  const e = {
    postData: {
      type: "application/json",
      contents: JSON.stringify(payload)
    },
    parameter: {} // per mantenir compatibilitat
  };

  const res = doPost(e);
  Logger.log(res.getContent()); // Mostra el resultat al log
}
