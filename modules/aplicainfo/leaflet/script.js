// Inicialitzar mapa
// es crea al div de nom 'mapaFauna'
// centrat a sta coloma de farners
const map = L.map('mapaFauna').setView([41.8660, 2.6670], 14);

// Afegir capa base (per defecte)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// ===== Colors disponibles per als marcadors =====
const COLORS = [
  '#d32f2f', // 0 - Vermell (EL)
  '#2e7d32', // 1 - Verd (EC)
  '#1976d2',
  '#fbc02d',
  '#7b1fa2',
  '#00897b'
];

// Cau d'icones per reutilitzar-les per color
const iconCache = new Map(); //guarda parelles clau-valor
function getDivIconByColor(color) {
  if (!iconCache.has(color)) {
    iconCache.set(color, L.divIcon({
      className: 'custom-marker',
      html: `<div style="background:${color}; width:16px; height:16px; border-radius:50%;"></div>`,
      iconSize: [16, 16]
    }));
  }
  return iconCache.get(color);
}

// Helper per afegir punts amb color per index de COLORS
function afegirPunts(pointsArray, colorIndex) {
  const color = COLORS[colorIndex % COLORS.length]; // si sol·liciten una posicio fora de l array torna a comencar
  const icon = getDivIconByColor(color);
  pointsArray.forEach(p => {
    L.marker([p.lat, p.lng], { title: p.nom, icon })
      .addTo(map)
      .bindPopup(`<b>${p.nom}</b><br>${p.descripcio}`);
  });
}

// Afegir punts: EL amb color 0 (vermell), EC amb color 1 (verd)
afegirPunts(puntsEL, 0);
afegirPunts(puntsEC, 1);

// Omplir taula d'impacte
const tbody = document.getElementById("impact-data");
impacte.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${item.etapa}</td><td>${item.EL}</td><td>${item.EC}</td>`;
  tbody.appendChild(row);
});
