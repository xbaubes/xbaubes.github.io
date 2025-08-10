const API_BASE = "https://sheetdb.io/api/v1/q4eo36ocdijgf";

document.getElementById("searchForm").addEventListener("submit", async function(e) //es crida quan s envia el formulari
{
    e.preventDefault();

    // Recollir camps omplerts
    const params = [];
    const formData = new FormData(this);
    for (const [key, value] of formData.entries()) {
        if (value.trim() !== "")
            params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value.trim())}`);
    }

    let url = API_BASE;
    if (params.length > 0) {
        url += "/search?" + params.join("&");
    }

    try {
        const res = await fetch(url);
        const data = await res.json();
        mostrarResultats(data);
    } catch (error) {
        document.getElementById("results").innerHTML = "<p style='color:red;'>Error carregant dades</p>";
    }
});

function mostrarResultats(data)
{
    if (!data || data.length === 0) {
        document.getElementById("results").innerHTML = "<p>No s'han trobat resultats.</p>";
        return;
    }

    let html = "<table><thead><tr>";
    Object.keys(data[0]).forEach(col => {
        html += `<th>${col}</th>`;
    });
    html += "</tr></thead><tbody>";

    data.forEach(row => {
        html += "<tr>";
        Object.values(row).forEach(val => {
        html += `<td>${val}</td>`;
        });
        html += "</tr>";
    });

    html += "</tbody></table>";
    document.getElementById("results").innerHTML = html;
}
