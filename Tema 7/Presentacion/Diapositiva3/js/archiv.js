{
  let init = function () {
    $( "#clickme" ).click(function() {
      $( "#book" ).animate({
        width: "110px",
        height: "50px",
        opacity: 0.5
      }, 5000, "linear", function() {
        $( this ).after( "<div>Animation complete.</div>" );
      });
    });
  }
  $(init)
}