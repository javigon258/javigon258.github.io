{
    let canvas;
    let arrColores = ["#7B241C", "#943126", "#27AE60", "#76448A" , "#F1948A" ,"#D7BDE2", "#BFC9CA", "#A04000", "#A9CCE3", "#1E8449",  "#D4AC0D", "#9C640C"];

    function cuadroCanva(canvas, aleatorio, x, y, button, buttons){
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            if (arguments.length === 1){
                ctx.fillStyle = "#3D5AFE";
            }else{
                ctx.fillStyle = arrColores[aleatorio];
            }

            ctx.fillRect(0, 0, 300, 300);
            ctx.font = "bold 1.3rem Lato";
            ctx.fillStyle = "#fff";
            ctx.fillText(canvas.getAttribute("id"), 50, 80);

            if (arguments.length > 1){
                ctx.font = "bold 1.1rem Lato";
                ctx.fillText("x = " + x, 210, 30);
                ctx.fillText("y = " + y, 210, 60);
                ctx.fillText("button = " + button, 190, 90);
                ctx.fillText("buttons = " + buttons, 190, 120);
            }
        }
    }
    function recorrerCanva(){
        canvas = Array.from(document.getElementsByTagName("canvas"));
        canvas.forEach(element => { 
            element.addEventListener(element.getAttribute("id"), ev =>{
                let aleatorio = Math.floor(Math.random() * (arrColores.length - 0)) + 0;
                cuadroCanva(element, aleatorio, ev.offsetX, ev.offsetY, ev.button, ev.buttons);
            });
            cuadroCanva(element);
        });
    }

    function init(){
        recorrerCanva();
    }

    window.addEventListener("load", init);
}