// 1) Selección de elementos (herramientas DOM)
const titulo = document.querySelector("#titulo");
const nota = document.querySelector("#nota");
const texto = document.querySelector(".nota__texto");
const idInterno = document.querySelector("#idInterno");
const imgNota = document.querySelector("#imgNota");

const btnCambiarTitulo = document.querySelector("#btnCambiarTitulo");
const btnToggleDestacado = document.querySelector("#btnToggleDestacado");
const btnCambiarImagen = document.querySelector("#btnCambiarImagen");

// 2) Leer contenido y atributos
idInterno.textContent = nota.dataset.id; // lee data-id
console.log("Título actual:", titulo.textContent);
console.log("Clase actual nota:", nota.className);

// 3) Actualizar contenido
btnCambiarTitulo.addEventListener("click", () => {
  titulo.textContent = "Panel de Noticias (Actualizado)";
});

// 4) Actualizar características (clases/atributos/estilos)
btnToggleDestacado.addEventListener("click", () => {
  nota.classList.toggle("destacada");
});

// 5) Cambiar atributo src (ejemplo real)
btnCambiarImagen.addEventListener("click", () => {
  const nueva =
    "https://upload.wikimedia.org/wikipedia/commons/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png";
  imgNota.setAttribute("src", nueva);
  texto.textContent = "La imagen y el texto fueron actualizados desde el DOM.";
});
