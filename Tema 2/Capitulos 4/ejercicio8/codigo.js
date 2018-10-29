{
	
	function recogerNum(){
		return prompt("Escribe un numero entero para comprobar si es par o impar: ");
	}
	
	function especNumero(numero) {
		if (numero % 2 ==0) {
			return "Numero par.";
		}else{
			return "Numero es impar.";
		}
	}
	function init(){
		let resp = document.getElementById("respuesta");
		resp.innerHTML = especNumero(recogerNum());
	}
	document.addEventListener("DOMContentLoaded",init);
}
