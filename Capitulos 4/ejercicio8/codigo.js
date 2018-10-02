let numero = prompt("Escribe un numero entero para comprobar si es par o impar: ");
 
let resul = especNumero(numero);
prompt("El número "+numero+" es "+resul);

function especNumero(numero) {
	if (numero % 2 ==0) {
		return "Numero par.";
	}else{
		return "Numero impar.";
	}
}