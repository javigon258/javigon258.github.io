{

    // Declaro las variables necesarias
    let nombre;
    let correo;
    let fecha;
    let hora;
    let noches;
    let personas;

    // Variables checks
    let men20;
    let entre20y40;
    let mas40;
    let desayuno;
    let almuerzo;
    let cena;

    //Span de errores de los datos
    let clienteNombre;
    let clienteCorreo;
    let llegadaFecha;
    let llegadaHora;
    let numNoches;
    let numPersonas;
    let TodoSpan;

    //Enviar
    let enviar;

    let map = new Map();

    function init() {

        //Obtengo id de los inputs
        nombre = document.getElementById('nombre');
        correo = document.getElementById('correo');
        fecha = document.getElementById('fecha');
        hora = document.getElementById('hora');
        noches = document.getElementById('noches');
        personas = document.getElementById('personas');

        //Id de los checks
        men20 = document.getElementById('men20');
        entre20y40 = document.getElementById('entre20y40');
        mas40 = document.getElementById('mas40');
        desayuno = document.getElementById('desayuno');
        almuerzo = document.getElementById('almuerzo');
        cena = document.getElementById('cena');

        //Id de los spans
        clienteNombre = document.getElementById('clienteNombre');
        clienteCorreo = document.getElementById('clienteCorreo');
        llegadaFecha = document.getElementById('llegadaFecha');
        llegadaHora = document.getElementById('llegadaHora');
        numNoches = document.getElementById('numNoches');
        numPersonas = document.getElementById('numPersonas');
        TodoSpan = document.getElementById('TodoSpan');

        //Id de boton enviar
        enviar = document.getElementById('enviar');

        //Eventos de Blur en las cajas.
        nombre.addEventListener('blur', validarNombre);
        correo.addEventListener('blur', validarCorreo);
        fecha.addEventListener('blur', validarFecha);
        hora.addEventListener('blur', validarHora);
        noches.addEventListener('blur', validarNoches);
        personas.addEventListener('blur', validarPersonas);

        //Evento click del botón
        enviar.addEventListener("click", validarReserva);

    }

    let patron = {
        correo: [/^[\w]+@[\w]+.[\w]+$/, "El correo es inválido, hola@hola.com"],
        hora: [/\d\d[:]\d\d$/, "La hora es errónea. Ejemplo: 11:40"],
    }

    let reserva = {
        testValores(valor, msg, key) {
            map.set(key, valor);
            if (valor.value === "")
                msg.textContent = "El valor no puede ser nulo";
            else if(valor.value <= 0)
                msg.textContent = "Mínimo 1";
            else
                limpiarValores(key, msg, TodoSpan);

        },
        test(patron, valor, msg, key) {
            if (!patron[0].test(valor.value)) {
                map.set(key, valor);
                msg.textContent = patron[1];
            } else
                limpiarValores(key, msg, TodoSpan);
        },
        testFecha(valor, msg, key) {
            let fecha = Date.parse(valor.value);
            if (isNaN(fecha)) {
                map.set(key, valor);
                msg.textContent = "La fecha no puede ser nula";
            } else
                limpiarValores(key, msg, TodoSpan);
        }
    };

    function validarNombre() {
        reserva.testValores(nombre, clienteNombre, "nombre");
    }

    function validarNoches() {
        reserva.testValores(noches, numNoches, "noches");
    }

    function validarPersonas() {
        reserva.testValores(personas, numPersonas, "personas");
    }

    function validarCorreo() {
        reserva.test(patron.correo, correo, clienteCorreo, "correo");
    }

    function validarHora() {
        reserva.test(patron.hora, hora, llegadaHora, "hora");
    }

    function validarFecha() {
        reserva.testFecha(fecha, llegadaFecha, "fecha");
    }

    function validarEdad() {
        if (men20.checked)
            return men20.value;
        else if (entre20y40.checked)
            return entre20y40.value;
        else
            return mas40.value;
    }

    function validarComida() {
        if (desayuno.checked)
            return desayuno.value;
        else if (almuerzo.checked)
            return almuerzo.value;
        else if (cena.checked)
            return cena.value;
        return "No hay comidas";
    }

    function limpiarValores(key, msg, TodoSpan) {
        if (map.has(key))
            map.delete(key);
        msg.textContent = "";
        TodoSpan.textContent = "";
    };

    function validarReserva() {
        try {
            validarNombre();
            validarCorreo();
            validarFecha();
            validarHora();
            validarNoches();
            validarPersonas();

            if (map.size > 0) {
                TodoSpan.textContent = "";
                map.forEach(element => {
                    element.focus();
                    throw false;
                });
            } else if (map.size === 0) {
                TodoSpan.textContent = "";
                try {
                    let reserva = new Reserva(nombre.value,correo.value, new Date(fecha.value),hora.value, 
                    noches.value,personas.value, validarEdad(),validarComida());
                    reserva.mostrar();
                } catch (e) {
                    TodoSpan.textContent = e.message;
                }
            }
        } catch (e) {}
    }
    window.addEventListener('load', init);
}