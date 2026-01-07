// Ordenem per nom
fauna.sort((a, b) => a.nom.localeCompare(b.nom));

// Extraiem valors
const noms = fauna.map(animal => animal.nom);
const quantitats = fauna.map(animal => animal.quantitat);
const colors = fauna.map(animal => animal.color);

// Creació del gràfic
const ctx = document.getElementById('faunaChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: noms,
        datasets: [{
            label: 'Nombre d\'animals salvatges',
            data: quantitats,
            backgroundColor: colors,
            borderColor: 'rgba(0, 0, 0, 0.8)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Nombre d\'animals',
                    font: { size: 18 }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Espècie',
                    font: { size: 18 }
                }
            }
        },
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Distribució de la fauna salvatge a Catalunya (2023)',
                font: { size: 24 }
            }
        }
    }
});
