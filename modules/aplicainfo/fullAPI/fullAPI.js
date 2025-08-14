const API_BASE = "https://sheetdb.io/api/v1/q4eo36ocdijgf";

// s executa quan s envia el formulari
document.getElementById("searchForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Evita que es recarregui la pagina si utilitzem boto type="submit"

    // Preparar els paràmetres de cerca
    let params = "";
    let inputs = this.elements; // array amb tots els camps del formulari

    for (let i = 0; i < inputs.length; i++) {
        let nomCamp = inputs[i].name; // nom del camp HTML
        let valorCamp = inputs[i].value.trim(); //eliminem els espais davant i darrera de l string introduit per l usuari

        if (nomCamp && valorCamp !== "") { // afegim si te nom i valor
            if (params !== "") {
                params += "&"; // Afegim separador si no és el primer
            }
            params = params + ( encodeURIComponent(nomCamp) + "=" + encodeURIComponent(valorCamp) ); // codifica per ser usada en URL
        }
    }

    // Construir la URL final
    let url = API_BASE;
    if (params !== "") {
        url = url + "/search?" + params; // GET amb filtre
    }

    // Cridar l'API i mostrar resultats
    try {
		console.log(url);
        let resposta = await fetch(url);
        let dades = await resposta.json();
        mostrarResultats(dades);
    } catch (error) {
        document.getElementById("results").innerHTML = "<p>Error carregant dades</p>";
    }
});

// mostra la informacio rebuda creant una taula HTML
function mostrarResultats(dades) {
    let divResultats = document.getElementById("results");

    // Si no hi ha dades
    if (!dades || dades.length === 0) {
        divResultats.innerHTML = "<p>No s'han trobat resultats.</p>";
    }
	else {
		console.log(dades)
		// Començar la taula
		let html = "<table>";
		html += "<thead><tr>";

		// Afegir capçaleres
		let primeraFila = dades[0];
		for (let nomColumna in primeraFila) {
			html += "<th>" + nomColumna + "</th>";
		}
		html += "</tr></thead>";

		// Afegir el cos
		html += "<tbody>";
		for (const fila of dades) {
			html += "<tr>";
			//
			console.log(fila)
			for (let caracteristica in fila) {
				html += "<td>" + fila[caracteristica] + "</td>";
				console.log(caracteristica + " : " + fila[caracteristica])
			}
			html += "</tr>";
		}
		html += "</tbody></table>";

		// Mostrar-ho a la pàgina
		divResultats.innerHTML = html;
	}
}
