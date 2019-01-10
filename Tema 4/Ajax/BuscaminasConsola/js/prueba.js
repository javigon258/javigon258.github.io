let buscaminas = (function () {

  let campoMinas;
  let perdida = true;
  let numLibres = 0;

  function Casilla(valor, bandera = false, tapada = true) {
      this.valor = valor;
      this.bandera = bandera;
      this.tapada = tapada;
  }

  function init(dificultad = 1) {
      let numFilas;
      let numComlumnas;
      let numMinas;
      switch (dificultad) {
          case 2:
              numFilas = 16;
              numComlumnas = 16;
              numMinas = 40;
              break;
          case 3:
              numFilas = 30;
              numComlumnas = 30;
              numMinas = 30;
              break;
          case 1:
          default:
              numFilas = 5;
              numComlumnas = 5;
              numMinas = 5;
              break;
      }
      crearTablero(numFilas, numComlumnas, numMinas);
      numLibres = numFilas * numComlumnas - numMinas;
      perdida = false;
      mostrarTableroJuego();
  }

  function crearTablero(x, y, numMinas) {
      generaMatrizVacia(x, y);
      insertarMinas(numMinas);
  }

  function generaMatrizVacia(x, y) {
      let matriz = [];
      for (let i = 0; i < x; i++) {
          matriz[i] = []
          for (let j = 0; j < y; j++) {
              matriz[i][j] = new Casilla(0);
          }
      }
      campoMinas = matriz;
  }

  function insertarMinas(numMinas) {
      let num1;
      let num2;
      for (let i = 0; i < numMinas; i++) {
          do {
              num1 = generaNumeroAleatorio(0, campoMinas.length - 1);
              num2 = generaNumeroAleatorio(0, campoMinas[1].length - 1);
          } while (campoMinas[num1][num2].valor == 9)
          campoMinas[num1][num2].valor = 9;
      }
      actualizaTablero();
  }

  function actualizaTablero() {
      for (let i = 0; i < campoMinas.length; i++) {
          for (let j = 0; j < campoMinas[1].length; j++) {
              if (campoMinas[i][j].valor == 9) {
                  if (i != 0)
                      if (campoMinas[i - 1][j].valor !== 9)
                          campoMinas[i - 1][j].valor++;
                  if (i != campoMinas.length - 1)
                      if (campoMinas[i + 1][j].valor !== 9)
                          campoMinas[i + 1][j].valor++;
                  if (j != campoMinas[1].length - 1)
                      if (campoMinas[i][j + 1].valor !== 9)
                          campoMinas[i][j + 1].valor++;
                  if (j != 0)
                      if (campoMinas[i][j - 1].valor !== 9)
                          campoMinas[i][j - 1].valor++;
                  if (j !== 0 && i !== campoMinas.length - 1)
                      if (campoMinas[i + 1][j - 1].valor !== 9)
                          campoMinas[i + 1][j - 1].valor++;
                  if (i != 0 && j != 0)
                      if (campoMinas[i - 1][j - 1].valor !== 9)
                          campoMinas[i - 1][j - 1].valor++;
                  if (i != campoMinas.length - 1 && j != campoMinas[1].length - 1)
                      if (campoMinas[i + 1][j + 1].valor !== 9)
                          campoMinas[i + 1][j + 1].valor++;
                  if (i != 0 && j != campoMinas[1].length - 1)
                      if (campoMinas[i - 1][j + 1].valor !== 9)
                          campoMinas[i - 1][j + 1].valor++;
              }
          }
      }
  }

  function generaNumeroAleatorio(min, max) {
      return Math.round(Math.random() * (max - min) + min);
  }

  function picar(i, j) {
      comprobarDentroRango(i, j);

      if (campoMinas[i][j].bandera) {
          throw new Error("No puedes picar si hay una bandera!");
      }
      if (campoMinas[i][j].valor == 9) {
          throw new Error("Has perdido");
      }
      campoMinas[i][j].tapada = false;
      numLibres--;
      if (numLibres == 0) {
          throw new Error("Enhorabuena, has ganado.");
      }
      if (campoMinas[i][j].valor == 0) {
          if (i != 0)
              if (campoMinas[i - 1][j].tapada)
                  picar(i - 1, j);
          if (i != campoMinas.length - 1)
              if (campoMinas[i + 1][j].tapada)
                  picar(i + 1, j);
          if (j != campoMinas[1].length - 1)
              if (campoMinas[i][j + 1].tapada)
                  picar(i, j + 1);
          if (j != 0)
              if (campoMinas[i][j - 1].tapada)
                  picar(i, j - 1);
          if (j !== 0 && i !== campoMinas.length - 1)
              if (campoMinas[i + 1][j - 1].tapada)
                  picar(i + 1, j - 1);
          if (i != 0 && j != 0)
              if (campoMinas[i - 1][j - 1].tapada)
                  picar(i - 1, j - 1);
          if (i != campoMinas.length - 1 && j != campoMinas[1].length - 1)
              if (campoMinas[i + 1][j + 1].tapada)
                  picar(i + 1, j + 1);
          if (i != 0 && j != campoMinas[1].length - 1)
              if (campoMinas[i - 1][j + 1].tapada)
                  picar(i - 1, j + 1);
      }

  }

  function marcar(i, j) {
      comprobarDentroRango(i, j);
      if (!campoMinas[i][j].tapada) {
          throw new Error("No puedes poner una bandera en una casilla descubierta.");
      }
      campoMinas[i][j].bandera ? campoMinas[i][j].bandera = false : campoMinas[i][j].bandera = true;
  }

  function despejar(i, j) {
      let numBanderas = 0;
      
      if(campoMinas[i][j].tapada){
          throw new Error("No puedes despejar una casilla tapada.");
      }

      if (i != 0)
          if (campoMinas[i - 1][j].bandera)
              numBanderas++;
      if (i != campoMinas.length - 1)
          if (campoMinas[i + 1][j].bandera)
              numBanderas++;
      if (j != campoMinas[1].length - 1)
          if (campoMinas[i][j + 1].bandera)
              numBanderas++;
      if (j != 0)
          if (campoMinas[i][j - 1].bandera)
              numBanderas++;
      if (j !== 0 && i !== campoMinas.length - 1)
          if (campoMinas[i + 1][j - 1].bandera)
              numBanderas++;
      if (i != 0 && j != 0)
          if (campoMinas[i - 1][j - 1].bandera)
              numBanderas++;
      if (i != campoMinas.length - 1 && j != campoMinas[1].length - 1)
          if (campoMinas[i + 1][j + 1].bandera)
              numBanderas++;
      if (i != 0 && j != campoMinas[1].length - 1)
          if (campoMinas[i - 1][j + 1].bandera)
              numBanderas++;

      if (numBanderas == campoMinas[i][j].valor) {
          if (i != 0)
              if (campoMinas[i - 1][j].tapada && !campoMinas[i - 1][j].bandera)
                  picar(i - 1, j);
          if (i != campoMinas.length - 1)
              if (campoMinas[i + 1][j].tapada && !campoMinas[i + 1][j].bandera)
                  picar(i + 1, j);
          if (j != campoMinas[1].length - 1)
              if (campoMinas[i][j + 1].tapada && !campoMinas[i][j + 1].bandera)
                  picar(i, j + 1);
          if (j != 0)
              if (campoMinas[i][j - 1].tapada && !campoMinas[i][j - 1].bandera)
                  picar(i, j - 1);
          if (j !== 0 && i !== campoMinas.length - 1)
              if (campoMinas[i + 1][j - 1].tapada && !campoMinas[i + 1][j - 1].bandera)
                  picar(i + 1, j - 1);
          if (i != 0 && j != 0)
              if (campoMinas[i - 1][j - 1].tapada && !campoMinas[i - 1][j - 1].bandera)
                  picar(i - 1, j - 1);
          if (i != campoMinas.length - 1 && j != campoMinas[1].length - 1)
              if (campoMinas[i + 1][j + 1].tapada && !campoMinas[i + 1][j + 1].bandera)
                  picar(i + 1, j + 1);
          if (i != 0 && j != campoMinas[1].length - 1)
              if (campoMinas[i - 1][j + 1].tapada && !campoMinas[i - 1][j + 1].bandera)
                  picar(i - 1, j + 1);
      }
  }

  function comprobarDentroRango(i, j) {
      if (i < 0 || j >= campoMinas.length) {
          throw new Error("Numero incorrecto");
      }
  }

  function picarCasilla(i, j) {
      accionMostrando(i, j, picar);
  }

  function marcarCasilla(i, j) {
      accionMostrando(i, j, marcar);
  }

  function despejarCasilla(i, j) {
      accionMostrando(i, j, despejar);
  }

  function accionMostrando(i, j, funcion) {
      try {
          if (perdida == true) {
              throw new Error("Recarga la pagina");
          }
          if (numLibres == 0) {
              throw new Error("Enhorabuena, has ganado.");
          }
          i = i - 1;
          j = j - 1;
          funcion(i, j);
          mostrarTableroJuego();
      } catch (e) {
          if (e.message == " Has perdido")
              perdida = true;
          console.log(e.message);
      }

  }

  function mostrarTableroJuego() {
      tablero = "  ";
      for (let i = 0; i < campoMinas.length; i++) {
          if (i == 0) {
              for (let j = 0; j < campoMinas[i].length; j++) {
                  if (j < 10) {
                      tablero += " ";
                  }
                  tablero += (j + 1) + " ";
              }
              tablero += "\n";
          }
          for (let j = -1; j < campoMinas[i].length; j++) {
              if (j === -1) {
                  if (i < 9) {
                      tablero += " ";
                  }
                  tablero += (i + 1) + " ";
                  continue;
              }
              pintarResultado(i, j);
          }
          tablero += "\n";
      }
      console.log(tablero);

      function pintarResultado(i, j) {
          if (campoMinas[i][j].tapada == false) {
              tablero += campoMinas[i][j].valor + "  ";
          } else if (campoMinas[i][j].bandera == true) {
              tablero += "M " + " ";
          } else
              tablero += "ç " + " ";
      }
  }

  return {
      init: init,
      mostrar: mostrarTableroJuego,
      picar: picarCasilla,
      marcar: marcarCasilla,
      despejar: despejarCasilla
  }
})();