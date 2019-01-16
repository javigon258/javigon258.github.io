{
    $(function(){
	
        $("a").each(function(i){
            let titulo = $(this).attr("title");
            alert("Atributo title del enlace " + i + ": " + titulo);
        });
        
    });
}