{
let $tableroJuego;
let $finalizada = false;

let funciones = function() {
  $("#dificultad").change(interfazBuscaminas.comenzar);
  $tableroJuego = $("#tableroJuego");
  $("#reiniciar").change(interfazBuscaminas.reiniciaPartida);
};

let interfazBuscaminas = {

  comenzar() {
    buscaminas.elegirNivel($(this).val());
    buscaminas.init();
    $("#dificultad").hide();
    interfazBuscaminas.generarTablero();
    interfazBuscaminas.eliminaMenuContextual();
  },
  eliminaMenuContextual() {
    $tableroJuego.contextmenu(function(event) {
      event.preventDefault();
    });
  },

  generarTablero() {
    $tableroJuego.css({
      display: "grid",
      "grid-template-columns": "repeat(" + buscaminas.columnas() + " ,0.5fr)",
      "grid-gap": "2px"
    });
    for (let i = 0; i < buscaminas.filas(); i++) {
      for (let j = 0; j < buscaminas.columnas(); j++) {
        let $caja = $(`<div class="casilla" id='${i}-${j}'></div>`);

        $caja.mousedown(function (event) {
          interfazBuscaminas.compruebaClick(event, i, j);
        });
        $tableroJuego.append($caja);
      }
    }
    $caja = $("div");
  },
  compruebaClick(event, x, y){
      switch(event.buttons){
        case 1:
          interfazBuscaminas.picar(x, y);
          break;
        case 2:
          interfazBuscaminas.marcarBandera(x, y);
          break;
        case 3:
          interfazBuscaminas.despejar(x, y);
          break;
      }
  },
  picar(x, y) {
    try {
        if (buscaminas.tableroDeJuego[x][y] == "B") {
          return false;
        }
        buscaminas.picar(x, y);
        interfazBuscaminas.actualizaTablero();
    } catch (error) {
      interfazBuscaminas.descubrirMina();
      interfazBuscaminas.actualizaTablero();
      $("#mensajeFinal").text(error.message).slideDown( "slow" );
    }
  },
  actualizaTablero() {
    for (const positCas of buscaminas.tableroCasillaAlmacenado) {
      let i = positCas.split("-")[0];
      let j = positCas.split("-")[1];
      let $valor = $("#" + i + "-" + j);
      if (buscaminas.tableroSolucion[i][j] === 0) $valor.text("");
      else $valor.text(buscaminas.tableroSolucion[i][j]);
      $valor.css({
        "background-color": "#CCCCCC",
        color: "black"
      });
    }
  },
  
  marcarBandera(x, y) {
      if (buscaminas.tableroPulsadas[x][y] !== "pul") {
          let $valor = $("#" + x + "-" + y);
          buscaminas.marcar(x, y);
          if (buscaminas.tableroDeJuego[x][y] == "")
            $valor.css({
              "background-color": "rgb(5, 121, 254)"
            });
          else {
            $valor.css({
              "background-color": "yellow"
            });
          }
        
      }
    
  },
  despejar(x, y) {
      try {
          buscaminas.despejar(x, y);
          interfazBuscaminas.actualizaTablero();
          if (buscaminas.casillaC.size > 0) {
            for (const coordenada of buscaminas.casillaC) {
              $("#" + coordenada)
                .css({}).fadeOut(200, function() {
                  $("#" + coordenada).fadeIn(200);
                });
            }
          }
        
      } catch (error) {
        interfazBuscaminas.descubrirMina();
        interfazBuscaminas.actualizaTablero();

        $("#mensajeFinal").text(error.message).css({
          "background-color":"green"}).slideDown( "slow" );

      }
    
  },
  descubrirMina() {
    $finalizada = true;
    let cont = 0;
    for (let i = 0; i < buscaminas.filas(); i++) {
      for (let j = 0; j < buscaminas.columnas(); j++) {
        let $id = $("#" + i + "-" + j);

        if (buscaminas.tableroSolucion[i][j] === "m") {
          if (buscaminas.ganar) {
            setTimeout(function() {
              $id.css({
                "background-color": "green",
                transform: "rotateX(360deg)",
                "transition-duration": "1s"
              });
            }, cont);
            $('.casilla').off();
          } else {
            cont += 150;
            setTimeout(function() {
              $id.css({
                "background-color": "red",
                transform: "rotateY(360deg)",
                "transition-duration": "1s"
              }).fadeIn( "slow", 0.33 );
            }, cont);
            $('.casilla').off();
          }
        }
      }
    }
  }
};
$(funciones);
}