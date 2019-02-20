{
  let init = function(){
    $( "#clickme" ).click(function() {
      $( "#book" ).animate({
        width: "toggle",
        height: "toggle"
      }, {
        duration: 5000,
        specialEasing: {
          width: "linear",
          height: "easeIn"
        },
        complete: function() {
          $( this ).after( "<div>Animation complete.</div>" );
        }
      });
    });  
  }
  $(init)
}