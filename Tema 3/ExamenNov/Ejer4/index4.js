{
    function comprobarTexto(frase){
        frase = eliminaCaracter(frase.toLowerCase(),' ');
        return (frase == reverseString(frase));
    }

    function eliminaCaracter(frase, caracter){
        while(frase.indexOf(caracter) != -1)
            frase = frase.replace(caracter, '');
        return frase;
    }

    function reverseString(texto) {
        let delReves = "";
        for (let i = texto.length - 1; i >= 0; i--) { 
            delReves += texto[i];
        }
        return delReves;
    }

    function init(){
        let frase = "La ruta nos aporto otro paso natural";
        let opc;
        if(comprobarTexto(frase) == true)
            opc = "si";
        else
            opc = "no"; 
        document.getElementById('respuesta').textContent = "La frase "+ frase +" "+opc+ " es un palídromo";
    }
    
    document.getElementById("refAtras").addEventListener("click", atras);
    
    function atras(event) {
        event.preventDefault();
        history.back();
    }
    document.addEventListener("DOMContentLoaded",init);

}