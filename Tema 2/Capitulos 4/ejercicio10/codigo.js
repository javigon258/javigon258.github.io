{
   // let frase = "La ruta nos aporto otro paso natural";

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
        for (var i = texto.length - 1; i >= 0; i--) { 
            delReves += texto[i];
        }
        return delReves;
    }

    function init(){
        let frase = "La ruta nos aporto otro paso natural";
        let siNo;
        if(comprobarTexto(frase) == true)
            siNo = "si";
        else
            siNo = "no"; 
        document.getElementById('respuesta').textContent = "La frase    ,"+ frase +" "+siNo+ " es un palídromo";
    }
    document.addEventListener("DOMContentLoaded",init);

}