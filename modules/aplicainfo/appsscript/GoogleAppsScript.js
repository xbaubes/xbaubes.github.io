const ENDPOINT = "https://script.google.com/macros/s/AKfycbyi0w2ApCouWmQOsSe1b45V89DMyXhFKd36wcO1QzhLlfgAJ4zzVqpuw7FDyCKDj3NLdg/exec";
const out = document.getElementById("out");

document.getElementById("btn").addEventListener("click", enviar);

async function enviar() {
	// 📌 Agafar valors dels inputs
	const nom = document.getElementById("nom").value.trim();
	const correu = document.getElementById("correu").value.trim();
	const categoria = document.getElementById("categoria").value;

	// Validació bàsica
	if (!nom || !correu || !categoria) {
		alert("Omple tots els camps abans d'enviar.");
		return;
	}

	// Construir dades en format x-www-form-urlencoded
	const params = new URLSearchParams();
	params.append("nom", nom);
	params.append("correu", correu);
	params.append("categoria", categoria);

	try {
		const res = await fetch(ENDPOINT, {
		  method: "POST",
		  headers: { "Content-Type": "application/x-www-form-urlencoded" },
		  body: params.toString()
		});

		const text = await res.text();
		let data;
		try { data = JSON.parse(text); }
		catch { data = { raw: text }; }

		out.textContent = JSON.stringify({ status: res.status, data }, null, 2);
	} catch (err) {
		out.textContent = "Error de xarxa: " + err.message;
	}
}
