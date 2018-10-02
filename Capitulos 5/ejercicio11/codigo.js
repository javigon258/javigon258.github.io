function contar() {
//Ejercicio 1
	let enlaces=document.getElementsByTagName("a");
	document.write("Numero total de enlaces "+enlaces.length);
	
//Ejercicio 2
	let mensaje = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
 	document.write("<br/>".mensaje);

//Ejercicio 3
 	let cont = 0;
 	let numEnlances = enlaces.length;
  for(let i=0; i<numEnlances; i++) {
    if(enlaces[i].href == "http://prueba/") {
    	cont++;
    }
  }
  document.write("Hay " + cont + " enlaces que apuntan a http://prueba");

//Ejercicio 4
	let parr = document.getElementsByTagName("p");
	enlaces = parr[2].getElementsByTagName("a");
	document.write("Numero de enlaces del tercer párrafo = "+enlaces.length);
}