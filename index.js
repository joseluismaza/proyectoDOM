//Array de zapatillas
const zapatillas = [
  {
    id: 1,
    nombre: "Nike Originals",
    modelo: "Nike Revolution",
    precio: 90,
    estrellas: 5,
    img: "./assets/nike7.png",
  },
  {
    id: 2,
    nombre: "Nike Originals",
    modelo: "Dunk Low",
    precio: 100,
    estrellas: 3,
    img: "./assets/nike6.png",
  },
  {
    id: 3,
    nombre: "Nike Originals",
    modelo: "Air Max 98",
    precio: 150,
    estrellas: 2,
    img: "./assets/nike5.png",
  },
  {
    id: 4,
    nombre: "Nike Originals",
    modelo: "Air Force 1",
    precio: 130,
    estrellas: 4,
    img: "./assets/nike4.png",
  },
  {
    id: 5,
    nombre: "Nike Originals",
    modelo: "Full Force Low",
    precio: 70,
    estrellas: 5,
    img: "./assets/nike3.png",
  },
  {
    id: 6,
    nombre: "Nike Originals",
    modelo: "Air Max SC",
    precio: 160,
    estrellas: 5,
    img: "./assets/nike2.png",
  },
  {
    id: 7,
    nombre: "Nike Originals",
    modelo: "Air Max 1",
    precio: 120,
    estrellas: 3,
    img: "./assets/nike1.png",
  },
  {
    id: 8,
    nombre: "Adidas Originals",
    modelo: "Forum Buckle",
    precio: 100,
    estrellas: 2,
    img: "./assets/adidas5.png",
  },
  {
    id: 9,
    nombre: "Adidas Originals",
    modelo: "Campus",
    precio: 120,
    estrellas: 1,
    img: "./assets/adidas4.png",
  },
  {
    id: 10,
    nombre: "Adidas Originals",
    modelo: "Gazelle",
    precio: 90,
    estrellas: 3,
    img: "./assets/adidas3.png",
  },
  {
    id: 11,
    nombre: "Adidas Originals",
    modelo: "Handball Spezial",
    precio: 140,
    estrellas: 5,
    img: "./assets/adidas1.png",
  },
  {
    id: 12,
    nombre: "Adidas Originals",
    modelo: "Handball Spezial",
    precio: 120,
    estrellas: 4,
    img: "./assets/adidas2.png",
  },
  {
    id: 13,
    nombre: "New Balance",
    modelo: "NB 9060",
    precio: 80,
    estrellas: 4,
    img: "./assets/nb1.png",
  },
  {
    id: 14,
    nombre: "New Balance",
    modelo: "NB 327",
    precio: 120,
    estrellas: 2,
    img: "./assets/nb3.png",
  },
  {
    id: 15,
    nombre: "New Balance",
    modelo: "NB 9060",
    precio: 100,
    estrellas: 1,
    img: "./assets/nb2.png",
  },
  {
    id: 16,
    nombre: "New Balance",
    modelo: "NB 480",
    precio: 150,
    estrellas: 5,
    img: "./assets/nb4.png",
  },
];

const MODELOS = [];
let MODELO = "";

const NOMBRES = [];
let NOMBRE = "";


// Función para filtrar zapatillas por modelo y nombre seleccionado
const filtrar = () => {
  const filtered = [];

  //FILTRO DE NOMBRE Y MODELO
  for (const zapa of zapatillas) {
    if (NOMBRE && MODELO) {
      if (zapa.nombre === NOMBRE && zapa.modelo === MODELO) {
        filtered.push(zapa);
      }
    } else if (NOMBRE) {
      if (zapa.nombre === NOMBRE) {
        filtered.push(zapa);
      }
    } else if (MODELO) {
      if (zapa.modelo === MODELO) {
        filtered.push(zapa);
      }
    }
  }
  printZapatillas(filtered);
};

// Función para llenar el array de modelos únicos
const fillModelos = (zapas) => {
  // Vaciar el array
  MODELOS.splice(0);
  for (const zapa of zapas) {
    if (!MODELOS.includes(zapa.modelo)) {
      MODELOS.push(zapa.modelo);
    }
  }
};
fillModelos(zapatillas);

//array de nombres únicos
const fillNombres = (zapas) => {
  NOMBRES.splice(0);
  for (const zapa of zapas) {
    if (!NOMBRES.includes(zapa.nombre)) {
      NOMBRES.push(zapa.nombre);
    }
  }
};
fillNombres(zapatillas);

// Creación genérica de selectores
const createSelect = (items, divFiltros, type) => {
  const select = document.createElement("select");

  for (const item of items) {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  }

  divFiltros.appendChild(select);

  select.addEventListener("change", (e) => {
    if (type === "nombre") {
      NOMBRE = e.target.value;
    } else if (type === "modelo") {
      MODELO = e.target.value;
    }
    filtrar();
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


// grid de productos
const printZapatillas = (zapas) => {
  const divZapas = document.querySelector("#main-container");
  divZapas.innerHTML = ""; // Limpiar el contenido anterior

  zapas.forEach((zapatillas) => {
    const divZapatillas = document.createElement("div");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const divDetalles = document.createElement("div");
    const nombre = document.createElement("h4");
    const divModelPrice = document.createElement("div");
    const modelo = document.createElement("p");
    const precio = document.createElement("p");
    const divEstrellas = document.createElement("div");

    // Bucle para las estrellas
    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement("div");
      estrella.className = "estrella";
      // Pintar de color la estrella en función de la valoración indicada
      if (zapatillas.estrellas >= i) {
        estrella.classList.add("rellena");
      }
      divEstrellas.appendChild(estrella);
    }

    // Añadir clases
    divZapatillas.classList.add("flex-container", "sombra");
    divImg.classList.add("img-container");
    divDetalles.classList.add("detalles-container");
    divEstrellas.classList.add("estrellas", "flex-container");
    divModelPrice.classList.add("modelo-precio-container");
    nombre.classList.add("nombre");
    modelo.classList.add("modelo");
    precio.classList.add("precio");

    // Impresión de los datos
    img.src = zapatillas.img;
    nombre.textContent = zapatillas.nombre;
    modelo.textContent = zapatillas.modelo;
    precio.textContent = `${zapatillas.precio} €`;

    // Estructura contenido HTML
    divImg.appendChild(img);
    divDetalles.appendChild(nombre);
    divModelPrice.appendChild(modelo);
    divModelPrice.appendChild(precio);
    divDetalles.appendChild(divModelPrice);
    divDetalles.appendChild(divEstrellas);
    divZapatillas.appendChild(divImg);
    divZapatillas.appendChild(divDetalles);
    divZapas.appendChild(divZapatillas);
  });
};

printZapatillas(zapatillas);
createSelectModel();
createSelectName();

/* MENU */

