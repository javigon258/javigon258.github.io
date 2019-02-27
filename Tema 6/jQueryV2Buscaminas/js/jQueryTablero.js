let $tableroJuego;
let $fila;
let $columna;
let $finalizada = false;

let funciones = function () {
    $("#dificultad").change(interfazBuscaminas.comenzar);
    $tableroJuego = $("#tableroJuego");
    $("reiniciar").change(interfazBuscaminas.reiniciaPartida)
}

let interfazBuscaminas = {
    comenzar(){
        buscaminas.elegirNivel($(this).val());
//$(this).css("display", "none");
        buscaminas.init();
        buscaminas.mostrar();
        interfazBuscaminas.generarTablero();
        interfazBuscaminas.eliminaMenuContextual();
    },
    eliminaMenuContextual() {
        $tableroJuego.contextmenu(function (event) {
           event.preventDefault();
        })
     },
  
    generarTablero() {
        $tableroJuego.css({
        "display": "grid",
        "grid-template-columns": "repeat(" + buscaminas.columnas + " ,0.5fr)",
        "grid-gap": "2px",
        });
        for (let i = 0; i < buscaminas.filas; i++) {
            for (let j = 0; j < buscaminas.columnas; j++) {
                let $caja = $(`<div class="casilla" id='${i}-${j}'></div>`);

                $caja.click(function () {
                    interfazBuscaminas.picar(i, j);
                })
                $tableroJuego.append($caja);
            }
        }
        $caja = $("div");
    },
    picar(x, y){
        if($finalizada == false){
            if (buscaminas.tableroSolucion[x][y] === "m"){
                interfazBuscaminas.descubrirMina();
                interfazBuscaminas.actualizaTablero();
            }else
                buscaminas.picar(x, y);
            /*if(buscaminas.tableroPulsadas[x][y] = "b"){
            return true;
            }*/
            interfazBuscaminas.actualizaTablero();  
        }
    },
    actualizaTablero() {
        for(const positCas of buscaminas.tableroCasillaAlmacenado){
            let i = positCas.split("-")[0];
            let j = positCas.split("-")[1];
            let $valor = $("#" + i + "-" + j);
            if(buscaminas.tableroSolucion[i][j] === 0)
                $valor.text("");
            else
                $valor.text(buscaminas.tableroSolucion[i][j]);
            $valor.css({
                "background-color": "#CCCCCC",
                "color" : "black",
                "transition-delay": "0.5s"
                })
        }
    },
    marcarBandera(x, y, e){
        if(e.buttons == 2){
            let $valor = $("#" + x + "-" + y);
        }
    },
    descubrirMina() {
        $finalizada = true;
        for (let i = 0; i < buscaminas.filas; i++) {
           for (let j = 0; j < buscaminas.columnas; j++) {
              let $id = $("#" + i + "-" + j);
              //$id.unbind("click");
              if (buscaminas.tableroSolucion[i][j] === "m") {
                 $id.css({
                    "background-color": "red",
                 });
              }
           }
        }
    },
}
$(funciones);