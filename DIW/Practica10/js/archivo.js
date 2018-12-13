{
    let contexto;
    let image = new Image();
    image.src = "image/perfil.jpg";

    function init() {
        contexto = cargarContextoCanvas('myCanvas');
        if (contexto) {
            recortarImagen();
        }
    }

    function recortarImagen(){
        contexto.drawImage(image,0,0,240,200);

    }

    function cargarContextoCanvas(id) {
        let elemento = document.getElementById(id);
        if (elemento && elemento.getContext) {
            let contexto = elemento.getContext('2d');
            if (contexto)
                return contexto;
        }
        return false;
    }
    window.addEventListener("load", init);
}