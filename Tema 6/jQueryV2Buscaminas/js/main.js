let buscaminas = (function() {
  let tableroDeJuego = [],
    tableroSolucion = [],
    tableroPulsadas = [],
    pulsadasC = [],
    nivel = "",
    tableroCasillaAlmacenado = [],
    casillaC = new Set(),
    ganar = false,
    filas = 0,
    columnas = 0,
    minas = 0,
    banderas = 0;

  function init() {
    generaTableros();
    generaMinas();
    mostrar();
  }

  function mostrar() {
    //console.clear();

    console.log("Tablero Descubierto");
    console.table(tableroSolucion);
  }

  function elegirNivel(nivel) {
    switch (nivel) {
      case "facil":
        banderas = 10;
        filas = 8;
        columnas = 8;
        minas = 10;
        break;
      case "medio":
        banderas = 40;
        filas = 16;
        columnas = 16;
        minas = 40;
        break;
      case "dificil":
        banderas = 90;
        filas = 16;
        columnas = 30;
        minas = 90;
        break;
    }
  }
  function picar(x, y) {
    if (tableroSolucion[x][y] === "m") {
      throw new Error("Perdedor");
    }
    if (ganar) return true;

    descubrirCasillas(x, y);
    tableroPulsadas[x][y] = "pul";
    tableroCasillaAlmacenado.push(x + "-" + y);
    pulsadasC.push(x + "-" + y);
    actualizaTablero();
    compruebaVictoria();
  }
  function generaTableros() {
    console.log(tableroDeJuego);
    for (let i = 0; i < filas; i++) {
      tableroDeJuego[i] = [];
      tableroSolucion[i] = [];
      tableroPulsadas[i] = [];
      for (let j = 0; j < columnas; j++) {
        tableroDeJuego[i][j] = 0;
        tableroSolucion[i][j] = 0;
        tableroPulsadas[i][j] = "";
      }
    }
  }
  function generaMinas() {
    for (let i = 0; i < minas; i++) {
      let fila = Math.floor(Math.random() * (filas - 1 - 0)) + 0;
      let columna = Math.floor(Math.random() * (columnas - 1 - 0)) + 0;

      while (tableroSolucion[fila][columna] === "m") {
        fila = Math.floor(Math.random() * (filas - 1 - 0)) + 0;
        columna = Math.floor(Math.random() * (columnas - 1 - 0)) + 0;
      }
      tableroSolucion[fila][columna] = "m";

      for (
        let j = Math.max(fila - 1, 0);
        j <= Math.min(fila + 1, filas - 1);
        j++
      )
        for (
          let k = Math.max(columna - 1, 0);
          k <= Math.min(columna + 1, columnas - 1);
          k++
        )
          if (tableroSolucion[j][k] !== "m") tableroSolucion[j][k] += 1;
    }
  }
  function actualizaTablero() {
    for (let i = 0; i < filas; i++)
      for (let j = 0; j < columnas; j++)
        if (tableroPulsadas[i][j] === "pul")
          tableroDeJuego[i][j] = tableroSolucion[i][j];
  }
  function descubrirCasillas(x, y) {
    if (tableroPulsadas[x][y] === "") {
      tableroPulsadas[x][y] = "pul";
      if (tableroSolucion[x][y] === 0) {
        for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, filas - 1); i++) {
          for (
            let j = Math.max(y - 1, 0);
            j <= Math.min(y + 1, columnas - 1);
            j++
          ) {
            tableroPulsadas[x][y] = "pul";
            tableroCasillaAlmacenado.push(i + "-" + j);
            pulsadasC.push(x + "-" + y);
            descubrirCasillas(i, j);
          }
        }
      }
    }
  }
  function marcar(x, y) {
    try {
      if (tableroDeJuego[x][y] == "B") {
        tableroDeJuego[x][y] = "";
      } else {
        tableroDeJuego[x][y] = "B";
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  function contarCasillas() {
    let conta = 0;
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        if (tableroPulsadas[i][j] === "pul") conta++;
      }
    }
    return conta;
  }

  function despejar(x, y) {
    //Limpio el mapeado de las casillas contiguas ( papardeo )
    casillaC.clear();

    if (cuentaBanderas(x, y) === tableroSolucion[x][y]) {
      if (x > 0 && y > 0) {
        if (
          tableroDeJuego[x - 1][y - 1] !== "B" &&
          tableroPulsadas[x - 1][y - 1] !== "pul"
        )
          picar(x - 1, y - 1);
      }

      if (y > 0) {
        if (
          tableroDeJuego[x][y - 1] !== "B" &&
          tableroPulsadas[x][y - 1] !== "pul"
        )
          picar(x, y - 1);
      }

      if (y > 0 && x < filas - 1) {
        if (
          tableroDeJuego[x + 1][y - 1] !== "B" &&
          tableroPulsadas[x + 1][y - 1] !== "pul"
        )
          picar(x + 1, y - 1);
      }

      if (x > 0) {
        if (
          tableroDeJuego[x - 1][y] !== "B" &&
          tableroPulsadas[x - 1][y] !== "pul"
        )
          picar(x - 1, y);
      }

      if (x < filas - 1) {
        if (
          tableroDeJuego[x + 1][y] !== "B" &&
          tableroPulsadas[x + 1][y] !== "pul"
        )
          picar(x + 1, y);
      }

      if (y < columnas - 1) {
        if (
          tableroDeJuego[x][y + 1] !== "B" &&
          tableroPulsadas[x][y + 1] !== "pul"
        )
          picar(x, y + 1);
      }

      if (x < filas - 1 && y < columnas - 1) {
        if (
          tableroDeJuego[x + 1][y + 1] !== "B" &&
          tableroPulsadas[x + 1][y + 1] !== "pul"
        )
          picar(x + 1, y + 1);
      }

      if (x > 0 && y < columnas - 1) {
        if (
          tableroDeJuego[x - 1][y + 1] !== "B" &&
          tableroPulsadas[x - 1][y + 1] !== "pul"
        )
          picar(x - 1, y + 1);
      }
      //AÑADO AL MAP LAS CASILLAS CONTIGUAS
    } else {
      if (x > 0 && y > 0) {
        if (
          tableroDeJuego[x - 1][y - 1] !== "B" &&
          tableroPulsadas[x - 1][y - 1] !== "pul"
        )
          casillaC.add(x - 1 + "-" + (y - 1));
      }

      if (y > 0) {
        if (
          tableroDeJuego[x][y - 1] !== "B" &&
          tableroPulsadas[x][y - 1] !== "pul"
        )
          casillaC.add(x + "-" + (y - 1));
      }

      if (y > 0 && x < filas - 1) {
        if (
          tableroDeJuego[x + 1][y - 1] !== "B" &&
          tableroPulsadas[x + 1][y - 1] !== "pul"
        )
          casillaC.add(x + 1 + "-" + (y - 1));
      }

      if (x > 0) {
        if (
          tableroDeJuego[x - 1][y] !== "B" &&
          tableroPulsadas[x - 1][y] !== "pul"
        )
          casillaC.add(x - 1 + "-" + y);
      }

      if (x < filas - 1) {
        if (
          tableroDeJuego[x + 1][y] !== "B" &&
          tableroPulsadas[x + 1][y] !== "pul"
        )
          casillaC.add(x + 1 + "-" + y);
      }

      if (y < columnas - 1) {
        if (
          tableroDeJuego[x][y + 1] !== "B" &&
          tableroPulsadas[x][y + 1] !== "pul"
        )
          casillaC.add(x + "-" + (y + 1));
      }

      if (x < filas - 1 && y < columnas - 1) {
        if (
          tableroDeJuego[x + 1][y + 1] !== "B" &&
          tableroPulsadas[x + 1][y + 1] !== "pul"
        )
          casillaC.add(x + 1 + "-" + (y + 1));
      }

      if (x > 0 && y < columnas - 1) {
        if (
          tableroDeJuego[x - 1][y + 1] !== "B" &&
          tableroPulsadas[x - 1][y + 1] !== "pul"
        )
          casillaC.add(x - 1 + "-" + (y + 1));
      }
    }
  }
  function compruebaVictoria() {
    if (contarCasillas() === contarCasillasVictorias()) {
      ganar = true;
      throw new Error("Ganador");
    }
  }
  function contarCasillasVictorias() {
    let cont = 0;
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        if (tableroSolucion[i][j] !== "m") cont++;
      }
    }
    return cont;
  }
  function cuentaBanderas(x, y) {
    let nBanderas = 0;
    if (tableroPulsadas[x][y] === "pul") {
      if (x > 0 && y > 0) {
        if (tableroDeJuego[x - 1][y - 1] === "B") nBanderas++;
      }

      if (y > 0) {
        if (tableroDeJuego[x][y - 1] === "B") nBanderas++;
      }

      if (y > 0 && x < filas - 1) {
        if (tableroDeJuego[x + 1][y - 1] === "B") nBanderas++;
      }

      if (x > 0) {
        if (tableroDeJuego[x - 1][y] === "B") nBanderas++;
      }

      if (x < filas - 1) {
        if (tableroDeJuego[x + 1][y] === "B") nBanderas++;
      }

      if (y < columnas - 1) {
        if (tableroDeJuego[x][y + 1] === "B") nBanderas++;
      }

      if (x < filas - 1 && y < columnas - 1) {
        if (tableroDeJuego[x + 1][y + 1] === "B") nBanderas++;
      }

      if (x > 0 && y < columnas - 1) {
        if (tableroDeJuego[x - 1][y + 1] === "B") nBanderas++;
      }
    }
    return nBanderas;
  }

  function getFilas(){
      return filas;
  }
  function getColumnas(){
    return columnas;
  }

  return {
    init: init,
    elegirNivel: elegirNivel,
    picar: picar,
    generaTableros: generaTableros,
    actualizaTablero: actualizaTablero,
    marcar: marcar,
    despejar: despejar,
    filas: getFilas,
    columnas: getColumnas,
    minas: minas,
    nivel: nivel,
    tableroDeJuego: tableroDeJuego,
    tableroSolucion: tableroSolucion,
    tableroPulsadas: tableroPulsadas,
    pulsadasC: pulsadasC,
    tableroCasillaAlmacenado: tableroCasillaAlmacenado,
    casillaC: casillaC,
    ganar: ganar
  };
})();
