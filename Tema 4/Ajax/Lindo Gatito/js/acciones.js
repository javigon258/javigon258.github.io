{
    /**
     * @author Javier González
     */
    
    let accionImg, nombre, fechaNac, raza, peso, estado, gato;

    function init() {
        accionImg = document.getElementById('accion');
        nombre = document.getElementById('nombre');
        fechaNac = document.getElementById('fechaNac');
        raza = document.getElementById('raza');
        peso = document.getElementById('peso');
        estado = document.getElementById('spanError');
        edad = document.getElementById('edad');

        document.getElementById("jugar").addEventListener('click', jugar);
        document.getElementById("comer").addEventListener('click', comer);
        document.getElementById("dormir").addEventListener('click', dormir);

        nuevoGato();
        actualizaDatos();
    }

    function nuevoGato() {

        anno = Math.round(Math.random() * (2017 - 2001) + 2001);
        mes = Math.round(Math.random() * (12 - 1) + 1);
        dia = Math.round(Math.random() * (28 - 1) + 1);
        
        date = new Date(anno, mes, dia).toLocaleDateString();
        pesoG = Math.round(Math.random() * (15 - 1) + 1);

        let razasPosibles = ['Azul ruso', 'Gato persa', 'Ragdoll', 'Abisini', 'Munchikin', 'Bengala', 'Bombay'];
        razas = razasPosibles[generaAleat(0, razasPosibles.length - 1)];

        let nombresPosibles = ['Felix', 'Garfield', 'Tom', 'Snow', 'Noche', 'Silvestre', 'Dark', 'Tiger'];
        nombres = nombresPosibles[generaAleat(0, nombresPosibles.length - 1)];

        gato = new Gato(nombres,date, razas, pesoG);
        accionImg.innerHTML = `<img src="./image/espera.jpg">`;
    }

    function actualizaDatos() {
        nombre.innerHTML = "<b>Nombre:</b>  " + gato.getNombre();
        fechaNac.innerHTML = '<b>Fecha de Nacimiento:</b> ' + gato.getFecha() +' <b>Edad:</b> ' + gato.edad + ' años';
        raza.innerHTML = '<b>Raza:</b> ' + gato.getRaza();
        peso.innerHTML = '<b>Peso:</b> ' + gato.getPeso() + ' kg';        
    }

    function jugar() {
        gato.jugar();
        actualizaDatos();
        accionImg.innerHTML = `<img src="./image/jugando.jpg">`;
        compruebaEstado();
    }

    function comer() {
        gato.comer();
        actualizaDatos();
        accionImg.innerHTML = `<img src="./image/comer.jpg">`;
        compruebaEstado();
    }

    function dormir() {
        gato.dormir();
        accionImg.innerHTML = `<img src="./image/dormir.jpg">`;
    }

    function compruebaEstado() {
        if (gato.enfermo()) {
            accionImg.innerHTML = `<img src="./image/enfermo.jpg">`;
            nombre.innerHTML = "<b>Nombre: </b> "+ gato.getNombre();
            fechaNac.innerHTML = '<b>Fecha de Nacimiento: </b>' + gato.getFecha() +' <b>Edad:</b> ' + gato.edad + ' años';
            raza.innerHTML = '<b>Raza: </b> '+ gato.getRaza();
            peso.innerHTML = '<b>Peso: </b>'+ gato.getPeso()+' kg';
            estado.innerHTML = "<p style='text-align:center;'><b>" + gato.getNombre() + " esta enfermo</b></p>";

            document.getElementById("jugar").disabled = true;
            document.getElementById("comer").disabled = true;
            document.getElementById("dormir").disabled = true;

        }
    }
    function generaAleat(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    document.addEventListener('DOMContentLoaded', init)
}