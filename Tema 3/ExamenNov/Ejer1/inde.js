{
    let data;
    let result;

    function guardarDatos(){
        valor = data.value;
        localStorage.setItem("misdatos", valor);
        document.getElementById("informacion").value = null;
    }

    function atras(event) {
        event.preventDefault();
        history.back();
    }
       
    function mostrarDatos(){
        comp();
        data.value = localStorage.getItem("misdatos");
    }

    function borrarDatos(){
        data.value = "";
        localStorage.removeItem("misdatos");
        result.innerHTML = "";
    }

    function init(){
        data = document.getElementById("informacion");
        result = document.getElementById("control");
        document.getElementById("guarda").addEventListener("click", guardarDatos);
        document.getElementById("mostrar").addEventListener("click", mostrarDatos);
        document.getElementById("reset").addEventListener("click", borrarDatos);
        document.getElementById("refAtras").addEventListener("click", atras);
        comp();
    }

    function comp(){
        if(localStorage.getItem("misdatos") == null)
            result.innerHTML ="No hay ninguno guardado";
        else
            result.innerHTML ="Se muestra el ultimo: " + localStorage.getItem("misdatos");

    }

    window.addEventListener("load", init);
}