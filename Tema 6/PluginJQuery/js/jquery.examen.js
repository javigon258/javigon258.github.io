(function () {

    let patrones = {
        nombre: [/^([a-zA-Z]{3,}\s?)$/, "El valor minimo debe tener 3 caracteres."],
        email: [/^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/, "Un ejemplo de correo: ejemplo@gmail.com"],
        mensaje: [/^^.{20,}$/, "El contenido del mensaje debe tener 20 caracteres como minimo."],

    }  
    let tester = {
        valida(texto, expresion) {
            return patrones[expresion][0].test(texto);
        }            
    }

    $.fn.examen = function (resalto2) {

        let resalto = {
            color: "#ff0000",
            "background-color": "#ff0000",
            border: "2px solid #ff0000"
          };
      
      $.extend(resalto, resalto2);

        let $valores = $("input[type=text]", $(this));
        let errInput = [];
        let inputPatron;
        let valorForm;

        $valores.blur(function (e){
            e.preventDefault();
            inputPatron = $(this).attr("tipo");
            valorForm = $(this).val();
            if(tester.valida(valorForm, inputPatron)){
                $(this).css({
                    "background-color": "#b3f29f",
                    color: "#32771d",
                    border: "3px solid #32771d"
                });
            }else{
                $(this).css(resalto);
                errInput.push($(this));
            }
        });

        $valores.focus(function () { 
            $(this).css({
                color: "black",
                border: "2px solid #ffDEDE"
            });
        });

        $(this).submit(function(e){
            e.preventDefault();
            errInput = [];
            $valores.blur();
            if(errInput.length !== 0)
                errInput[0].focus();
            else{
                $.ajax({
                    url: "./js/datos.txt",
                    dataType: "text",
                    success: function (response) {
                        $("textarea").val(response);
                    }
                });
            }

        });

        return $(this);
    }
}(jQuery));
