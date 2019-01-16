{
    $( "p" ).click(function( event ) {
        console.log( event.currentTarget === this ); // true
      });
    
}