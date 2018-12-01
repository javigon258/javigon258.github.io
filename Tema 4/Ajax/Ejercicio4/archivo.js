{
  String.prototype.truncar = function(lon) {
    lon = lon || 10;
    if (this.length > lon) {
      return this.substring(0, lon);
    } else {
      return this;
    }
  }

  let cadena = "hola mundo";
  document.getElementById("resp").innerHTML = cadena.truncar(6);

  String.prototype.truncar2 = function(lon, ind) {
    lon = lon || 10;
    ind = ind || '...';

    if (this.length > lon) {
        return this.substring(0, lon-ind.length) + ind;
    } else {
      return this;
    }
  }

  var cadena = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";
  document.getElementById("fecha").innerHTML = cadena.truncar2(50, '... (sigue)');
  
  //alert(cadena.truncar(50));

  function init() {
    truncar2();
    truncar();
  }

  document.addEventListener("DOMContentLoaded", init);
}
