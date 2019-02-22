{
  let init = function() {
    $("input").click(function() {
      $(".animate").animate(
        {
          top: "400px",
          left: "400px"
        },
        {
          duration: "3000",
          specialEasing: {
            top: "swing",
            left: "linear"
          },
          progress: function() {
            alert("En ejecucion");
          }
        }
      );
    });
  };
  $(init);
}
