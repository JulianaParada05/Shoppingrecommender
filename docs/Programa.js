
const map = L.map('map').setView([4.628203153995866, -74.06589474589367], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([4.628203153995866, -74.06589474589367])
    .addTo(map)
    .bindPopup('Universidad Distrital - Sede Calle 40')
    .openPopup();