{
  let init = function() {
    $("li").animate(
      {
        opacity: 0.5,
        height: "50%",
        "font-size": "1.4em"
      },
      {
        step: function(now, fx) {
          let data = " " + fx.prop + ": " + now+"start: " +fx.start +"end: " +fx.end;
          //let data = fx.elem.id + " " + fx.prop + ": " + now;
          $("body").append("<div>" + data + "</div>");
        }
      }
    );
  };
  $(init);
}
