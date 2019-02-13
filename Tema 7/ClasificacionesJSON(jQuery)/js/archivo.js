{
    let init = function(){
        $('input[type=button]').click(function(){
            let $id = $(this).attr("id");
            if($id == "perfilIT"){
                archivosJSON("perfilIT");
            }if($id == "devWeb"){
                archivosJSON("devWeb");
            }else{
                archivosJSON("habilidadesVida");
            }    
        });
    }    

    let archivosJSON = function (arch) {
        let mensaje = '';
        $.getJSON("JSON/"+arch+".json", function(data) {
            $.each(data, function(i, f) {
                mensaje += '<p><b>'+i+'</b>: ';
                $.each(f, function (indice, valor) {
                    mensaje += '<p><b>'+indice+'</b>, '+valor+'</p>';
                })
            });
        $(".datosJSON").html(mensaje);
   /*let mensaje = '';
        $.each(data.person, function(i, f) {
            if(f.habilidad && f.descripcion){
                mensaje += '<p><b>'+f.habilidad+'</b>'+f.descripcion+'</p>'
            }
           //let result = "<tr>" + "<td>" + f.firstName + "</td>" +
           // "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
      });

      $(".datosJSON").html(mensaje);*/
        
    
        });
    }
    $(init)
}
