//consepto de scope con datos primitivo

let nombre = "Diego";
let email = "mailtito@gmail.com";
function scope() {
  let apellido = "patiño";
  let edad = 27;
  console.log(
    "Tu nombre es:" +
      nombre +
      " y tu apellido es: " +
      apellido +
      " y tienes de edad: " +
      edad +
      " y tu email es: " +
      email
  );
}
scope();

function ejemplo() {
  console.log(
    "Tu nombre es:" + nombre //+
    // " y tu apellido es: " +
    //apellido +
    //" y tienes de edad: " +
    // edad
  );
}
ejemplo();
//ejemplos de this
//const objecto = {
//nombre: (nombre = "diego"),
//obtenerNombre: function () {
//return this.nombre;
//},
//};
//console.log("hola su nonbre es: " + objecto.obtenerNombre());
this.mensaje = "¡Hola desde JavaScript!";
function mostrarMensaj() {
  document.getElementById("mostrarMensaj").textContent = this.mensaje;
}
//function mn() {
// alert(`${this.mensaje}`);
//}
//mn();
//
//datos de tipo objecto
let numeros = [1, 2, 3, 4, 5];
let error = new Error("Se produjo un error");

const miObjeto = {
  nombre: "Diego",
  edad: 27,
  saludar: function () {
    let alerta = `Hola, mi nombre es ${this.nombre} y mi edad es: ${this.edad}`;
    document.getElementById("alerta").textContent = alerta;
  },
};

//ejemplos para el getElementbyid

//document.getElementById("miFormulario").addEventListener("submit", function (event) {event.preventDefault();this.nombre.value;this.email.value;let mensaje = `¡Hola,  ${nombre}  ! Tu email es:  ${email}`; document.getElementById("mensaje").textContent = mensaje; })

  document.getElementById("cambiar").addEventListener("click", function () {
    const colorDeFondo = document.getElementById("cambiar-color").value;
    document
      .getElementById("cuerpo")
      .setAttribute("bgcolor", colorDeFondo);
  });

document.getElementById("miFormulario").addEventListener("submit", (event) => {
  event.preventDefault();

  const fomuNombre = document.getElementById("nombre").value;
  const formuEmail = document.getElementById("email").value;

  mostrarMensaje(fomuNombre, formuEmail);
});

const mostrarMensaje = function (nombre, email) {
  const mensaje = `¡Hola, ${nombre}! Tu email es: ${email}`;
  document.getElementById("mensaje").textContent = mensaje;
};

this.men = "estos son ejemplos de document.getElementById";
function mostrar() {
  document.getElementById("mostrar").textContent = this.men;
}
// const elemento = document.querySelector("#miElemento");
// elemento.textContent = "Nuevo contenido";
// const elementos = document.querySelector(".miClase");
// elementos.classList.add("nuevaClase");
const vElementos = document.querySelectorAll("p");
vElementos.forEach((elemento) => {
  elemento.style.color = "red";
});

// const botonCambiarColor = document.querySelector("#cambiarColorBtn");
// const miElemento = document.querySelector("#miElemento");

// botonCambiarColor.addEventListener("click", function () {
//   miElemento.classList.toggle("cambio-color");
// });
const botonCambiarColor = document.querySelector("#cambiarColorBtn");
const miElemento = document.querySelector("#miElemento");

botonCambiarColor.addEventListener("click", function () {
  const colorAleatorio = generarColorAleatorio();
  miElemento.style.backgroundColor = colorAleatorio;
});

function generarColorAleatorio() {
  const letras = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }

  return color;
}

//funcion call

const persona = {
  nombre: "josue",
  saludar: function () {
    console.log(`Hola mi nombre es: ${this.nombre}`);
  },
};

const otraPersona = {
  nombre: "yinnec",
};

persona.saludar();
persona.saludar.call(otraPersona);

// funcion bild
const Nuevapersona = {
  nombre: "Duvan",
  saludar: function () {
    console.log(`hola mi nombre es: ${this.nombre}`);
  },
};

const NuevaotraPersona = {
  nombre: "Xiomara",
};
Nuevapersona.saludar();
let saludarNuevaOtraPersona = Nuevapersona.saludar.bind(NuevaotraPersona);
saludarNuevaOtraPersona();

// funcion apply
function sumar(a, b) {
  console.log(a + b);
}

sumar.apply(null, [5, 3]);
const objecto = {
  nombre: "yefer",
};
function saludar() {
  console.log(`hola mi nombre es: ${this.nombre}`);
}
saludar.apply(objecto);

const numero = [1, 20, 40, 30, 3, 6, 7];
const numeroMasGrande = Math.max.apply(null, numero);
console.log(numeroMasGrande);
// let numerosMaximo = -Infinity;
// for (let i = 0; i < numero.length; i++) {
//   if (numero[i] > numerosMaximo) {
//     numerosMaximo = numero[i];
//   }
// }
// console.log(numerosMaximo);
