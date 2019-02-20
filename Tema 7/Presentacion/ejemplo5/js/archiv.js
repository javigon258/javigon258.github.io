{
  let init = function(){
    $( "#go" ).click(function() {
      $( ".block:first" ).animate({
        left: 100
      }, {
        duration: 1000,
        step: function( now, fx ){
          $( ".block:gt(0)" ).css( "left", now );
        }
      });
    });    
  }
  $(init)
}