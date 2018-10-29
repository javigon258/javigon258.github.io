{
	let resp1,resp2,resp3,resp4;
	let enlaces = document.getElementsByTagName("a")	

	//Ejercicio 1
function contarEnl() {	
		resp1 = "Numero total de enlaces "+enlaces.length;
	}

	//Ejercicio 2
	function decirEnl(){
		resp2 = "El penultimo enlace apunta a: "+enlaces[enlaces.length-2].href;
	}

	//Ejercicio 3
	function numEnlances(){
		let cont = 0;
		let numEnlances = enlaces.length;
		for(let i=0; i<numEnlances; i++) {
			if(enlaces[i].href == "http://prueba/") {
				cont++;
			}
		}
		resp3 = "Hay " + cont + " enlaces que apuntan a http://prueba";
	}

	//Ejercicio 4
	function enlcsTercerParr(){
		let parr = document.getElementsByTagName("p");
		enlaces = parr[2].getElementsByTagName("a");
		resp4 = "Numero de enlaces del tercer párrafo = "+enlaces.length;
	}

	function init(){
		let resp = document.getElementById("respuestas");
		contarEnl();
		decirEnl();
		numEnlances();
		enlcsTercerParr();
		resp.innerHTML = "<h2>"+resp1+"</h2>";
		resp.innerHTML += "<br><h2>"+resp2+"</h2>";
		resp.innerHTML += "<br><h2>"+resp3+"</h2>";
		resp.innerHTML += "<br><h2>"+resp4+"</h2>";
	}

	document.addEventListener("DOMContentLoaded",init);
}