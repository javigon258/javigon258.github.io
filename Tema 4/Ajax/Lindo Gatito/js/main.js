{
    /**
     * @author Javier González
     */
    function lindoGatito(){
        window.open("gatos.html","_SELF")
    }

    function init(){
        document.getElementById("botonIn").addEventListener("click",lindoGatito);
    }

    document.addEventListener('DOMContentLoaded',init);
}