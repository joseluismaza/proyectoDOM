// Array de zapatillas
const zapatillas = [
  { id: 1, nombre: "Nike Originals", modelo: "Nike Revolution", precio: 90, img: "./assets/nike7.png" },
  { id: 2, nombre: "Nike Originals", modelo: "Dunk Low", precio: 100, img: "./assets/nike6.png" },
  { id: 3, nombre: "Nike Originals", modelo: "Air Max 98", precio: 150, img: "./assets/nike5.png" },
  { id: 4, nombre: "Nike Originals", modelo: "Air Force 1", precio: 130, img: "./assets/nike4.png" },
  { id: 5, nombre: "Nike Originals", modelo: "Full Force Low", precio: 70, img: "./assets/nike3.png" },
  { id: 6, nombre: "Nike Originals", modelo: "Air Max SC", precio: 160, img: "./assets/nike2.png" },
  { id: 7, nombre: "Nike Originals", modelo: "Air Max 1", precio: 120, img: "./assets/nike1.png" },
  { id: 8, nombre: "Adidas Originals", modelo: "Forum Buckle", precio: 100, img: "./assets/adidas5.png" },
  { id: 9, nombre: "Adidas Originals", modelo: "Campus", precio: 120, img: "./assets/adidas4.png" },
  { id: 10, nombre: "Adidas Originals", modelo: "Gazelle", precio: 90, img: "./assets/adidas3.png" },
  { id: 11, nombre: "Adidas Originals", modelo: "Handball Spezial", precio: 140, img: "./assets/adidas1.png" },
  { id: 12, nombre: "Adidas Originals", modelo: "Handball Spezial", precio: 120, img: "./assets/adidas2.png" },
  { id: 13, nombre: "New Balance", modelo: "NB 9060", precio: 80, img: "./assets/nb1.png" },
  { id: 14, nombre: "New Balance", modelo: "NB 327", precio: 120, img: "./assets/nb3.png" },
  { id: 15, nombre: "New Balance", modelo: "NB 9060", precio: 100, img: "./assets/nb2.png" },
  { id: 16, nombre: "New Balance", modelo: "NB 480", precio: 150, img: "./assets/nb4.png" },
];

let filtroActual = { nombre: "", modelo: "", precio: "" };

document.addEventListener("DOMContentLoaded", () => {
  const filtroIcon = document.querySelector(".filtro-icon");
  const filtrosContainer = document.getElementById("filtros");
  const menuIcon = document.querySelector(".fa-bars");
  const menuList = document.querySelector(".menu-desplegable"); // Selecciona la lista específica del menú desplegable

  // Funcionalidad para mostrar/ocultar filtros
  filtroIcon.addEventListener("click", () => {
    filtrosContainer.classList.toggle("oculto");
    filtroIcon.classList.toggle("filtro-activo");
  });

  // Funcionalidad para mostrar/ocultar menú
  menuIcon.addEventListener("click", () => {
    if (window.innerWidth <= 950) { // Solo aplica en pantallas menores de 950px
      menuList.classList.toggle("menu-abierto"); // Alterna la clase `menu-abierto` para mostrar u ocultar el menú
      menuIcon.classList.toggle("filtro-activo");
    }
  });

  createSelectors(filtrosContainer);
  createButtons(filtrosContainer);
  printZapatillas(zapatillas);
});



// Función para crear selectores dinámicamente
const createSelectors = (container) => {
  const uniqueValues = (key) => [...new Set(zapatillas.map(zapa => zapa[key]))];
  const filters = [
    { items: uniqueValues("nombre"), type: "nombre" },
    { items: uniqueValues("modelo"), type: "modelo" },
    { items: uniqueValues("precio"), type: "precio" }
  ];

  filters.forEach(({ items, type }) => {
    const select = document.createElement("select");
    select.appendChild(new Option(`Selecciona un ${type}`, ""));
    items.forEach(item => select.appendChild(new Option(item, item)));

    select.addEventListener("change", e => {
      filtroActual[type] = e.target.value;
    });

    container.appendChild(select);
  });
};

// Función para crear botones de filtrar y limpiar
const createButtons = (container) => {
  const filtrarButton = document.createElement("button");
  filtrarButton.textContent = "Filtrar";
  filtrarButton.addEventListener("click", () => printZapatillas(filtrarZapatillas()));

  const limpiarButton = document.createElement("button");
  limpiarButton.textContent = "Limpiar";
  limpiarButton.addEventListener("click", () => {
    filtroActual = { nombre: "", modelo: "", precio: "" };
    document.querySelectorAll("#filtros select").forEach(select => select.value = "");
    printZapatillas(zapatillas);
  });

  container.appendChild(filtrarButton);
  container.appendChild(limpiarButton);
};

// Función para filtrar zapatillas
const filtrarZapatillas = () => {
  return zapatillas.filter(({ nombre, modelo, precio }) => {
    return (!filtroActual.nombre || nombre === filtroActual.nombre) &&
      (!filtroActual.modelo || modelo === filtroActual.modelo) &&
      (!filtroActual.precio || precio.toString() === filtroActual.precio);
  });
};

// Función para mostrar zapatillas en pantalla
const printZapatillas = (zapas) => {
  const divZapas = document.querySelector("#main-container");
  divZapas.innerHTML = ""; // Limpiar el contenido anterior

  if (zapas.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No se encontraron zapatillas que coincidan con los filtros.";
    divZapas.appendChild(mensaje);
    return;
  }

  zapas.forEach(({ nombre, modelo, precio, img }) => {
    const divZapatillas = document.createElement("div");
    divZapatillas.classList.add("flex-container", "sombra");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const imgElement = document.createElement("img");
    imgElement.src = img;
    imgElement.alt = nombre;
    imgContainer.appendChild(imgElement);

    const detallesContainer = document.createElement("div");
    detallesContainer.classList.add("detalles-container");

    const nombreElement = document.createElement("h4");
    nombreElement.classList.add("nombre");
    nombreElement.textContent = nombre;

    const modeloPrecioContainer = document.createElement("div");
    modeloPrecioContainer.classList.add("modelo-precio-container");

    const modeloElement = document.createElement("p");
    modeloElement.textContent = modelo;

    const precioElement = document.createElement("p");
    precioElement.textContent = `${precio} €`;

    const comprarButton = document.createElement("button");
    comprarButton.classList.add("comprar");
    comprarButton.textContent = "Comprar";

    modeloPrecioContainer.appendChild(modeloElement);
    modeloPrecioContainer.appendChild(precioElement);

    detallesContainer.appendChild(nombreElement);
    detallesContainer.appendChild(modeloPrecioContainer);
    detallesContainer.appendChild(comprarButton);

    divZapatillas.appendChild(imgContainer);
    divZapatillas.appendChild(detallesContainer);

    divZapas.appendChild(divZapatillas);
  });
};
