{
    function Elemento(descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    function Cliente(nombre, direccion, telefono, nif){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
    function Cliente(datos, elemento){
        this.datos = datos;
        this.elemento = elemento;
        this.iva = 21;
    }
    Factura.prototype.idFactura = 0;

    function Factura(datosCliente, elemento) {
        this.datosCliente = datosCliente;
        this.elemento = elemento;
        this.iva = 21;
        this.aumentarIdFactu(); // incremento el contador cada vez que creo una factura
    }
    Factura.prototype.muestraIdFactura = function() {
        console.log("-- Id factura -- \n");
        console.log(this.idFactura);
    };
    
    Factura.prototype.aumentarIdFactu() = function(){
        this.idFactura++;
    }
    document.addEventListener("DOMContentLoaded", init);
}