{
    function init(){
        ejercicio2();
        ejercicio3();
        ejercicio5();
    }

    //De tres 'input type="checkbox"' que te deshabilite 2 al seleccionar una de ellas
    function ejercicio2(){
        $("input").change(function () {
            let $input = $(this);
            $("#ejercicio1").html(`
                .selected: <b> ${$input.selected} </b><br>
                .prop("checked"): <b>${$input.prop("checked")} </b><br>
                .attr("checked"): <b> ${$input.attr("checked")} </b><br>
                .checked(): <b> ${$input.checked} </b><br>
                .val(): <b> ${$input.val()} </b>
                `);
        }).change(); //Rescribo dependendiendo del check

        $("input[type=checkbox]").change(function () {
            if ($(this).prop("checked"))
                $("input:not(:checked").prop("disabled", true);
            else
                $("input:not(:checked").prop("disabled", false);
            });
    }    

    //Asociar dintintos eventos mediante .on().
    function ejercicio3(){
        $("#ejercicio3").on({
            mouseenter: function () {
                $("#ejercicio3").html("Estas dentro").css("background-color", "yellow");
            },
            mouseleave: function () {
                $("#ejercicio3").html("Has dejado el cuadro").css("background-color", "orange");
            },
            click: function () {
                $("#ejercicio3").html("Click").css("background-color", "red");
            },
            dblclick: function () {
                $("#ejercicio3").html("Has hecho doble click").css("background-color", "blue");
            },
            contextmenu: function(ev){
                ev.preventDefault();
                $("#ejercicio3").html("Boton derecho").css("background-color", "black");
            }
        })
    }
    //Los atributos pageX, pageY, currentTarget, timeStamp... ¿A qué objeto pertenecen? Demuestra su uso
    function ejercicio5(){
        $("#ejercicio5").mouseenter(function (evento) {
            $("#ejercicio5").html(`
                Son implementados mediante la interfaz event <br>
                Coordenada X: ${evento.pageX} <br>
                Coordenada Y: ${evento.pageY} <br>
                CurrentTarget: ${evento.currentTarget} <br>
                TimeStamp: ${evento.timeStamp}
                `);
        });
    }
    $(init);
}