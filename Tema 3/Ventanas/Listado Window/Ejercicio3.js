{
    let bajarLinea;
    let subirLinea;
    let subir;
    let bajar;
    let inicioDocumento;
    let finalDocumento;

    function recogerValores(){
        subirLinea = document.getElementById("subirLinea"); 
        bajarLinea = document.getElementById("bajarLinea");
        bajar = document.getElementById("bajar");
        subir = document.getElementById("subir");
        inicioDocumento = document.getElementById("inicioDocumento");
        finalDocumento = document.getElementById("finalDocumento");
        
        bajarLinea.addEventListener("click", () => { scrollByLines(1) }); 
        subirLinea.addEventListener("click", () => { scrollByLines(-1) });
        bajar.addEventListener("click", () => { window.scroll(0, window.scrollY + window.innerHeight) });
        subir.addEventListener("click", () => { window.scroll(0, window.scrollY - window.innerHeight) });
        inicioDocumento.addEventListener("click", () => { window.scrollTo(0,0) });
        finalDocumento.addEventListener("click", () => { window.scrollTo(0,document.body.clientHeight) });
    }
    function init() {
       recogerValores();
    }

    document.addEventListener("DOMContentLoaded", init)
}