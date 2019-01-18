{
    $(function(){
        $("#ocultartoda").click(function(e){
            $("#milista").fadeOut();
        });
        $("#mostrartoda").click(function(e){
            $("#milista").fadeIn();
        });
        $("#ocultarmostrar").click(function(e){
            $("#milista").fadeOut(function(){
                $(this).fadeIn();
            });
        });
        $("#selopacidad").change(function(e){
            let opacidad_deseada = e.target.options[e.target.selectedIndex].value
            $("h2").fadeTo(1000,opacidad_deseada);
        });
        $("#pororden").click(function(e){
            let opacidad_deseada = $("#selopacidad").val();
            $("#e1").fadeTo(500, opacidad_deseada, function(){
                $("#e2").fadeTo(500, opacidad_deseada, function(){
                    $("#e3").fadeTo(500, opacidad_deseada);
                });
            });
        })
    })
}