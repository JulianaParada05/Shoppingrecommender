
const map = L.map('map').setView([4.628203153995866, -74.06589474589367], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([4.628203153995866, -74.06589474589367])
    .addTo(map)
    .bindPopup('Universidad Distrital - Sede Calle 40')
    .openPopup();
    
    var marker =L.marker ([4.628203153995866, -74.06589474589367]);
    marker.addTo(map);
  // Abrir el archivo de GeoJSON 
  // Javascript se ejecuta de tal manera que si una línea de código se demora, se pasa a la siguiente sin esperar.
  // Esto puede generar problemas cuando se requiere secuencialidad 

async function cargarPuntos(){
        var miArchivo= await fetch("microondas.geojson");
        // Convertir el contenido a json: Objeto js

        var datos= await miArchivo.json();
        console.log(datos);
         for (let i=0; i < 10; i++) {
            console.log(datos["features"][i]);
            // Obtener el arreglo de la llave features
            let listaFeatures= datos[features];
         }
}
cargarPuntos();
