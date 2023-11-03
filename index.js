const link = "https://passwordarris.somee.com/api/fecha/2024-01-01T00:00:00";
const inputPass = document.getElementById("password");
const buttonElement = document.getElementById("btnPass");

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
// Agrega un event listener al botón para llamar a la función cuando se presione
buttonElement.addEventListener('click', (event) => {
  event.preventDefault();
  obtenerYAsignarValor(); // Llama a la función para obtener y asignar el valor
});



//
//
//http://passwordarris.somee.com/api/fecha/2024-01-01T00:00:00
//http://www.passwordarris.somee.com/api/fecha/2024-01-01T00:00:00