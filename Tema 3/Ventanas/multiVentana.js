/**
 *Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 *Métodos a utilizar:
 *   miVentana = window.open('','','width=200,height=200');
 *   miVentana.document.open();
 *   miVentana.document.write() 
 *   Añade el esqueleto básico: html, head, title, body, ul...
 * 
 */

{
    let button;
    let arr = 0;
    let izq = 0;
    
    function abrirVentana() {
        for (let i = 0; i < 5; i++) {
            let creaVentana = document.open('', '' , 'width=200,height=100,top='+(arr+=15)+',left='+(izq+=10)+'');
            creaVentana.document.write( 
                `<html lang='en'>
                <head>
                  <meta charset='UTF-8'>
                  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                  <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                  <title>VEntana ${i + 1} </title>
                  <script src='cierraVentana.js'>
                  </script> 
                </head>
                  <body>
                  <p>Ventana  ${i + 1}  </p>
                  <button onclick='cerrarVentana();' id='cierra'>Cerrar</button>
                  </body>
                </html>`);
        }
    }

    function cerrarVentana(){
        creaVentana.document.close();
    }

    function init() {
        button = document.getElementById("button");
        button.addEventListener('click', abrirVentana);
    }

    document.addEventListener("DOMContentLoaded", init);

}