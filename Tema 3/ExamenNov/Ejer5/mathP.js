{

    let num1;
    let num2;
    let num3;
    let mues;

    function recoge() {
        num1 = document.getElementById("cantidad1");
        num2 = document.getElementById("cantidad2");
        num3 = document.getElementById("cantidad3");
        mues = document.getElementById("final");
        document.getElementById("refAtras").addEventListener("click", atras);      
    }

    function atras(event) {
        event.preventDefault();
        history.back();
    }   

    function calcular(){
        recoge();
        let resul = ((num1 * num3)*12,5)/num2;
        mues.innerHtml = Math.round(resul);
    }

    function init() {
        document.getElementById("envia").addEventListener("click", calcular);
    }

    document.addEventListener("DOMContentLoaded", init);
}