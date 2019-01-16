{
    let numClics = 0;
    let numDobleClics = 0;
    
    $(function(){
        
        $("#micapa").dblclick(function(e){
            numDobleClics++;
            $("#mensaje").html("Has hecho doble-clic<br>" + "Número de clics: " + numClics + "<br>Número de doble clics: " + numDobleClics);
        });
        $("#micapa").click(function(e){
            numClics++;
            $("#mensaje").html("Has hecho clic<br>" + "Número de clics: " + numClics + "<br>Número de doble clics: " + numDobleClics);
        });
    })
}