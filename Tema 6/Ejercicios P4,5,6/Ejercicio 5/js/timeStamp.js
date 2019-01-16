{
    var last, diff;
    $( "div" ).click(function( event ) {
      if ( last ) {
        diff = event.timeStamp - last;
        $( "div" ).append( "time since last event: " + diff + "<br>" );
      } else {
        $( "div" ).append( "Click again.<br>" );
      }
      last = event.timeStamp;
    });
    
}