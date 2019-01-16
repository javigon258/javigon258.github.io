{
    $(function(){
        $("#mielemento").click(function(e){
            $("#mielemento").html("X: " + e.pageX + " - Y: " + e.pageY)
        });
    })
    
}