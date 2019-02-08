{
    window.addEventListener("load", init);
    let elementoMenu;
    let myTopnav;

    function init() {
        myTopnav = document.getElementById("myTopnav");
        elementoMenu = document.getElementById("abrirMenu");
        elementoMenu.addEventListener("click", funcionResponsive);
    }

    function funcionResponsive() {
        if (myTopnav.className === "topnav")
            myTopnav.className += "responsive";
        else
            myTopnav.className = "topnav";

    }
    $(function () {
    
        /*********************************************** boton hacia arriba **********************************************/
        $('.ir-arriba').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 1000);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('.ir-arriba').slideDown(600);
            } else {
                $('.ir-arriba').slideUp(600);
            }
        });
    
        /*hacia abajo*/
        $('.ir-abajo').click(function(){
            $('body, html').animate({
                scrollTop: '1000px'
            }, 1000);
        });
    
    });
}