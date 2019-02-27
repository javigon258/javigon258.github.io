{
  let init = function(){
    consulta2();
  }
  
  let consulta2 = function() {
    $("#busqueda").blur(function() {
      let keywords = $('#busqueda').val();
        if(keywords.length == 0) {
          $("#resultadoBusqueda").text("");	
        }
        $.get({
          url: "./js/nombre.php",
          data: { keywords: keywords },
          cache: "false",
          success: function(resultado) {
            $("#resultadoBusqueda").text(resultado);
          }
        });
    });

  }

  $(init);

}