{
    let buscaminasComprobar = {
        casillasPulsadas() {
            let cont = 0;
            for (let i = 0; i < buscaminasComprobar.filas; i++) {
                for (let j = 0; j < buscaminasComprobar.columnas; j++) {
                    if (buscaminasComprobar.tableroCasillaAlmacenado[i][j] === "pul")
                        cont++;
                }
            }
            return cont;
        },
        huecosPulsadosParaGanar() {
            let cont = 0;
            for (let i = 0; i < buscaminasComprobar.filas; i++) {
                for (let j = 0; j < buscaminasComprobar.columnas; j++) {
                    if (buscaminasComprobar.tableroDescubierto[i][j] !== "m")
                        cont++;
                }
            }
            return cont;
        },
    
        compruebaVictoria() {
            if (buscaminasComprobar.casillasPulsadas() === buscaminasComprobar.huecosPulsadosParaGanar()) {
                buscaminasComprobar.banderaGanado = true;
                throw new Error("has hanado");
            }
        },

    }
}