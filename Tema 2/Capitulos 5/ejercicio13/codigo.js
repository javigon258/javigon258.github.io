{
    function anade(){
        let elemento = document.createElement("li");
        let text = document.createTextNode("hola mundo");
        let list = document.getElementById("lista");
    
        let new_element = "<li>Probando</li>";
        lista.innerHTML = lista.innerHTML + new_element;
    }
    
}