{
    $(function(){
        $("#capa").mouseenter(function(evento){
            $("#mensaje").css("display", "block");
        });
        $("#capa").mouseleave(function(evento){
            $("#mensaje").css("display", "none");
        });
    })
}