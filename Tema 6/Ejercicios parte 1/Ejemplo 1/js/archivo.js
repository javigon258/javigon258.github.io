{
    function init(){
        $( "#btA" ).click(function (){
            $('#capa').html('Has hecho clic en el botón <b>A</b>');
        });
        $( "#btB" ).click(function (){
            $('#capa').html('Recibido un clic en el botón <b>B</b>');
        });
    }
    $(init);
}