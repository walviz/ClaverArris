// Obtiene la fecha actual
const fechaActual = new Date();
const agno = fechaActual.getFullYear();
const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // El mes se cuenta desde 0 (enero) hasta 11 (diciembre)
const dia = fechaActual.getDate().toString().padStart(2, '0');

// Crea la cadena de texto con la fecha actual
const fechaActualTexto = `${agno}-${mes}-${dia}T00:00:00`;

// Reemplaza la fecha en la cadena de texto original
const link = `https://passwordarris.somee.com/api/fecha/${fechaActualTexto}`;
const inputPass = document.getElementById("password");
const buttonGenerar = document.getElementById("btnPass");

// Define una función para obtener la respuesta del servidor y asignarla al input
function obtenerYAsignarValor() {
  fetch(link)
    .then(response => response.text())
    .then(data => {
      inputPass.value = data; // Asigna la respuesta al input
    })
    .catch(error => {
      console.error('Hubo un error al obtener el contenido:', error);
    });
}

//copiar al portapapeles
function copyToClipBoard(parametro) {
  const text = document.getElementById(parametro).value;
  if (text) {
    navigator.clipboard.writeText(text);
  }
  cambiarIcon();
  setTimeout(restaurarIcon,1000);
}

function cambiarIcon() {
  const iconElement = document.getElementById("copy-outline");
  if (iconElement) {
    iconElement.setAttribute("name", "checkbox-outline");
  } else {
    console.log("El elemento 'copy-outline' no se encontró.");
  }
}

function restaurarIcon() {
  const iconElement = document.getElementById("copy-outline");
  if (iconElement) {
    iconElement.setAttribute("name", "copy-outline");
  } else {
    console.log("El elemento 'copy-outline' no se encontró.");
  }
}


// Agrega un event listener al botón para llamar a la función cuando se presione
buttonGenerar.addEventListener('click', (event) => {
  event.preventDefault();
  obtenerYAsignarValor(); // Llama a la función para obtener y asignar el valor
});

document.getElementById("copy-outline").addEventListener("click", () => copyToClipBoard("password"));



