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
                let cont = 0;
                mensaje += `<select id='select_opt"'>` ;
                let value = $("#select_opt").val();
                $.each(f, function (indice, valor) {
                    mensaje += `<option value='${cont}' class='mostrar'>`+indice+`</option>`;

                    /*if(value){
                        mensaje += `<option value='${cont}' class='mostrar'>`+indice+`</option>`;
                        $(".resul").html(valor);
                    }else{
                        mensaje += `<option value='${cont}' class='ocultar'>`+indice+`</option>`;
                        $(".resul").html(valor);
                    }*/
                    cont++;
                    $(".resul").html(valor);
                })
                mensaje += '</select>';
            });
        $(".datosJSON").html(mensaje);
        });
    }
    $(init)
}
