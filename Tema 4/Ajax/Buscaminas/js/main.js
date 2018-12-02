{
    let numMinas;
    let matriz;
    let body;

    function creacionTablero(dificultad) {
        numMinas = dificultad;
        generarMatriz(dificultad, dificultad);
        insertarMinas(dificultad);
        generaNuevo();
        addFichas();
    }

    function generarMatriz(x, y) {
        matriz = [];
        for (let i = 0; i < x; i++) {
            matriz[i] = []
            for (let j = 0; j < y; j++) {
                matriz[i][j] = 0;
            }
        }

    }

    function insertarMinas(numMinas) {
        let numero1;
        let numero2;
        for (let i = 0; i < numMinas; i++) {
            do {
                numero1 = Math.round(Math.random() * (matriz.length - 1 - 0) + 0);
                numero2 = Math.round(Math.random() * (matriz[1].length - 1 - 0) + 0);
            } while (matriz[numero1][numero2] == 9)
            matriz[numero1][numero2] = 9;
        }
        actualizaTablero();
    }

    function actualizaTablero() {
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[1].length; j++) {
                if (matriz[i][j] == 9) {
                    if (i != 0)
                        if (matriz[i - 1][j] !== 9)
                            matriz[i - 1][j]++;
                    if (i != matriz.length - 1)
                        if (matriz[i + 1][j] !== 9)
                            matriz[i + 1][j]++;
                    if (j != matriz[1].length - 1)
                        if (matriz[i][j + 1] !== 9)
                            matriz[i][j + 1]++;
                    if (j != 0)
                        if (matriz[i][j - 1] !== 9)
                            matriz[i][j - 1]++;
                    if (j !== 0 && i !== matriz.length - 1)
                        if (matriz[i + 1][j - 1] !== 9)
                            matriz[i + 1][j - 1]++;
                    if (i != 0 && j != 0)
                        if (matriz[i - 1][j - 1] !== 9)
                            matriz[i - 1][j - 1]++;
                    if (i != matriz.length - 1 && j != matriz[1].length - 1)
                        if (matriz[i + 1][j + 1] !== 9)
                            matriz[i + 1][j + 1]++;
                    if (i != 0 && j != matriz[1].length - 1)
                        if (matriz[i - 1][j + 1] !== 9)
                            matriz[i - 1][j + 1]++;

                }
            }
        }
    }
    function matrizToString() {
        let values = '';
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[1].length; j++) {
                values += matriz[i][j] + "\t ";
                if (j == matriz[1].length - 1)
                values += '\n'
            }
        }
        return values;
    }

    function generaNuevo() {
        body.removeChild(body.childNodes[body.childNodes.length - 1])
    }

    function addFichas() {
        nuevo = document.getElementById("tablero");
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[1].length; j++) {
                inputs = nuevo.appendChild(document.createElement('input'))
                inputs.type = 'submit';
                inputs.value = '';
                inputs.valor = matriz[i][j];
                inputs.style.width = 12.5 + "%";
                inputs.style.height = 62.5 + 'px';
                inputs.style.backgroundImage = "url(images/ficha.jpg)";
                inputs.style.borderRadius = 10 + "px";
                inputs.addEventListener('click', () => compruebaBomba(i, j))
                matriz[i][j] = inputs;
            }
        }
    }

    function compruebaBomba(i, j) {
        if (i < 0 || j >= matriz.length) {
            return;
        }

        if (matriz[i][j].valor == 9) {
            for (let i = 0; i < matriz.length; i++) {
                for (let j = 0; j < matriz[1].length; j++) {
                    matriz[i][j].disabled='true';
                    if (matriz[i][j].valor == 9) {
                        matriz[i][j].style.backgroundImage = "url(images/mina.png)";
                        matriz[i][j].style.backgroundSize = "cover";
                        matriz[i][j].value = "";
                    }
                }
            }
        } else {
            matriz[i][j].value = matriz[i][j].valor;
            matriz[i][j].style.backgroundImage = "url(images/vuelta.png)";
            matriz[i][j].style.backgroundSize = "cover";
            matriz[i][j].removeEventListener('click', () => compruebaBomba(i, j));
        }
        if (matriz[i][j].valor == 0) {
            matriz[i][j].value == "";
            if (i != 0)
                if (matriz[i - 1][j].value == "")
                    compruebaBomba(i - 1, j);
            if (i != matriz.length - 1)
                if (matriz[i + 1][j].value == "")
                    compruebaBomba(i + 1, j);
            if (j != matriz[1].length - 1)
                if (matriz[i][j + 1].value == "")
                    compruebaBomba(i, j + 1);
            if (j != 0)
                if (matriz[i][j - 1].value == "")
                    compruebaBomba(i, j - 1);
            if (j !== 0 && i !== matriz.length - 1)
                if (matriz[i + 1][j - 1].value == "")
                    compruebaBomba(i + 1, j - 1);
            if (i != 0 && j != 0)
                if (matriz[i - 1][j - 1].value == "")
                    compruebaBomba(i - 1, j - 1);
            if (i != matriz.length - 1 && j != matriz[1].length - 1)
                if (matriz[i + 1][j + 1].value == "")
                    compruebaBomba(i + 1, j + 1);
            if (i != 0 && j != matriz[1].length - 1)
                if (matriz[i - 1][j + 1].value == "")
                    compruebaBomba(i - 1, j + 1);

        }
    }

    function init() {
        body = document.getElementsByTagName('body')[0];
        document.getElementById('facilSel').addEventListener('click', () => creacionTablero(8));
        document.getElementById('medioSel').addEventListener('click', () => creacionTablero(12));
    }

    document.addEventListener('DOMContentLoaded', init);
}