{
  let nombre;
  let lbNombre;
  let correo;
  let lbCorreo;
  let dni;
  let lbDni;
  let fechaNacimiento;
  let lbFecha;
  let telefono;
  let lbTelefono;
  let cuentaCorriente;
  let lbCuenta;
  let paginaWeb;
  let lbUrl;
  let formulario;
  let enviaFormulario;

  let collectionNoValidos;

  let patrones = {
    nombre: [
      /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ]+[/\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])+[/\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])?$/g,
      "Comienza por mayúsculas, con un mínimo de tres caractéres por nombre, al menos nombre y apellido"
    ],
    dni: [
      /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
      "Formato válido 12345678z",
      "La letra introducida no es válida"
    ],
    correo: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Formato de correo no válido"
    ],
    cuentaCorriente: [
      /[/\d]{20}/,
      "Error en el formato de la cuenta corriente"
    ],
    paginaWeb: [
      /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi,
      "Error en el formato de la dirección web"
    ]
  };


  let valNombre = function() {
    let regexNombre = new RegExp(patrones.nombre[0]);
    if (!regexNombre.test(nombre.value)) {
      collectionNoValidos.set("nombre", nombre);
      lbNombre.textContent = patrones.nombre[1];
    } else {
      if (collectionNoValidos.has("nombre")) {
        collectionNoValidos.delete("nombre");
      }
      lbNombre.textContent = "";
    }
    console.log(collectionNoValidos);
  };

  let validarDni = function() {
    let letrasValidas = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E" ];
    let regexCorreo = new RegExp(patrones.dni[0]);
    let valorFinalDni = dni.value.replace(/-|\s/, "");
    let letraUsuario;
    let letraValida;

    if (!regexCorreo.test(valorFinalDni)) {
      lbDni.textContent = patrones.dni[1];
      collectionNoValidos.set("dni", dni);
    } else if (regexCorreo.test(valorFinalDni) && valorFinalDni.length === 9) {
      letraUsuario = valorFinalDni[8];
      let numerosDniUsuario = parseInt(valorFinalDni.substr(0, 8));
      letraValida = letrasValidas[numerosDniUsuario % 23];

      if (letraUsuario.toUpperCase() != letraValida.toUpperCase()) {
        lbDni.textContent = patrones.dni[2];
        collectionNoValidos.set("dni", dni);
      } else {
        lbDni.textContent = "";
        if (collectionNoValidos.has("dni")) {
          collectionNoValidos.delete("dni");
        }
      }
    } else {
      lbDni.textContent = "";
      if (collectionNoValidos.has("dni")) {
        collectionNoValidos.delete("dni");
      }
    }

    console.log(collectionNoValidos);
  };

  let valCorreo = function() {
    let regexCorreo = new RegExp(patrones.correo[0]);
    if (!regexCorreo.test(correo.value)) {
      collectionNoValidos.set("correo", correo);
      lbCorreo.textContent = patrones.correo[1];
    } else {
      if (collectionNoValidos.has("correo")) {
        collectionNoValidos.delete("correo");
      }
      lbCorreo.textContent = "";
    }
    console.log(collectionNoValidos);
  };

  let valFechaNac = function() {
    let valorFecha = Date.parse(fechaNacimiento.value);
    let annoIntroducido;
    let annoActual;

    if (!isNaN(valorFecha)) {
      let fechaIntroducida = new Date(valorFecha);
      let fechaActual = new Date();

      annoIntroducido = fechaIntroducida.getFullYear();
      annoActual = fechaActual.getFullYear();
    }

    if (isNaN(valorFecha)) {
      lbFecha.innerHTML = "La fecha nacimiento no puede estar vacía";
      collectionNoValidos.set("fecha", fechaNacimiento);
    } else if (annoIntroducido > annoActual) {
      lbFecha.innerHTML =
        "La fecha nacimiento no puede ser superior a la fecha actual";
      collectionNoValidos.set("fecha", fechaNacimiento);
    } else {
      lbFecha.innerHTML = "";
      if (collectionNoValidos.has("Fecha")) {
        collectionNoValidos.delete("fecha");
      }
    }
  };

  let valTelefono = function() {
    let valorTelefono = telefono.value;

    if (valorTelefono === "") {
      lbTelefono.innerHTML = "El teléfono no puede estar vacío";
      collectionNoValidos.set("telefono", telefono);
    } else if (valorTelefono.length < 9) {
      lbTelefono.innerHTML = "El teléfono introducido es muy corto";
      collectionNoValidos.set("telefono", telefono);
    } else if (!parseInt(valorTelefono)) {
      lbTelefono.innerHTML = "El formato de teléfono introducido es incorrecto";
      collectionNoValidos.set("telefono", telefono);
    } else {
      lbTelefono.innerHTML = "";
      if (collectionNoValidos.has("telefono")) {
        collectionNoValidos.delete("telefono");
      }
    }
  };

  let valCuenta = function() {
    let regexCuenta = new RegExp(patrones.cuentaCorriente[0]);

    if (!regexCuenta.test(cuentaCorriente.value)) {
      collectionNoValidos.set("cuenta", cuentaCorriente);
      lbCuenta.textContent = patrones.cuentaCorriente[1];
    } else {
      if (collectionNoValidos.has("cuenta")) {
        collectionNoValidos.delete("cuenta");
      }
      lbCuenta.textContent = "";
    }
    console.log(collectionNoValidos);
  };


  let valUrl = function() {
    let regexWeb = new RegExp(patrones.paginaWeb[0]);
    if (!regexWeb.test(paginaWeb.value)) {
      collectionNoValidos.set("url", paginaWeb);
      lbUrl.textContent = patrones.paginaWeb[1];
    } else {
      if (collectionNoValidos.has("url")) {
        collectionNoValidos.delete("url");
      }
      lbUrl.textContent = "";
    }
    console.log(collectionNoValidos);
  };

  let validar = function() {
    try {
      if (collectionNoValidos.size === 0) {
        alert("se ha enviado el formulario");
      } else {
        collectionNoValidos.forEach(element => {
          console.log(element);
          throw false;
        });
      }
    } catch (e) {}
  };

  let init = function() {

    collectionNoValidos = new Map();
    formulario = document.getElementById("formulario");

    nombre = document.getElementById("inputNombre");
    lbNombre = document.getElementById("lbNombre");

    correo = document.getElementById("inputCorreo");
    lbCorreo = document.getElementById("lbCorreo");

    dni = document.getElementById("inputDni");
    lbDni = document.getElementById("lbDni");

    fechaNacimiento = document.getElementById("inputFecha");
    lbFecha = document.getElementById("lbFechaNacimiento");

    telefono = document.getElementById("inputTelefono");
    lbTelefono = document.getElementById("lbTelefono");

    cuentaCorriente = document.getElementById("inputCuenta");
    lbCuenta = document.getElementById("lbCuenta");

    paginaWeb = document.getElementById("inputUrl");
    lbUrl = document.getElementById("lbUrl");

    enviaFormulario = document.getElementById("enviaFormulario");

    nombre.addEventListener("blur", valNombre);
    correo.addEventListener("blur", valCorreo);
    dni.addEventListener("blur", validarDni);
    fechaNacimiento.addEventListener("blur", valFechaNac);
    telefono.addEventListener("blur", valTelefono);
    cuentaCorriente.addEventListener("blur", valCuenta);
    paginaWeb.addEventListener("blur", valUrl);

    enviaFormulario.addEventListener("click", function(event) {
      event.preventDefault();
      validar();
    });
  };


  window.addEventListener("load", init);
}