{
  function init() {
    function Elemento(descripcion, cantidad, precio) {
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
    }
    function Cliente(nombre, direccion, telefono, dni) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.dni = dni;
    }

    function Factura(datosCliente, elemento) {
      this.datosCliente = datosCliente;
      this.elemento = elemento;
      this.iva = 21;
      this.incrementaIdFactura(); // incremento el contador cada vez que creo una factura
    }

    Factura.prototype.idFactura = 0;

    Factura.prototype.muestraIdFactura = function() {
      console.log("-- Id factura -- \n");
      console.log(this.idFactura);
    };

    Factura.prototype.incrementaIdFactura = function() {
      this.idFactura++;
    };

    Factura.prototype.muestraIva = function() {
      console.log("-- Iva --\n");
      console.log(this.iva + "%");
    };

    Factura.prototype.obtenerDatosCliente = function() {
      console.log("-- Datos cliente --\n");
      console.log(this.datosCliente.nombre);
      console.log(this.datosCliente.direccion);
      console.log(this.datosCliente.telefono);
      console.log(this.datosCliente.dni);
    };

    Factura.prototype.obtenerElementos = function() {
      console.log("-- Elementos --\n");
      console.log(
        this.elemento.descripcion +
          " - " +
          this.elemento.cantidad +
          " unidades - " +
          this.elemento.precio +
          "€"
      );
    };

    // creación factura
    let cliente = new Cliente("Jesus", "C/ancha", "60000000", "20523031a");

    let elemento = new Elemento("Ratón", "2", "20");

    let factura = new Factura(cliente, elemento);

    factura.muestraIdFactura();
    factura.obtenerElementos();
    factura.muestraIva();
    factura.obtenerDatosCliente();
    console.log("-- Total -- \n");
    console.log(factura.elemento.cantidad * factura.elemento.precio + "€");
  }
  document.addEventListener("DOMContentLoaded", init);
}