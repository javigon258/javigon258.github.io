{
  let init = function(){
    $( "#right" ).click(function() {
      $( ".block" ).animate({ "left": "+=50px" }, "slow" );
    });
     
    $( "#left" ).click(function(){
      $( ".block" ).animate({ "left": "-=50px" }, "slow" );
    });
  }   
  $(init)
}