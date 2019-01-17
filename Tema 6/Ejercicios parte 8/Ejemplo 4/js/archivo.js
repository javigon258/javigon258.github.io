{
    function colaEfectos(){
        capa = $("#micapa");
        capa.animate({
            "font-size": "1.5em"
        }, 2000);
        capa.hide(1000);
        capa.show(1000);
        capa.animate({
            "left": "350px",
            "top": "100px"
        },1500);
        capa.animate({
            "font-size": "0.75em"
        }, 2000);
        capa.hide(1000);
        capa.show(1000);
        capa.animate({
            "left": "100px",
            "top": "150px"
        }, 1500, colaEfectos);
    }
    $(function(){
        colaEfectos();
    });
}