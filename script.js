//alert("Hola este es mi Javascript");

// let nombre = "Melanie";
// nombre = "María";

// var nombre1 ="Melanie";

// const nombre2 = "Melanie";
//nombre2 = "Melanie";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);


// SELECCIONAR ELEMENTOS

let contenidoTitulo = "Hola"
let logo = document.querySelector("#logo");
// console.log(logo);
// logo.innerHTML = contenidoTitulo;

// CONDICIONALES
let textoTitulo = logo.innerHTML;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
  logo.innerHTML = "Otro";
} else {
  console.log('No se cumple la condicion')
}

let acercaDeTitle = document.querySelector('#acerca-de-title');
console.log(acercaDeTitle.innerHTML)

// FUNCIONES

let nombre1 = "Diana";
let ciudad = "Hz";
let gusto = "el chocolate";

let parrafo2 = document.querySelector("#parrafo2");

function cambiarTexto(nombre1, ciudad, gusto) {
  let contenido = `Me llamo ${nombre1}, aunque me gusta que me digan Mel. Vivo en la ciudad de ${ciudad}. Mi deporte favorito es el
  volleyball, soy amante de los perritos y me encanta ${gusto}.`;
  return contenido;
}

parrafo2.innerHTML = cambiarTexto(nombre1, ciudad, gusto);

const modificarTituloAcercaDe = () => {
  var day = new Date().getDay();
  if (day == 6 || day == 7) {
    acercaDeTitle.innerHTML = 'Sobre mí'
    console.log("El titulo de acerca de mi se cambia")
  } else {
    console.log("El titulo de acerca de mi se mantiene igual")
  }
}

modificarTituloAcercaDe();

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  let navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
  console.log("si funciona el click")
};

//#region PARA EL FORMULARIO DE CONTACTO
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
const alertaContainer = document.getElementById("alerta-container");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  parrafo.innerHTML = valido ? "Enviado" : warnings;
  return valido;
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    alertaContainer.classList.add('oculto');
    formulario.submit();
  } else {
    alertaContainer.classList.remove('oculto');
  }
});
//#endregion