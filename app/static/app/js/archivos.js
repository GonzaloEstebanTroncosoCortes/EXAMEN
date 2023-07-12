var primerNombre = document.getElementById("primerNombre");
var segundoNombre= document.getElementById("segundoNombre");
var primerApellido = document.getElementById("apellidoPaterno");
var segundoApellido = document.getElementById("apellidoMaterno");
var genero = document.getElementById("genero");
var rut = document.getElementById("rut");
var direccion = document.getElementById("direccion");
var correo= document.getElementById("correo");
var telefono= document.getElementById("telefono");

var error = document.getElementById("error");

function enviarformulario(){
    console.log("enviando formulario");
    var mensajesError = [];

    if(primerNombre.value === null || primerNombre.value.trim() === ""){
        mensajesError.push("Ingresa tu primer nombre");
    }
    if(segundoNombre.value === null || segundoNombre.value.trim() === ""){
        mensajesError.push("Ingresa tu segundo nombre");
    }
    if(primerApellido.value === null || primerApellido.value.trim() === ""){
        mensajesError.push("Ingresa tu primer apellido");
    }
    if(segundoApellido.value === null || segundoApellido.value.trim() === ""){
        mensajesError.push("Ingresa tu segundo apellido");
    }
    if(genero.value === null || genero.value === ""){
        mensajesError.push("Ingresa tu genero");
    }
    if(rut.value === null || rut.value.trim() === ""){
        mensajesError.push("Ingresa tu rut");
    }
    if(direccion.value === null || direccion.value.trim() === ""){
        mensajesError.push("Ingresa tu direccion");
    }
    if(correo.value === null || correo.value.trim() === ""){
        mensajesError.push("Ingresa tu correo");
    }
    if(telefono.value === null || telefono.value.trim() === ""){
        mensajesError.push("Ingresa tu telefono");
    }
 
    error.innerHTML =  mensajesError.join(",<br>");
    return mensajesError.length === 0;
};

function validarPrimerNombreNumero() {
    const primerNombre = document.getElementById("primerNombre").value.trim();
    if (primerNombre.length < 5 || primerNombre.length > 30) {
      alert("El primer nombre debe tener entre 5 y 30 caracteres.");
      return false;
    }
    return true;
    }
  
  function validarPrimerNombre() {
    const primerNombre = document.getElementById("primerNombre").value.trim();
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.'-]+$/;
    if (!soloLetras.test(primerNombre)) {
      alert("El primer nombre no debe ser un número.");
      return false;
    }
    return true;
  }

function validarSegundoNombreNumero() {
    const segundoNombre = document.getElementById("segundoNombre").value.trim();
    if (segundoNombre.length < 5 || segundoNombre.length > 30) {
      alert("El segundo nombre debe tener entre 5 y 30 caracteres.");
      return false;
    }
    return true;
  }

  function validarSegundoNombre() {
    const segundoNombre = document.getElementById("segundoNombre").value.trim();
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.'-]+$/;
    if (!soloLetras.test(segundoNombre)) {
      alert("El segundo nombre no debe ser un número.");
      return false;
    }
    return true;
  }

  function validarPrimerApellidoNumero() {
    const primerApellido = document.getElementById("apellidoPaterno").value.trim();
    if (primerApellido.length < 5 || primerApellido.length > 30) {
      alert("El Primer Apellido debe tener entre 5 y 30 caracteres.");
      return false;
    }
    return true;
  }

  function validarPrimerApellido() {
    const primerApellido = document.getElementById("apellidoPaterno").value.trim();
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.'-]+$/;
    if (!soloLetras.test(primerApellido)) {
      alert("El Primer Apellido no debe ser un número.");
      return false;
    }
    return true;
  }

  function validarSegundoApellidoNumero() {
    const segundoApellido = document.getElementById("apellidoMaterno").value.trim();
    if (segundoApellido.length < 5 || segundoApellido.length > 30) {
      alert("El Segundo Apellido debe tener entre 5 y 30 caracteres.");
      return false;
    }
    return true;
  }

  function validarSegundoApellido() {
    const segundoApellido = document.getElementById("apellidoMaterno").value.trim();
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.'-]+$/;
    if (!soloLetras.test(segundoApellido)) {
      alert("El Segundo Apellido no debe ser un número.");
      return false;
    }
    return true;
  }


  function validarRut() {
    const rut = document.getElementById("rut").value.trim();
    if (rut.length < 8 || rut.length > 9) {
      alert("El rut debe tener entre 8 y 9 caracteres.");
      return false;
    }
    return true;
  }

  function validarDireccion() {
    const direccion = document.getElementById("direccion").value.trim();
    if (direccion.length < 6 || direccion.length > 30) {
      alert("La direccion debe tener entre 6 y 30 caracteres.");
      return false;
    }
    return true;
  }

  function validarCorreo() {
    const correo = document.getElementById("correo").value.trim();
    if (correo.length < 4 || correo.length > 30) {
      alert("El correo debe tener entre 6 y 30 caracteres.");
      return false;
    }
    return true;
  }

  function validarTelefono() {
    const telefono = document.getElementById("telefono").value.trim();
    if (telefono.length < 9 || telefono.length > 9) {
      alert("El telefono debe tener 9 caracteres.");
      return false;
    }
    return true;
  }