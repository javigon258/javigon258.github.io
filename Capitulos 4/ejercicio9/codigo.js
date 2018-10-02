let texto = prompt("Introduce texto:");
let resul = function(texto);

function caracteres(texto){

  	//let resul = "El texto \""+texto+"\" ";
 
  // Comprobar mayúsculas y minúsculas
  if(texto == texto.toUpperCase()) {
    resul += " está utilizando sólo mayúsculas";
  }
  else if(texto == texto.toLowerCase()) {
    resul += " está utilizando sólo minúsculas";
  }
  else {
    resul += " está utilizando mayúsculas y minúsculas";
  }
 
  return resul;
}
car
 