
let $bInterfaz;
let $fila;
let $columna;

let animaciones = function () {
   $("#botonesNivel").change(buscaminasInterfaz.comenzarJuego);
   $bInterfaz = $("#bInterfaz");
   $("#record").change(buscaminasInterfaz.partidas);
}

let buscaminasInterfaz = {
   comenzarJuego() {
      buscaminas.elegirNivel($(this).val());
      $(this).css("display", "none");
      buscaminas.init();

      buscaminasInterfaz.generarTablero();
     // buscaminasInterfaz.eliminaMenuContextual();
      $("#banderas").text(" " + buscaminas.banderas);
      buscaminasInterfaz.partidasRecord();
   },
/*
   eliminaMenuContextual() {
      $bInterfaz.contextmenu(function (event) {
         event.preventDefault();
      })
   },*/

   generarTablero() {
      $bInterfaz.css({
         "display": "grid",
         "grid-template-columns": "repeat(" + buscaminas.columnas + " ,0.5fr)",
         "width": "100%",
      });
      for (let i = 0; i < buscaminas.filas; i++) {
         for (let j = 0; j < buscaminas.columnas; j++) {
            let $input = $(`<input type='text' id='${i}-${j}' readOnly></input>`);
            $bInterfaz.append($input);
         }
      }
      $input = $("input");

      $input.click(function () {
         buscaminasInterfaz.picar($(this));
      })
      $input.mousedown(function (event) {
         buscaminasInterfaz.marcar(event, $(this));
      })
   },

   picar(id) {
      buscaminasInterfaz.filaColumna(id);
      try {
         if (buscaminas.tableroParaJugar[$fila][$columna] === "b")
            return true; 
         else {
            buscaminas.picar($fila, $columna);
            buscaminasInterfaz.actualizarTablero();
         }
      } catch (error) {
         $("h2").text(error.message);
         buscaminasInterfaz.descubrirMinas();
      }
   },

   marcar(event, id) {
      buscaminasInterfaz.filaColumna(id);
      let $id = $("#" + $fila + "-" + $columna);
      try {
         if (event.buttons === 2) {
            buscaminas.marcar($fila, $columna);
            if (buscaminas.tableroParaJugar[$fila][$columna] === "b") {
               console.log("Coloco bandera");
               $("#banderas").text(" " + buscaminas.banderas);
               $id.css({
                  "background-color": "yellow",
                  "transition-duration": "1s"
               })
            } else {
               $("#banderas").text(" " + buscaminas.banderas);
               $id.css({
                  "background-color": "rgb(5, 121, 254)",
                  "transition-duration": "1s"
               })
            }
         }
      } catch (error) {
         $("h2").text(error.message);
      }
   },
   partidasRecord() {
      let cont = localStorage.getItem("partidas");
      cont = (cont === null) ? 0 : parseInt(cont);
      $("#record").text(cont);
      if (buscaminas.banderaGanado)
         localStorage.setItem("partidas", ++cont);
      else
         localStorage.setItem("partidas", cont); 
   },

   descubrirMinas() {
      let cont = 0;
      for (let i = 0; i < buscaminas.filas; i++) {
         for (let j = 0; j < buscaminas.columnas; j++) {
            cont += 0.10;

            let $id = $("#" + i + "-" + j)
            $id.prop("disabled", true); 
            $id.prop("click", null).off("click"); 

            if (buscaminas.tableroDescubierto[i][j] === "m") {
               $id.css({
                  "background-color": "#FF4136",
                  "transition-duration": "0" + cont + "s",
                  "transform": "scale(1.1)",
                  "animation": " 2s shake infinite linear",
                  "transform": "translate3d(0, 0, 0)",
                  "backface-visibility": "hidden",
                  "perspective": "1000px"
                  //"animation": "2s shake infinite linear"
               });
            }
         }
      }
      buscaminasInterfaz.partidasRecord();
      buscaminasInterfaz.reiniciaPartida();
   },

   actualizarTablero() {
      let cont = 0.05;
      for (const coordenada of buscaminas.casillaPulsada) {
         cont += 0.05;
         let i = coordenada.split("-")[0];
         let j = coordenada.split("-")[1];

         let $valor = $("#" + i + "-" + j)
         $valor.off(); 

         if (buscaminas.tableroParaJugar[i][j] === 0)
            $valor.val("");
         else
            $valor.val(buscaminas.tableroParaJugar[i][j]);
         $valor.css({
            //"position": "relative",
            "background-color": "rgb(47, 249, 54)",
            "animation" : "flip "+cont+"s linear both",
            "transition-duration": "0" + cont + "s"
         });
      }
   },
   filaColumna(id) {
      $fila = parseInt(id.prop("id").split("-")[0]);
      $columna = parseInt(id.prop("id").split("-")[1]);
   },

   /**
    * Recarga la página al perder la partida.
    */
   reiniciaPartida() {
      $('#reiniciar').click(function () {
         location.reload();
      });
   },
}

$(animaciones);