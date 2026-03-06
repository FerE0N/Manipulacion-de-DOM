# Práctica de Manipulación del DOM - Administrador de Noticias

## 📝 Descripción
Este repositorio contiene la "Práctica: Manipulación del DOM con JavaScript". El proyecto consiste en el desarrollo de una interfaz web que funciona como un "mini CMS" para administrar un panel de noticias. Utilizando JavaScript puro (Vanilla JS), la aplicación interactúa directamente con el Document Object Model (DOM) para leer, actualizar, crear y eliminar elementos de forma dinámica.

## ✨ Características Principales
* **Interacción y Actualización:** Controles para modificar el contenido de texto (título), alternar clases CSS para cambiar el diseño (modo destacado) y actualizar atributos como el src de las imágenes.
* **Creación Dinámica de Elementos:** Un formulario interactivo que captura un título y una etiqueta (ej. UTSJR) para construir nuevos nodos HTML y agregarlos al inicio de la lista de noticias.
* **Delegación de Eventos:** Implementación eficiente de event listeners en el contenedor principal para gestionar acciones de eliminación y resaltado sobre elementos generados dinámicamente.
* **Reto Técnico Aplicado:** Implementación de *[Nota: Aquí puedes escribir si elegiste Búsqueda local, Persistencia con LocalStorage, o Seguridad XSS]* para extender la funcionalidad base.

## 🛠️ Tecnologías y Estructura
El proyecto está construido dentro de la carpeta `dom-lab/` con la siguiente estructura base:

* **HTML5 (`index.html`):** Estructura semántica de la interfaz y los formularios.
* **CSS3 (`styles.css`):** Estilos de la tarjeta, botones, diseño en grilla (`display: grid`) y clases dinámicas.
* **JavaScript (`app.js`):** Lógica de selección de elementos (`querySelector`), manejo de eventos y creación de nodos.