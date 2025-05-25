/**Vamos a crear una función para alternar los textos en la página principal que hemos seleccionado. */

const texts = ["FISIOTERAPIA Y OSTEOPATIA","NO TRATO SÍNTOMAS, TRATO PERSONAS", "ESCUCHAR ES PARTE DE LA TERAPIA"];
let index = 0;

function changeText() {
    document.getElementById('texto1').innerHTML = texts[index];
    index = (index + 1) % texts.length; //Avanza al siguiente texto
}

setInterval(changeText, 3000); //Cambia el texto cada 3000 milisegundos = 3 segundos.