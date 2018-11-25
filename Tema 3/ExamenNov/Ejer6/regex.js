{
    let respuesta;
    let numTelefono;

    function validaCampos() {
        respuesta = document.getElementById("final");
        numTelefono = document.getElementById("tipoTel");
        document.getElementById("refAtras").addEventListener("click", atras);      
        let expre = /^[9|6|7][0-9]{8}$/;

        if (expre.test(numTelefono.value)) {
            respuesta.innerHTML = "El número telefónico es correcto.";
            return (true);
        }
        else {
            respuesta.innerHTML = "El número de teléfono ingresado no es válido.";
            return false;
        }
    }

    function atras(event) {
        event.preventDefault();
        history.back();
    } 
     
    function init(){
        document.getElementById("validar").addEventListener("click", validaCampos);
    }

    document.addEventListener("DOMContentLoaded", init);
}