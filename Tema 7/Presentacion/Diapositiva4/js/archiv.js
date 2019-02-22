{
  let init = function(){
    $( "#go" ).click(function() {
      $( "#block" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500 );
    });
  }   
  $(init)
}