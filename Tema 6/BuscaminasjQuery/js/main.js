
let $buscaminasInterfaz;
let $fila;
let $columna;

let animaciones = function () {
   $("#botonesNivel").change(buscaminasGui.comenzarJuego);
   $buscaminasInterfaz = $("#buscaminasInterfaz");
   $("#record").change(buscaminasGui.partidas);
}

let buscaminasGui = {
   comenzarJuego() {
      buscaminas.elegirNivel($(this).val());
      $(this).css("display", "none");
      buscaminas.init();
      buscaminasGui.generarTableroIntefaz();
      buscaminasGui.eliminaMenuContextual();
      $("#banderas").text(" " + buscaminas.banderas);
      buscaminasGui.partidas();
   },

   eliminaMenuContextual() {
      $buscaminasInterfaz.contextmenu(function (event) {
         event.preventDefault();
      })
   },

   generarTableroIntefaz() {
      $buscaminasInterfaz.css({
         "display": "grid",
         "grid-template-columns": "repeat(" + buscaminas.columnas + " ,0.5fr)",
         "width": "100%"
      });

      for (let i = 0; i < buscaminas.filas; i++) {
         for (let j = 0; j < buscaminas.columnas; j++) {

            let $input = $(`<input type='text' id='${i}-${j}' readOnly></input>`);
            $buscaminasInterfaz.append($input);

         }
      }
      $input = $("input");

      $input.click(function () {
         buscaminasGui.picar($(this));

      })
      $input.mousedown(function (event) {
         buscaminasGui.marcar(event, $(this));
      })
      $input.mousedown(function (event) {
         buscaminasGui.despejar(event, $(this));
      })
   },

   picar(id) {
      buscaminasGui.filaColumna(id);
      try {
         if (buscaminas.tableroJugable[$fila][$columna] === "b")
            return true; 
         else {
            buscaminas.picar($fila, $columna);
            buscaminasGui.actualizarTablero();
         }
      } catch (error) {
         $("h2").text(error.message);
         buscaminasGui.descubrirMinas();
      }
   },

   marcar(event, id) {
      buscaminasGui.filaColumna(id);
      let $id = $("#" + $fila + "-" + $columna);

      try {
         if (event.buttons === 2) {
            buscaminas.marcar($fila, $columna);
            if (buscaminas.tableroJugable[$fila][$columna] === "b") {
               console.log("Coloco bandera");
               $("#banderas").text(" " + buscaminas.banderas);
               $id.css({
                  "background-color": "yellow",
                  "transition-duration": "1s"
               })
            } else {
               $("#banderas").text(" " + buscaminas.banderas);
               $id.css({
                  "background-color": "blue",
                  "transition-duration": "1s"
               })
            }
         }
      } catch (error) {
         $("h2").text(error.message);
      }
   },

   despejar(event, id){
      buscaminasGui.filaColumna(id);

      try {
         if (event.buttons === 3 || event.buttons === 4) {
            console.log("boton 4");
            buscaminas.despejar($fila, $columna);
            buscaminasGui.actualizarTablero();
         }
      } catch (error) {
         $("h2").text(error.message);
         buscaminasGui.descubrirMinas();
      }
   },

   partidas() {

      let contador = localStorage.getItem("partidas");
      contador = (contador === null) ? 0 : parseInt(contador);
      $("#record").text(contador);
      if (buscaminas.banderaGanado)
         localStorage.setItem("partidas", ++contador);
      else
         localStorage.setItem("partidas", contador); 
   },

   descubrirMinas() {
      let contador = 0;
      for (let i = 0; i < buscaminas.filas; i++) {
         for (let j = 0; j < buscaminas.columnas; j++) {
            contador += 0.25;

            let $id = $("#" + i + "-" + j)
            $id.prop("disabled", true); 
            $id.prop("click", null).off("click"); 

            if (buscaminas.tableroDescubierto[i][j] === "m") {
               $id.css({
                  "background-color": "#FF4136",
                  "transition-duration": "0" + contador + "s",
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
      buscaminasGui.partidas();
      buscaminasGui.recargarPagina();
   },

   actualizarTablero() {
      let contador = 0.05;
      for (const coordenada of buscaminas.casillaPulsada) {
         contador += 0.15;
         let i = coordenada.split("-")[0];
         let j = coordenada.split("-")[1];

         let $valor = $("#" + i + "-" + j)
         $valor.off(); 

         if (buscaminas.tableroJugable[i][j] === 0)
            $valor.val("");
         else
            $valor.val(buscaminas.tableroJugable[i][j]);
         $valor.css({
            "background-color": "rgb(5, 121, 254)",
            "transform": "rotate(-360deg)",
            "transition-duration": "0" + contador + "s"
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
   recargarPagina() {
      $('#reiniciar').click(function () {
         location.reload();
      });
   },
}

$(animaciones);