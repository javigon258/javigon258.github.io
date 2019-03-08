{
  let init = function(){
    consulta2();
  }
  
  let consulta2 = function() {
    $("#busqueda").keyup(function() {
      let keywords = $('#busqueda').val();
        if(keywords.length == 0) {
          $("#resultadoBusqueda").text("");	
        }else{
          $.get({
            url: "./js/nombre.php",
            data: { keywords: keywords },
            cache: "false",
            success: function(resultado) {
              $("#resultadoBusqueda").text(resultado);
            }
          });
        }
    });

  }

  $(init);

}