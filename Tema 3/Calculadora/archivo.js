{

  let contenido = document.createElement("div");
  contenido.className = "calculadora";
  let elemento;
  let input;
  let botones = [
    "CE","Del","%","+",
    "7","8","9","-",
    "4","5","6","x",
    "1","2","3","/",
    "0","+/-",",","="];
  let contador = 0;

  function cargarCalcu() {
    elemento = document.createElement("div");
    input = document.createElement("input");
    input.type = "text";
    input.className = "texto";

    elemento.appendChild(input);
    contenido.appendChild(elemento);
    
    for (let i = 0; i < 5; i++) {
      elemento = document.createElement("div");
      for (let j = 0; j < 4; j++) {
        input = document.createElement("input");
        input.type = "button";
        input.value = botones[contador++];
        input.className = "button";
        elemento.appendChild(input);
      }
      contenido.appendChild(elemento);
    }
    document.body.appendChild(contenido);
  }

  function calculadora() {
    let valor = this.value;
    switch (valor) {
      case 0:
        if (input.value != 0 || input.value == 0) {
          input.value = valor;
        }
        break;
      case 1:
        if (input.value != 0) {
          input.value = 1;
        }
        elemento.innerHTML(input.value);
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      default:
        break;
    }
  }

  function init() {
    cargarCalcu();
    calculadora();
  }

  document.addEventListener("DOMContentLoaded", init);
}
