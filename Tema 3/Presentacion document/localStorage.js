{
    document.addEventListener("DOMContentLoaded", init)

    function contadorLBoton() {
        if(typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
            document.getElementById("result").innerHTML = "Tu has pulsado al boton " + localStorage.clickcount + " veces.";
        } else {
            document.getElementById("result").innerHTML = "Lo siento, tu navegador no puede almacenar mas...";
        }
    }
    function init() {
        document.getElementById("button").addEventListener('click', contadorLBoton);
    }
}