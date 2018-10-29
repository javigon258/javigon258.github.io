{
    document.addEventListener("DOMContentLoaded", init)

    function contadorSBoton() {
        if(typeof(Storage) !== "undefined") {
            if (sessionStorage.clickcount) {
                sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
            } else {
                sessionStorage.clickcount = 1;
            }
            document.getElementById("result").innerHTML = "Tu has pulsado al boton " + sessionStorage.clickcount + " veces en esta sesion.";
        } else {
            document.getElementById("result").innerHTML = "Lo siento, tu navegador no puede almacenar mas...";
        }
    }
    function init() {
        document.getElementById("button").addEventListener('click', contadorSBoton);
    }
}