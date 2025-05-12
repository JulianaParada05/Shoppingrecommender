// Inicializa el mapa en la sede de la Universidad Distrital
const map = L.map('map').setView([4.628203153995866, -74.06589474589367], 17); // Nivel de zoom 17

// Carga la capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Agrega un marcador en la Universidad Distrital
L.marker([4.628203153995866, -74.06589474589367])
    .addTo(map)
    .bindPopup('Universidad Distrital - Sede Calle 40')
    .openPopup();