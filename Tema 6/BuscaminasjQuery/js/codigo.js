let buscaminas = {

    tableroDescubierto: [],
    tableroDescubiertoCopia: [], 
    tableroJugable: [],
    tableroCasillaPulsada: [],

    filas: 0,
    columnas: 0,
    minas: 0,
    banderas: 0,

    banderaGanado: false,
    banderaFinalizar: false,

    nivel: "",
    casillaPulsada: new Set(),

    init() {
        buscaminas.generarTableros();
        buscaminas.generaMinas();
        buscaminas.descubrirNumeros();
        buscaminas.mostrar();
    },

    mostrar() {
        console.clear();

        console.log("Tablero Descubierto");
        console.table(buscaminas.tableroDescubierto);
        console.log("Tablero Normal");
        console.table(buscaminas.tableroJugable);
    },

    picar(x, y) {
        if (buscaminas.tableroDescubierto[x][y] === "m") {
            buscaminas.banderaFinalizar = true;
            throw new Error("Boooooooom!!!");
        }

        if (buscaminas.banderaGanado || buscaminas.banderaFinalizar)
            return true;

        buscaminas.descrubirCeros(x, y);
        buscaminas.tableroCasillaPulsada[x][y] = "pul";
        buscaminas.casillaPulsada.add(x + "-" + y);
        buscaminas.actualizaTablero();
        buscaminas.mostrar();
        buscaminas.compruebaVictoria();
    },

    marcar(x, y) {
        if (!buscaminas.banderaFinalizar && !buscaminas.banderaGanado && buscaminas.tableroCasillaPulsada[x][y] !== "pul" &&
            buscaminas.tableroJugable[x][y] !== "b") {

            if (buscaminas.banderas > 0) {
                buscaminas.tableroJugable[x][y] = "b";
                buscaminas.banderas--;
                buscaminas.mostrar();
            }
        } else if (buscaminas.tableroCasillaPulsada[x][y] !== "pul" &&
            buscaminas.tableroJugable[x][y] === "b") {
            buscaminas.tableroJugable[x][y] = "x";
            buscaminas.banderas++;
            buscaminas.mostrar();
        } else {
            buscaminas.comprobarGanadorBanderas();
            throw new Error("No se pueden colocar");
        }
    },

    despejar(x, y) {
        if (x > 0 && y > 0) {
            if (buscaminas.tableroJugable[x - 1][y - 1] !== "b" &&
                buscaminas.tableroCasillaPulsada[x - 1][y - 1] !== "pul")
                buscaminas.picar(x - 1, y - 1);
        }
        if (y > 0) {
            if (buscaminas.tableroJugable[x][y - 1] !== "b" &&
                buscaminas.tableroCasillaPulsada[x][y - 1] !== "pul")
                buscaminas.picar(x, y - 1);
        }
        if (y > 0 && x < buscaminas.filas - 1) {
            if (buscaminas.tableroJugable[x + 1][y - 1] !== "b" &&
                buscaminas.tableroCasillaPulsada[x + 1][y - 1] !== "pul")
                buscaminas.picar(x + 1, y - 1);
        }
        if (x > 0) {
            if (buscaminas.tableroJugable[x - 1][y] !== "b" &&
                buscaminas.tableroCasillaPulsada[x - 1][y] !== "pul")
                buscaminas.picar(x - 1, y);
        }
        if (x < buscaminas.filas - 1) {
            if (buscaminas.tableroJugable[x + 1][y] !== "b" &&
                buscaminas.tableroCasillaPulsada[x + 1][y] !== "pul")
                buscaminas.picar(x + 1, y);
        }
        if (y < buscaminas.columnas - 1) {
            if (buscaminas.tableroJugable[x][y + 1] !== "b" &&
                buscaminas.tableroCasillaPulsada[x][y + 1] !== "pul")
                buscaminas.picar(x, y + 1);
        }
        if (x < buscaminas.filas - 1 && y < buscaminas.columnas - 1) {
            if (buscaminas.tableroJugable[x + 1][y + 1] !== "b" &&
                buscaminas.tableroCasillaPulsada[x + 1][y + 1] !== "pul")
                buscaminas.picar(x + 1, y + 1);
        }
        if (x > 0 && y < buscaminas.columnas - 1) {
            if (buscaminas.tableroJugable[x - 1][y + 1] !== "b" &&
                buscaminas.tableroCasillaPulsada[x - 1][y + 1] !== "pul")
                buscaminas.picar(x - 1, y + 1);
        }
    },

    casillasPulsadas() {
        let contador = 0;
        for (let i = 0; i < buscaminas.filas; i++) {
            for (let j = 0; j < buscaminas.columnas; j++) {
                if (buscaminas.tableroCasillaPulsada[i][j] === "pul")
                    contador++;
            }
        }
        return contador;
    },
    casillasPulsadasVictoria() {
        let contador = 0;
        for (let i = 0; i < buscaminas.filas; i++) {
            for (let j = 0; j < buscaminas.columnas; j++) {
                if (buscaminas.tableroDescubierto[i][j] !== "m")
                    contador++;
            }
        }
        return contador;
    },

    compruebaVictoria() {
        if (buscaminas.casillasPulsadas() === buscaminas.casillasPulsadasVictoria()) {
            buscaminas.banderaGanado = true;
            throw new Error("Ganador");
        }

    },

    elegirNivel(nivel) {
        switch (nivel) {
            case "medio":
                buscaminas.banderas = 40;
                buscaminas.filas = 16;
                buscaminas.columnas = 16;
                buscaminas.minas = 40;
                break;
            case "dificil":
                buscaminas.banderas = 90;
                buscaminas.filas = 16;
                buscaminas.columnas = 30;
                buscaminas.minas = 99;
                break;
            default:
                buscaminas.banderas = 10;
                buscaminas.filas = 8;
                buscaminas.columnas = 8;
                buscaminas.minas = 10;
                break;
        }
    },

    generarTableros() {
        for (let i = 0; i < buscaminas.filas; i++) {
            buscaminas.tableroDescubierto[i] = [];
            buscaminas.tableroJugable[i] = [];
            buscaminas.tableroDescubiertoCopia[i] = [];
            buscaminas.tableroCasillaPulsada[i] = [];
            for (let j = 0; j < buscaminas.columnas; j++) {
                buscaminas.tableroDescubierto[i][j] = 0;
                buscaminas.tableroJugable[i][j] = "x";
                buscaminas.tableroDescubiertoCopia[i][j] = 0;
                buscaminas.tableroCasillaPulsada[i][j] = 0;
            }
        }
    },

    generaMinas() {
        for (let i = 0; i < buscaminas.minas; i++) {
            let fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0)) + 0;
            let columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0)) + 0;

            while (buscaminas.tableroDescubierto[fila][columna] === "m") {
                fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0)) + 0;
                columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0)) + 0;
            }
            buscaminas.tableroDescubierto[fila][columna] = "m";
            buscaminas.tableroDescubiertoCopia[fila][columna] = "m";
        }
    },

    descubrirNumeros() {
        for (let i = 0; i < buscaminas.filas; i++) {
            for (let j = 0; j < buscaminas.columnas; j++) {
                if (buscaminas.tableroDescubierto[i][j] === "m") {
                    if (i == 0 && j == 0)
                        buscaminas.cuentaMinas(i, j, i + 1, j + 1);
                    else if (i == 0 && (j > 0 && j < buscaminas.minas - 1))
                        buscaminas.cuentaMinas(i, j - 1, i + 1, j + 1);
                    else if (i == 0 && j == buscaminas.minas - 1)
                        buscaminas.cuentaMinas(i, j - 1, i + 1, j);
                    else if (j == buscaminas.minas - 1 && (i > 0 && i < buscaminas.minas - 1))
                        buscaminas.cuentaMinas(i - 1, j - 1, i + 1, j);
                    else if (i == buscaminas.minas - 1 && j == buscaminas.minas - 1)
                        buscaminas.cuentaMinas(i - 1, j - 1, i, j);
                    else if (i == buscaminas.minas - 1 && (j > 0 && j < buscaminas.minas - 1))
                        buscaminas.cuentaMinas(i - 1, j - 1, i, j + 1);
                    else if (i == buscaminas.minas - 1 && j == 0)
                        buscaminas.cuentaMinas(i - 1, j, i, j + 1);
                    else if (j == 0 && (i > 0 && i < buscaminas.minas - 1))
                        buscaminas.cuentaMinas(i - 1, j, i + 1, j + 1);
                    else
                        buscaminas.cuentaMinas(i - 1, j - 1, i + 1, j + 1);

                }
            }
        }
    },

    descrubirCeros(x, y) {
        if (buscaminas.tableroDescubiertoCopia[x][y] === 0) {
            buscaminas.tableroDescubiertoCopia[x][y] = -1;
            if (buscaminas.tableroDescubierto[x][y] === 0) {
                for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.filas - 1); j++)
                    for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.columnas - 1); k++) {
                        buscaminas.tableroCasillaPulsada[j][k] = "pul";
                        buscaminas.casillaPulsada.add(j + "-" + k);
                        buscaminas.descrubirCeros(j, k);
                    }
            }
        }
    },

    cuentaMinas(inicioX, inicioY, finalX, finalY) {
        for (let i = inicioX; i <= finalX; i++) {
            for (let j = inicioY; j <= finalY; j++) {
                if (buscaminas.tableroDescubierto[i][j] !== "m") {
                    if (buscaminas.tableroDescubierto[i][j] === 0) {
                        buscaminas.tableroDescubierto[i][j] = 0 + 1;
                        buscaminas.tableroDescubiertoCopia[i][j] = 0 + 1;
                    } else {
                        buscaminas.tableroDescubierto[i][j] = parseInt(buscaminas.tableroDescubierto[i][j]) + 1;
                        buscaminas.tableroDescubiertoCopia[i][j] = parseInt(buscaminas.tableroDescubierto[i][j]);
                    }
                }
            }
        }
    },
    banderasCercanas(x, y) {
        let nBanderas = 0;
        if (buscaminas.tableroCasillaPulsada[x][y] === "pul") {
            if (x > 0 && y > 0) {
                if (buscaminas.tableroJugable[x - 1][y - 1] === "b")
                    nBanderas++;
            }
            if (y > 0) {
                if (buscaminas.tableroJugable[x][y - 1] === "b")
                    nBanderas++;
            }
            if (y > 0 && x < buscaminas.filas - 1) {
                if (buscaminas.tableroJugable[x + 1][y - 1] === "b")
                    nBanderas++;
            }
            if (x > 0) {
                if (buscaminas.tableroJugable[x - 1][y] === "b")
                    nBanderas++;
            }
            if (x < buscaminas.filas - 1) {
                if (buscaminas.tableroJugable[x + 1][y] === "b")
                    nBanderas++;
            }
            if (y < buscaminas.columnas - 1) {
                if (buscaminas.tableroJugable[x][y + 1] === "b")
                    nBanderas++;
            }
            if (x < buscaminas.filas - 1 && y < buscaminas.columnas - 1) {
                if (buscaminas.tableroJugable[x + 1][y + 1] === "b")
                    nBanderas++;
            }
            if (x > 0 && y < buscaminas.columnas - 1) {
                if (buscaminas.tableroJugable[x - 1][y + 1] === "b")
                    nBanderas++;
            }
        }
        return nBanderas;
    },

    actualizaTablero() {
        for (let i = 0; i < buscaminas.filas; i++) {
            for (let j = 0; j < buscaminas.columnas; j++) {
                if (buscaminas.tableroCasillaPulsada[i][j] === "pul")
                    buscaminas.tableroJugable[i][j] = buscaminas.tableroDescubierto[i][j];

            }
        }
    }
};