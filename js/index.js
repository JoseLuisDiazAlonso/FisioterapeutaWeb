/**Vamos a crear una función para alternar los textos en la página principal que hemos seleccionado. */

const texts = [
  "FISIOTERAPIA Y OSTEOPATIA",
  "NO TRATO SÍNTOMAS, TRATO PERSONAS",
  "ESCUCHAR ES PARTE DE LA TERAPIA",
];
let index = 0;

function changeText() {
  document.getElementById("texto1").innerHTML = texts[index];
  index = (index + 1) % texts.length; //Avanza al siguiente texto
}

setInterval(changeText, 3000); //Cambia el texto cada 3000 milisegundos = 3 segundos.

/**Vamos a crear la función para la sección del mapa de contactos. */

function initMap() {
  //Coordenadas de la ubicación deseada
  const location = { lat: 40.33075, lng: -3.83885 };

  //Creamos el mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  //Añadimos un marcador en la ubicación

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "C/Pablo Picasso, 3, Alcorcón (Madrid)",
  });
}