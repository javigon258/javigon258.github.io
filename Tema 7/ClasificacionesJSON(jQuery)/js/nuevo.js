{
    let selectOp = ""; 

    let init = function(){
        $('input[type=button]').click(function(){
            let id = $(this).attr("id");
            if(id == "perfilIT"){
                perfilITJ("perfilIT");
            }if(id == "habilidadesVida"){
                habilidadesVidaTJ("habilidadesVida");
            }if(id == "devWeb"){
                tipoDesarrolladorJ("devWeb");
            }    
        });
    }

    let perfilITJ = function (arch) {
        selectOp = "<select><option selected disabled>Elige una opción</option>"; 
        $.getJSON("JSON/"+arch+".json",
        function (data) {
            data.perfiles.forEach(element => {
                selectOp += "<option data='"+element.descripcion + "'>" + element.perfil + "</option>";
            });
            selectOp += "</select>";
            $("#datosJSON").html(selectOp);
            $("select").on("change", function () {
                $("#resul").html($(this).find('option:selected').attr("data"));
            });
        }
    );
    }
    let habilidadesVidaTJ = function (arch) {
        selectOp = "<select><option selected disabled>Elige una opción</option>"; 
        $.getJSON("JSON/"+arch+".json",
        function (data) {
            data.habilidades.forEach(element => {
                selectOp += "<option data='"+element.descripccion + "'>" + element.habilidad + "</option>";
            });
            selectOp += "</select>";
            $("#datosJSON").html(selectOp);
            $("select").on("change", function () {
                $("#resul").html($(this).find('option:selected').attr("data"));
            });
        }
    );
    }
    let tipoDesarrolladorJ = function (arch) {
        selectOp = "<select><option selected disabled>Elige una opción</option>"; 
        $.getJSON("JSON/"+arch+".json",
        function (data) {
            $.each(data, function (valorOp) { 
                selectOp+="<option data='" + valorOp + "'>" + valorOp +"</option>";
            });
            selectOp += "</select>";
            $("#datosJSON").html(selectOp);
            let mensaje = "";
            $("select").on("change", function () {
                let habilidad = $(this).find('option:selected').attr('data');
                let desarrolloWeb = data[habilidad];
                desarrolloWeb.forEach(element => {
                    mensaje += "<input type='checkbox' value='" + element + "'>" + element + "<br>";
                });
                $("#resul").html(mensaje);
                mensaje = "";
            });
        }
    );
    }
    $(init);
}