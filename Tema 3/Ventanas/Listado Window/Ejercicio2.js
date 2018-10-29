{

    function recogerValores(){
        document.getElementById("ScrollX").innerHTML = "<b>ScrollX: </b>" + this.scrollX;
        document.getElementById("ScrollY").innerHTML = "<b>ScrollY: </b>" + this.scrollY;
        document.getElementById("Scrollbar").innerHTML = "<b>Scrollbars: </b>" + this.scrollbars.visible;
    }
    function init() {
       recogerValores();
    }

    document.addEventListener("scroll", init)
}