  // funciones.js
 alert("Ongi etorri a la web Feria de viajes.");
 
//funciones botones alerta
 function alerta() {
 alert("¡Fechas sin confirmar!");
 }
 
 function informativo() {
    alert("En breve más información y nuevas agencias");
 }
  
//funcion saludo
 function saludar(nombre) {
  alert("Hola, " + nombre + " ¿te gustaría exponer?");
}

//funcion validar formulario
function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  if (nombre.trim() === "") {
    alert("El nombre es obligatorio.");
    return false;
  }
  alert("Formulario válido.");
  return true;
}

//funcion cambiar color fondo
function cambiarColorFondo(color) {
  document.body.style.backgroundColor = color;
}

//funcion cambiar texto
function clic() {
  let p = document.getElementById("parrafo");
  if (p.innerHTML === "Actividades para todos los gustos.") {
    p.innerHTML = "¡Reserva tu plaza antes que nadie y evita colas!";
  } else {
    p.innerHTML = "Actividades para todos los gustos.";
  }
}

//funcion cambiar texto 2
function blog() {
  let p = document.getElementById("parrafo2") .innerHTML ="En este bloq encontraras sitios interesantes.";
}

//funcion sumar tres numeros
function sumar() {
     let a = parseFloat(document.getElementById("num1").value) || 0;
     let b = parseFloat(document.getElementById("num2").value) || 0;
     let c = parseFloat(document.getElementById("num3").value) || 0;
     document.getElementById("resultado").innerHTML = "Resultado: " + (a + b + c);
   }



