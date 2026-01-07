// Coordenades d'exemple (Santa Coloma de Farners)
const puntsEL = [
    { nom: "Fàbrica", lat: 41.8559, lng: 2.6713, descripcio: "Producció inicial de productes en polígon industrial" },
    { nom: "Magatzem", lat: 41.8626, lng: 2.6603, descripcio: "Emmagatzematge de mercaderies abans de distribució" },
    { nom: "Client", lat: 41.8552, lng: 2.6665, descripcio: "Consum final i generació de residus" }
];

const puntsEC = [
    { nom: "Fàbrica", lat: 41.8689, lng: 2.6683, descripcio: "Producció amb matèries reciclades i processos sostenibles" },
    { nom: "Magatzem", lat: 41.8625, lng: 2.6602, descripcio: "Emmagatzematge amb control de temperatura i eficiència energètica" },
    { nom: "Centre Reciclatge", lat: 41.8652, lng: 2.6758, descripcio: "Recollida selectiva i processament de materials" },
    { nom: "Nova Producció", lat: 41.8680, lng: 2.6690, descripcio: "Reutilització de materials reciclats per a nous productes" }
];

const impacte = [
    { etapa: "Producció", EL: "Alt ús de recursos", EC: "Ús de materials reciclats" },
    { etapa: "Transport", EL: "Fòssil", EC: "Optimitzat i baixes emissions" },
    { etapa: "Fi de vida", EL: "Residus a abocador", EC: "Reciclatge i reutilització" }
];
