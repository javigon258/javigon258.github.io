{
    document.addEventListener("DOMContentLoaded", init)

    function comprobacion() {
        if (window.top != window.self)  {
            document.getElementById("demo").innerHTML = "¡Esta ventana no es la ventana superior! ¿Estoy en un marco?";
        } else { 
            document.getElementById("demo").innerHTML = "¡Esta ventana es la ventana superior!";
        } 
    }
    function init() {
        document.getElementById("button").addEventListener('click', comprobacion);
    }
}