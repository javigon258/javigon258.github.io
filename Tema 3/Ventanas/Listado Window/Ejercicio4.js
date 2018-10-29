{

    function recogerValores(){
        document.getElementById("hostnm").innerHTML = "<b>Hostname: </b>" + location.hostname;
        document.getElementById("href").innerHTML = "<b>URL completa: </b>" + location.href;
        document.getElementById("origin").innerHTML = "<b>Origin: </b>" + location.origin;
        document.getElementById("pathname").innerHTML = "<b>Ruta ejercicio: </b>" + location.pathname;
        document.getElementById("protocol").innerHTML = "<b>Protocolo: </b>" + location.protocol;
    }
    function init() {
       recogerValores();
    }

    document.addEventListener("DOMContentLoaded", init);

}