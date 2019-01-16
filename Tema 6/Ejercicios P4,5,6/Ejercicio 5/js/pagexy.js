{
    $( document ).on( "mousemove", function( event ) {
        $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
    });
    
}