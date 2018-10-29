{
    /*function mostrarLista(){
        newLista = document.getElementById("lista");
        newLista.document.createElement();
    }*/
    let ventana;
    /*let creaVentana;
    function abrirVentana() {
        creaVentana = document.open('https://www.w3schools.com', 'Ejemplo', 'width=300,height=450,top=0,left=0');
    }

    function deglosarUrl() {
        creaVentana = document.open('https://www.w3schools.com', 'Ejemplo', 'width=300,height=450,top=0,left=550');
        //creaVentana.
    }

    function desplazar(){
        creaVentana.scrollTo(600,100)
    }*/

    function recogerValores(){
        document.getElementById('lista').innerHTML = 
            "window.outerHeight " + window.outerHeight+ ",tiene la altura en pixeles de toda la ventana del navegador"+"<br>"
            + "window.innerHeight "+ window.innerHeight +", altura (en píxeles) de la ventana de visualización del navegador que incluye, si está renderizada, la barra de desplazamiento horizontal"+"<br>"
            + "window.screen.availHeight "+ window.screen.availHeight +", evuelve el espacio total vertical disponible en la pantalla" +"<br>"
            + "window.screen.height "+ window.screen.height+" ,devuelve la altura en pixeles de la pantalla" +"<br>"
            + "window.document.clientHeight " + window.document.clientHeight + " ,la opción se encuentra deprecated.";
    }
    function init() {
        /*let otro = document.getElementsByTagName("scrol");
        let button = document.getElementById("button");
        button.addEventListener('click', abrirVentana);
        otro.addEventListener('click', desplazar);
        */
       recogerValores();
    }

    document.addEventListener("DOMContentLoaded", init)
}