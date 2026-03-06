// 1) Selección de elementos (herramientas DOM)
const titulo = document.querySelector("#titulo");
const nota = document.querySelector("#nota");
const texto = document.querySelector(".nota__texto");
const idInterno = document.querySelector("#idInterno");
const imgNota = document.querySelector("#imgNota");

const btnCambiarTitulo = document.querySelector("#btnCambiarTitulo");
const btnToggleDestacado = document.querySelector("#btnToggleDestacado");
const btnCambiarImagen = document.querySelector("#btnCambiarImagen");

// Selección de elementos Parte B
const formAdd = document.querySelector("#formAdd");
const inputTitulo = document.querySelector("#inputTitulo");
const inputEtiqueta = document.querySelector("#inputEtiqueta");
const listaNoticias = document.querySelector("#listaNoticias");

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

// --- PARTE B ---

// 6) Crear y agregar elementos dinámicos
formAdd.addEventListener("submit", (e) => {
  e.preventDefault(); // Evitar recarga

  const nuevoTitulo = inputTitulo.value.trim();
  const nuevaEtiqueta = inputEtiqueta.value.trim();

  if (!nuevoTitulo || !nuevaEtiqueta) return;

  // Crear elemento list item
  const li = document.createElement("li");
  li.classList.add("nota-item");

  // Rellenar contenido con formato HTML interno
  li.innerHTML = `
    <div class="nota-item-content">
      <h3 class="nota-item-titulo">${nuevoTitulo}</h3>
      <span class="nota-item-tag">${nuevaEtiqueta}</span>
    </div>
    <div class="nota-item-actions">
      <button type="button" class="btn-xs btn-star" aria-label="Destacar">⭐</button>
      <button type="button" class="btn-xs btn-delete" aria-label="Eliminar">🗑️</button>
    </div>
  `;

  // Insertar al inicio de la lista
  listaNoticias.prepend(li);

  // Limpiar campos del formulario
  inputTitulo.value = "";
  inputEtiqueta.value = "";
  inputTitulo.focus();
});

// 7) Eliminar o interactuar con elementos creados (Delegación de eventos)
listaNoticias.addEventListener("click", (e) => {
  // Encontrar el botón clickeado
  const isDeleteBtn = e.target.closest(".btn-delete");
  const isStarBtn = e.target.closest(".btn-star");

  // Si clickearon un botón de acciones, detener propagación
  if (isDeleteBtn || isStarBtn) {
    e.stopPropagation();
  }

  // Eliminar elemento
  if (isDeleteBtn) {
    const liPadre = isDeleteBtn.closest(".nota-item");
    if (liPadre) {
      liPadre.remove(); // Eliminación del DOM
    }
  }

  // Alternar clase destacado
  if (isStarBtn) {
    const liPadre = isStarBtn.closest(".nota-item");
    if (liPadre) {
      liPadre.classList.toggle("destacada-item");
    }
  }
});
