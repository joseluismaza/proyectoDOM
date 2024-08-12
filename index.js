//Array de zapatillas
const zapatillas = [
  {
    id: 1,
    nombre: "Nike Originals",
    modelo: "Nike Revolution",
    precio: 90,
    img: "./assets/nike7.png",
  },
  {
    id: 2,
    nombre: "Nike Originals",
    modelo: "Dunk Low",
    precio: 100,
    img: "./assets/nike6.png",
  },
  {
    id: 3,
    nombre: "Nike Originals",
    modelo: "Air Max 98",
    precio: 150,
    img: "./assets/nike5.png",
  },
  {
    id: 4,
    nombre: "Nike Originals",
    modelo: "Air Force 1",
    precio: 130,
    img: "./assets/nike4.png",
  },
  {
    id: 5,
    nombre: "Nike Originals",
    modelo: "Full Force Low",
    precio: 70,
    img: "./assets/nike3.png",
  },
  {
    id: 6,
    nombre: "Nike Originals",
    modelo: "Air Max SC",
    precio: 160,
    img: "./assets/nike2.png",
  },
  {
    id: 7,
    nombre: "Nike Originals",
    modelo: "Air Max 1",
    precio: 120,
    img: "./assets/nike1.png",
  },
  {
    id: 8,
    nombre: "Adidas Originals",
    modelo: "Forum Buckle",
    precio: 100,
    img: "./assets/adidas5.png",
  },
  {
    id: 9,
    nombre: "Adidas Originals",
    modelo: "Campus",
    precio: 120,
    img: "./assets/adidas4.png",
  },
  {
    id: 10,
    nombre: "Adidas Originals",
    modelo: "Gazelle",
    precio: 90,
    img: "./assets/adidas3.png",
  },
  {
    id: 11,
    nombre: "Adidas Originals",
    modelo: "Handball Spezial",
    precio: 140,
    img: "./assets/adidas1.png",
  },
  {
    id: 12,
    nombre: "Adidas Originals",
    modelo: "Handball Spezial",
    precio: 120,
    img: "./assets/adidas2.png",
  },
  {
    id: 13,
    nombre: "New Balance",
    modelo: "NB 9060",
    precio: 80,
    img: "./assets/nb1.png",
  },
  {
    id: 14,
    nombre: "New Balance",
    modelo: "NB 327",
    precio: 120,
    img: "./assets/nb3.png",
  },
  {
    id: 15,
    nombre: "New Balance",
    modelo: "NB 9060",
    precio: 100,
    img: "./assets/nb2.png",
  },
  {
    id: 16,
    nombre: "New Balance",
    modelo: "NB 480",
    precio: 150,
    img: "./assets/nb4.png",
  },
];

const MODELOS = [];
let MODELO = "";

const NOMBRES = [];
let NOMBRE = "";

const PRECIOS = [];
let PRECIO = "";

// Función para filtrar zapatillas por modelo, nombre y precio seleccionado
const filtrar = () => {
  const filtered = zapatillas.filter((zapa) => {
    const nombreCoincide = !NOMBRE || zapa.nombre === NOMBRE;
    const modeloCoincide = !MODELO || zapa.modelo === MODELO;
    const precioCoincide = !PRECIO || zapa.precio.toString() === PRECIO;

    return nombreCoincide && modeloCoincide && precioCoincide;
  });
  printZapatillas(filtered);
};

document.addEventListener("DOMContentLoaded", () => {
  const filtroIcon = document.querySelector(".filtro-icon");
  const filtrosContainer = document.getElementById("filtros");

  filtroIcon.addEventListener("click", () => {
    filtrosContainer.classList.toggle("oculto");
    filtroIcon.classList.toggle("filtro-activo");
  });
});

// Función para llenar el array de modelos únicos
const fillModelos = (zapas) => {
  MODELOS.splice(0); // Limpiar el array
  const modelosSet = new Set(zapas.map((zapa) => zapa.modelo));
  MODELOS.push(...modelosSet);
};
fillModelos(zapatillas);

//array de nombres únicos
const fillNombres = (zapas) => {
  NOMBRES.splice(0); // Limpiar el array
  const nombresSet = new Set(zapas.map((zapa) => zapa.nombre));
  NOMBRES.push(...nombresSet);
};
fillNombres(zapatillas);

const fillPrecios = (zapas) => {
  PRECIOS.splice(0);
  const preciosSet = new Set(zapas.map((zapa) => zapa.precio));
  PRECIOS.push(...preciosSet);
};
fillPrecios(zapatillas);

// Creación genérica de selectores
const createSelect = (items, divFiltros, type) => {
  const select = document.createElement("select");

  const defaulOption = document.createElement("option");
  defaulOption.value = "";
  defaulOption.textContent = `Selecciona un ${type}`;
  select.appendChild(defaulOption);

  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });

  divFiltros.appendChild(select);

  select.addEventListener("change", (e) => {
    if (type === "nombre") {
      NOMBRE = e.target.value;
    } else if (type === "modelo") {
      MODELO = e.target.value;
    } else if (type === "precio") {
      PRECIO = e.target.value;
    }
  });
};

const createSelectName = () => {
  const divFiltros = document.querySelector("#filtros");
  createSelect(NOMBRES, divFiltros, "nombre");
};

const createSelectModel = () => {
  const divFiltros = document.querySelector("#filtros");
  createSelect(MODELOS, divFiltros, "modelo");
};

const createSelectPrecio = () => {
  const divFiltros = document.querySelector("#filtros");
  createSelect(PRECIOS, divFiltros, "precio");
};

// grid de productos
const printZapatillas = (zapas) => {
  const divZapas = document.querySelector("#main-container");
  divZapas.innerHTML = ""; // Limpiar el contenido anterior

  const fragment = document.createDocumentFragment();

  zapas.forEach((zapatillas) => {
    const divZapatillas = document.createElement("div");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const divDetalles = document.createElement("div");
    const nombre = document.createElement("h4");
    const divModelPrice = document.createElement("div");
    const modelo = document.createElement("p");
    const precio = document.createElement("p");
    const comprarButton = document.createElement("button");

    divZapatillas.classList.add("flex-container", "sombra");
    divImg.classList.add("img-container");
    divDetalles.classList.add("detalles-container");
    divModelPrice.classList.add("modelo-precio-container");
    nombre.classList.add("nombre");
    comprarButton.className = "comprar";

    img.src = zapatillas.img;
    nombre.textContent = zapatillas.nombre;
    modelo.textContent = zapatillas.modelo;
    precio.textContent = `${zapatillas.precio} €`;
    comprarButton.textContent = "Comprar";

    divImg.appendChild(img);
    divDetalles.appendChild(nombre);
    divModelPrice.appendChild(modelo);
    divModelPrice.appendChild(precio);
    divDetalles.appendChild(divModelPrice);
    divZapatillas.appendChild(divImg);
    divZapatillas.appendChild(divDetalles);
    fragment.appendChild(divZapatillas);
    divDetalles.appendChild(comprarButton);
  });

  divZapas.appendChild(fragment);
};

//Limpiar y filtrar
const createButtons = () => {
  const divFiltros = document.querySelector("#filtros");

  const filtrarButton = document.createElement("button");
  filtrarButton.textContent = "Filtrar";
  filtrarButton.addEventListener("click", filtrar);

  const limpiarButton = document.createElement("button");
  limpiarButton.textContent = "Limpiar";
  limpiarButton.addEventListener("click", limpiar);

  divFiltros.appendChild(filtrarButton);
  divFiltros.appendChild(limpiarButton);
};

// Limpiar divFiltros
const limpiar = () => {
  NOMBRE = "";
  MODELO = "";
  PRECIO = "";
  document.querySelectorAll("#filtros select").forEach((select) => {
    select.value = "";
  });
  printZapatillas(zapatillas);
};

printZapatillas(zapatillas);
createSelectModel();
createSelectName();
createSelectPrecio();
createButtons();
