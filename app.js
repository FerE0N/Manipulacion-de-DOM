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

// --- PARTE B y C (Persistencia Simple) ---
let noticiasData = JSON.parse(localStorage.getItem("noticiasData")) || [];

function guardarEnLocalStorage() {
  localStorage.setItem("noticiasData", JSON.stringify(noticiasData));
}

function renderizarNoticias() {
  listaNoticias.innerHTML = "";

  noticiasData.forEach((nota) => {
    const li = document.createElement("li");
    li.classList.add("nota-item");
    if (nota.destacada) {
      li.classList.add("destacada-item");
    }

    // Dataset para relacionar DOM con el Array Data
    li.dataset.id = nota.id;

    li.innerHTML = `
      <div class="nota-item-content">
        <h3 class="nota-item-titulo">${nota.titulo}</h3>
        <span class="nota-item-tag">${nota.etiqueta}</span>
      </div>
      <div class="nota-item-actions">
        <button type="button" class="btn-xs btn-star" aria-label="Destacar">⭐</button>
        <button type="button" class="btn-xs btn-delete" aria-label="Eliminar">🗑️</button>
      </div>
    `;

    // Mostrar en orden descendente
    listaNoticias.appendChild(li);
  });
}

// Cargar Inicial
renderizarNoticias();

// 6) Crear y agregar elementos dinámicos
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevoTitulo = inputTitulo.value.trim();
  const nuevaEtiqueta = inputEtiqueta.value.trim();

  if (!nuevoTitulo || !nuevaEtiqueta) return;

  const nuevaNotaObj = {
    id: Date.now().toString(),
    titulo: nuevoTitulo,
    etiqueta: nuevaEtiqueta,
    destacada: false,
  };

  // Agregar al inico de la Data persistente
  noticiasData.unshift(nuevaNotaObj);
  guardarEnLocalStorage();
  renderizarNoticias();

  // Limpiar campos del formulario
  inputTitulo.value = "";
  inputEtiqueta.value = "";
  inputTitulo.focus();
});

// 7) Eliminar o interactuar con elementos creados (Delegación de eventos)
listaNoticias.addEventListener("click", (e) => {
  const isDeleteBtn = e.target.closest(".btn-delete");
  const isStarBtn = e.target.closest(".btn-star");

  if (isDeleteBtn || isStarBtn) {
    e.stopPropagation();
  }

  const liPadre = e.target.closest(".nota-item");
  if (!liPadre) return;

  const idNotaStr = liPadre.dataset.id;

  // Eliminar elemento
  if (isDeleteBtn) {
    noticiasData = noticiasData.filter((n) => n.id !== idNotaStr);
    guardarEnLocalStorage();
    renderizarNoticias();
  }

  // Alternar clase destacado
  if (isStarBtn) {
    const notaFound = noticiasData.find((n) => n.id === idNotaStr);
    if (notaFound) {
      notaFound.destacada = !notaFound.destacada;
      guardarEnLocalStorage();
      renderizarNoticias();
    }
  }
});
