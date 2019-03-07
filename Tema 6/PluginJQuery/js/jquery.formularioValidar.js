(function () {

    $.fn.formularioValidar = function () {
        let examen = {
            nombre: [/^([a-zA-Z]{3,}\s?)$/, "El valor minimo debe tener 3 caracteres."],
            email: [/^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/, "Un ejemplo de correo: ejemplo@gmail.com"],
            mensaje: [/^^.{20,}$/, "El contenido del mensaje debe tener 20 caracteres como minimo."],
            valida(texto, expresion) {
                return examen[expresion][0].test(texto);
            }
        }  
        let $valores = $("input[type=text]", $(this));
        let errInput = [];

        $valores.blur(function (e){
            e.preventDefault();
            let inputPatron = $(this).attr("tipo");
            let valorForm = $(this).val();
            if(examen.valida(valorForm, inputPatron)){
                $(this).css({
                    "background-color": "#b3f29f",
                    color: "#32771d",
                    border: "3px solid #32771d"
                });
            }else{
                $(this).css({
                    "background-color": "#ef9292",
                    color: "#b20c0c",
                    border: "3px solid #b20c0c"
                });
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
            let $inputs = $valores;
            $inputs.blur();
            if(errInput.length>0)
                errInput[0].focus();
            $.ajax({
                url: "./js/datos.txt",
                dataType: "text",
                success: function (response) {
                    $("textarea").val(response);
                }
            });
        });

        return $(this);
    }
}(jQuery));
