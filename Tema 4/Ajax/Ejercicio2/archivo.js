{
  function Cliente(nombre, direccion, telefono, nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
  }

  // Definición de la clase Elemento
  function Elemento(descripcion, cantidad, precio) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
  }

  // Definición de la clase Factura
  function Factura(cliente, elementos) {
    this.cliente = cliente;
    this.elementos = elementos;
    this.informacion = {
      baseImponible: 0,
      iva: 16,
      total: 0,
      formaPago: "contado"
    };
  }

  // La información de la empresa que emite la factura se
  // añade al prototype porque se supone que no cambia
  Factura.prototype.empresa = {
    nombre: "Nombre de la empresa",
    direccion: "Direccion de la empresa",
    telefono: "900900900",
    nif: "XXXXXXXX"

  };

  // Métodos añadidos al prototype de la Factura
  Factura.prototype.calculaTotal = function() {
    for (let i = 0; i < this.elementos.length; i++) {
      this.informacion.baseImponible +=
        this.elementos[i].cantidad * this.elementos[i].precio;
    }
    this.informacion.total =
      this.informacion.baseImponible * this.informacion.iva;
  };

  Factura.prototype.muestraTotal = function() {
    this.calculaTotal();
    //let date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    document.getElementById("resp").innerHTML = "TOTAL = " + this.informacion.total + " euros";
  };

  // Creación de una factura
  let elCliente = new Cliente("Cliente 1", "", "", "");
  let losElementos = [
    new Elemento("elemento1", "1", "5"),
    new Elemento("elemento2", "2", "12"),
    new Elemento("elemento3", "3", "42")
  ];


  function init() {
    let laFactura = new Factura(elCliente, losElementos);
    laFactura.muestraTotal();
  }

  document.addEventListener("DOMContentLoaded", init);
}
