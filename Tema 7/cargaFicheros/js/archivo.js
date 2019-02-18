{
    $(function () {
        let $inputRuta = $("#inputRuta");
        let ruta;
        let $estados = $("#estados");
        let $contenidoArchivo = $("#contenidoArchivo");
        let mensaje;
        $("#cargaArchivo").click(function () {
            mensaje = "";
            $estados.html("");$contenidoArchivo.text("");
            ruta = $inputRuta.val();
            $("#estados").html("prueba de text");
            $.ajax({
                method: "GET",
                url: ruta,
                beforeSend: function () {
                    mensaje += "Antes de enviar, ";
                },
                complete: function () {
                    mensaje += ", completado";
                    $estados.html(mensaje);
                },
                success: function (data) {
                    $contenidoArchivo.text(data);
                    mensaje += ",success";
                },
                error: function () {
                    mensaje += ",error";
                }
            });
        });



    });
}