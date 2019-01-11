{
    window.addEventListener("load", init);
    let elementoMenu;
    let myTopnav;

    function init() {
        myTopnav = document.getElementById("myTopnav");
        elementoMenu = document.getElementById("abrirMenu");
        elementoMenu.addEventListener("click", funcionResponsive);
    }

    function funcionResponsive() {
        if (myTopnav.className === "topnav")
            myTopnav.className += "responsive";
        else
            myTopnav.className = "topnav";

    }
}