{
function limita(elEvento, maximoCaracteres) {
  let elemento = document.getElementById("texto");
 
  // Obtener la tecla pulsada 
  let evento = elEvento;
  let codigoCaracter = evento.charCode;
  // Permitir utilizar las teclas con flecha horizontal
  if(codigoCaracter == 37 || codigoCaracter == 39) {
    return true;
  }
  else if(elemento.value.length >= maximoCaracteres ) {
    return false;
  }
  else {
    return true;
  }
}
 
function actualizaInfo(maximoCaracteres) {
  let elemento = document.getElementById("texto");
  let info = document.getElementById("info");
 
  if(elemento.value.length >= maximoCaracteres ) {
    info.innerHTML = "Máximo "+maximoCaracteres+" caracteres";
  }
  else {
    info.innerHTML = "Puedes escribir hasta "+(maximoCaracteres-elemento.value.length)+" caracteres adicionales";
  }
}
function init(){
    actualizaInfo();
    limita();
}
document.addEventListener("DOMContentLoaded",init);

}