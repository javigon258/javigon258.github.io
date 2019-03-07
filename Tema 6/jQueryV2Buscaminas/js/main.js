let buscaminas = {
    tableroDeJuego: [],
    tableroSolucion: [],
    tableroPulsadas: [],
    pulsadasC: [],

    nivel: "",
    tableroCasillaAlmacenado: [],
    casillaC: new Set(),
    ganar: false,

    filas: 0, columnas: 0,
    minas: 0, banderas: 0,    

    init(){
        buscaminas.generaTableros();
        buscaminas.generaMinas();
        buscaminas.mostrar();
    },

    mostrar() {
        console.clear();

        console.log("Tablero Descubierto");
        console.table(buscaminas.tableroSolucion);
        
    },
    elegirNivel(nivel) {
        switch (nivel) {
            case "facil":
                buscaminas.banderas = 10;
                buscaminas.filas = 8;
                buscaminas.columnas = 8;
                buscaminas.minas = 10;
                break;
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
                buscaminas.minas = 90;
                break;
        }
    },
    picar(x, y){
        if(buscaminas.tableroSolucion[x][y] === "m"){
            throw new Error("Perdedor");
        
        }
        if(buscaminas.ganar)
            return true;
        
            buscaminas.descubrirCasillas(x,y);
            buscaminas.tableroPulsadas[x][y] = "pul";
            buscaminas.tableroCasillaAlmacenado.push(x +"-"+ y);
            buscaminas.pulsadasC.push(x +"-"+ y);
            buscaminas.actualizaTablero();
            buscaminas.compruebaVictoria();
    },
    generaTableros(){
        for (let i = 0; i < buscaminas.filas; i++) {
            buscaminas.tableroDeJuego[i] = [];
            buscaminas.tableroSolucion[i] = [];
            buscaminas.tableroPulsadas[i] = [];
            //buscaminas.tableroCasillaAlmacenado[i] = [];
            for (let j = 0; j < buscaminas.columnas; j++) {
                buscaminas.tableroDeJuego[i][j] = 0;
                buscaminas.tableroSolucion[i][j] = 0;   
                buscaminas.tableroPulsadas[i][j] = ""; 
                //buscaminas.tableroCasillaAlmacenado[i][j] = 0;

            }
        }
    },
    generaMinas() {
        
        for (let i = 0; i < buscaminas.minas; i++) {
            let fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0)) + 0;
            let columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0)) + 0;

            while (buscaminas.tableroSolucion[fila][columna] === "m") {
                fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0)) + 0;
                columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0)) + 0;
            }
            buscaminas.tableroSolucion[fila][columna] = "m";
            
            for (let j = Math.max(fila - 1, 0); j <= Math.min(fila + 1, buscaminas.filas - 1); j++)
                for (let k = Math.max(columna - 1, 0); k <= Math.min(columna + 1, buscaminas.columnas - 1); k++)
                    if (buscaminas.tableroSolucion[j][k] !== "m")
                        buscaminas.tableroSolucion[j][k] += 1;
        }
    },
    actualizaTablero() {
        for (let i = 0; i < buscaminas.filas; i++) 
            for (let j = 0; j < buscaminas.columnas; j++) 
                if (buscaminas.tableroPulsadas[i][j] === "pul")
                    buscaminas.tableroDeJuego[i][j] = buscaminas.tableroSolucion[i][j];    
    },
    descubrirCasillas(x, y){
        if(buscaminas.tableroPulsadas[x][y] === ""){
            buscaminas.tableroPulsadas[x][y] = "pul";
            if(buscaminas.tableroSolucion[x][y] === 0){
                for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, buscaminas.filas - 1); i++) {
                    for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, buscaminas.columnas - 1); j++) {
                        buscaminas.tableroPulsadas[x][y] = "pul";
                        buscaminas.tableroCasillaAlmacenado.push(i + "-" + j);
                        buscaminas.pulsadasC.push(x +"-"+ y);
                        buscaminas.descubrirCasillas(i, j);
                    }
                }    
            }
        }
    },
    marcar(x, y){
        try {
            if(buscaminas.tableroDeJuego[x][y] == "B"){
                buscaminas.tableroDeJuego[x][y] = "";
            }else{
                buscaminas.tableroDeJuego[x][y] = "B";
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    contarCasillas(){
        let conta = 0;
        for (let i = 0; i < buscaminas.filas; i++){
            for (let j = 0; j < buscaminas.columnas; j++){
                if (buscaminas.tableroPulsadas[i][j] === "pul")
                    conta++;
            } 
        } 
        return conta;
    },

    despejar(x, y){

        //Limpio el mapeado de las casillas contiguas ( papardeo )
        buscaminas.casillaC.clear();

        if (buscaminas.cuentaBanderas(x, y) === buscaminas.tableroSolucion[x][y]) {

            if (x > 0 && y > 0) {
                if (buscaminas.tableroDeJuego[x - 1][y - 1] !== "B" &&
                    buscaminas.tableroPulsadas[x - 1][y - 1] !== "pul")

                    buscaminas.picar(x - 1, y - 1);
            }

            if (y > 0) {
                if (buscaminas.tableroDeJuego[x][y - 1] !== "B" &&
                    buscaminas.tableroPulsadas[x][y - 1] !== "pul")
                    buscaminas.picar(x, y - 1);
            }

            if (y > 0 && x < buscaminas.filas - 1) {
                if (buscaminas.tableroDeJuego[x + 1][y - 1] !== "B" &&
                    buscaminas.tableroPulsadas[x + 1][y - 1] !== "pul")
                    buscaminas.picar(x + 1, y - 1);
            }

            if (x > 0) {
                if (buscaminas.tableroDeJuego[x - 1][y] !== "B" &&
                    buscaminas.tableroPulsadas[x - 1][y] !== "pul")
                    buscaminas.picar(x - 1, y);
            }

            if (x < buscaminas.filas - 1) {
                if (buscaminas.tableroDeJuego[x + 1][y] !== "B" &&
                    buscaminas.tableroPulsadas[x + 1][y] !== "pul")
                    buscaminas.picar(x + 1, y);
            }

            if (y < buscaminas.columnas - 1) {
                if (buscaminas.tableroDeJuego[x][y + 1] !== "B" &&
                    buscaminas.tableroPulsadas[x][y + 1] !== "pul")
                    buscaminas.picar(x, y + 1);
            }

            if (x < buscaminas.filas - 1 && y < buscaminas.columnas - 1) {
                if (buscaminas.tableroDeJuego[x + 1][y + 1] !== "B" &&
                    buscaminas.tableroPulsadas[x + 1][y + 1] !== "pul")
                    buscaminas.picar(x + 1, y + 1);
            }

            if (x > 0 && y < buscaminas.columnas - 1) {
                if (buscaminas.tableroDeJuego[x - 1][y + 1] !== "B" &&
                    buscaminas.tableroPulsadas[x - 1][y + 1] !== "pul")
                    buscaminas.picar(x - 1, y + 1);
            }
            //AÑADO AL MAP LAS CASILLAS CONTIGUAS
        } else {

            if (x > 0 && y > 0) {
                if (buscaminas.tableroDeJuego[x - 1][y - 1] !== "B" &&
                    buscaminas.tableroPulsadas[x - 1][y - 1] !== "pul")
                    buscaminas.casillaC.add((x - 1) + "-" + (y - 1));
            }

            if (y > 0) {
                if (buscaminas.tableroDeJuego[x][y - 1] !== "B" &&
                    buscaminas.tableroPulsadas[x][y - 1] !== "pul")
                    buscaminas.casillaC.add((x) + "-" + (y - 1));
            }

            if (y > 0 && x < buscaminas.filas - 1) {
                if (buscaminas.tableroDeJuego[x + 1][y - 1] !== "B" &&
                    buscaminas.tableroPulsadas[x + 1][y - 1] !== "pul")
                    buscaminas.casillaC.add((x + 1) + "-" + (y - 1));
            }

            if (x > 0) {
                if (buscaminas.tableroDeJuego[x - 1][y] !== "B" &&
                    buscaminas.tableroPulsadas[x - 1][y] !== "pul")
                    buscaminas.casillaC.add((x - 1) + "-" + (y));
            }

            if (x < buscaminas.filas - 1) {
                if (buscaminas.tableroDeJuego[x + 1][y] !== "B" &&
                    buscaminas.tableroPulsadas[x + 1][y] !== "pul")
                    buscaminas.casillaC.add((x + 1) + "-" + (y));
            }

            if (y < buscaminas.columnas - 1) {
                if (buscaminas.tableroDeJuego[x][y + 1] !== "B" &&
                    buscaminas.tableroPulsadas[x][y + 1] !== "pul")
                    buscaminas.casillaC.add((x) + "-" + (y + 1));
            }

            if (x < buscaminas.filas -1 && y < buscaminas.columnas - 1) {
                if (buscaminas.tableroDeJuego[x + 1][y + 1] !== "B" &&
                    buscaminas.tableroPulsadas[x + 1][y + 1] !== "pul")
                    buscaminas.casillaC.add((x + 1) + "-" + (y + 1));
            }

            if (x > 0 && y < buscaminas.columnas - 1) {
                if (buscaminas.tableroDeJuego[x - 1][y + 1] !== "B" &&
                    buscaminas.tableroPulsadas[x - 1][y + 1] !== "pul")
                    buscaminas.casillaC.add((x - 1) + "-" + (y + 1));
            }
        }
    },
    compruebaVictoria(){
        if(buscaminas.contarCasillas() === buscaminas.contarCasillasVictorias()){
            buscaminas.ganar = true;
            throw new Error ("Ganador");
        }
    },
    contarCasillasVictorias(){
        let cont = 0;
        for (let i = 0; i < buscaminas.filas; i++){
            for (let j = 0; j < buscaminas.columnas; j++){
                if (buscaminas.tableroSolucion[i][j] !== "m")
                cont++;
            } 
        } 
        return cont;
    },
    cuentaBanderas(x, y){
        let nBanderas = 0;
        if (buscaminas.tableroPulsadas[x][y] === "pul") {
            if (x > 0 && y > 0) {
                if (buscaminas.tableroDeJuego[x - 1][y - 1] === "B")
                    nBanderas++;
            }

            if (y > 0) {
                if (buscaminas.tableroDeJuego[x][y - 1] === "B")
                    nBanderas++;
            }

            if (y > 0 && x < buscaminas.filas - 1) {
                if (buscaminas.tableroDeJuego[x + 1][y - 1] === "B")
                    nBanderas++;
            }

            if (x > 0) {
                if (buscaminas.tableroDeJuego[x - 1][y] === "B")
                    nBanderas++;
            }

            if (x < buscaminas.filas - 1) {
                if (buscaminas.tableroDeJuego[x + 1][y] === "B")
                    nBanderas++;
            }

            if (y < buscaminas.columnas - 1) {
                if (buscaminas.tableroDeJuego[x][y + 1] === "B")
                    nBanderas++;
            }

            if (x < buscaminas.filas - 1 && y < buscaminas.columnas - 1) {
                if (buscaminas.tableroDeJuego[x + 1][y + 1] === "B")
                    nBanderas++;
            }

            if (x > 0 && y < buscaminas.columnas - 1) {
                if (buscaminas.tableroDeJuego[x - 1][y + 1] === "B")
                    nBanderas++;
            }
        }
        return nBanderas;
    }

}
