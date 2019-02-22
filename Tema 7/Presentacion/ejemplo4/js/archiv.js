{
  let init = function () {
    $( "#prim" ).animate({
      left: "250px",
      opacity: .5,
      queue: false
    });
    $( "#otro" ).animate({
      left: "250px",
      opacity: .5,
      queue: true
    });
  }
  $(init)
}