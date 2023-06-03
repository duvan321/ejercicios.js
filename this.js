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
  document.getElementById("mostrarMensaje").textContent = mensaje;
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

document.getElementById("miFormulario").addEventListener("submit", (event) => {
  event.preventDefault();

  const fomuNombre = document.getElementById("nombre").value;
  const formuEmail = document.getElementById("email").value;

  mostrarMensaje(fomuNombre, formuEmail);
});

const mostrarMensaje = function(nombre, email) {
  const mensaje = `¡Hola, ${nombre}! Tu email es: ${email}`;
  document.getElementById("mensaje").textContent = mensaje;
};

//funcion call

const persona = {
  nombre: "joel",
  saludar: function () {
    console.log(`hola mi nombre es: ${this.nombre}`);
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
