{
    $(function(){
	
        $('input.fecha').attr("value", function(indiceArray){
            //indiceArray tiene el índice de este elemento en el objeto jQuery
            let f = new Date();
            return f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
        });
        
    });
}