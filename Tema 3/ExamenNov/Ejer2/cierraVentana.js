{
    let btcerrar;

    function cerrarVentana(){
        window.close();
    }

    function init() {
        btcerrar = document.getElementById("cierra");
        btcerrar.addEventListener('click', cerrarVentana);
    }

    window.addEventListener("load", init);
}