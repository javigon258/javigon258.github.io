{
    let btn;
    let btnDespla;
    let arr = 0;
    let izq = 0;
    
    function abrirVentana() {
        let creaVentana = window.open('', '' , 'width=400,height=100,top='+(arr+=205)+',left='+(izq+=10)+'');
        creaVentana.document.write( 
            `<html lang='en'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                <title>Ventana </title>
                <script src='cierraVentana.js'>
                </script> 
            </head>
                <body>
                <p>Ventana de prueba </p>
                <button onclick='cerrarVentana();' id='cierra'>Cerrar</button>
                </body>
            </html>`);
    }

    function desplaza(){
        abrirVentana();
        creaVentana.scrollBy(50,150);
    }

    function init() {
        btn = document.getElementById("creaVentana");
        btn.addEventListener('click', abrirVentana);
        btnDespla = document.getElementById("desplazarVentana");
        btnDespla = addEventListener('click', desplaza);
    }

    document.addEventListener("DOMContentLoaded", init);
}