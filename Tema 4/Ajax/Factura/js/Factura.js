{
    function Factura(empresa, cliente, elementos) {
        this.empresa = empresa;
        this.cliente = cliente;
        this.elementos = elementos;
        this.base = 0;
        this.total = 0;
        this.ivasAcumulados = {
            general : 0,
            reducido : 0,
            superreducido : 0
        };
    }

    Factura.prototype.numeracion = 0;

    Factura.prototype.calculoBase = function () {
        this.elementos.forEach(element => {
            this.base += element.precio * element.cantidad;
        });
    }

    Factura.prototype.calculoTotal = function(){
        this.calculoBase();
        this.calculoIva();
        this.total = this.base + this.ivasAcumulados.general + this.ivasAcumulados.reducido + this.ivasAcumulados.superreducido;
    }

    Factura.prototype.calculoIva = function () {
        this.elementos.forEach( element => {
            switch (element.iva) {
                case "0.21":
                    this.ivasAcumulados.general = (element.precio * element.cantidad) * 0.21;
                    break;
                case "0.04":
                    this.ivasAcumulados.superreducido = (element.precio * element.cantidad) * 0.04;
                    break;
                case "0.1":
                    this.ivasAcumulados.reducido = (element.precio * element.cantidad) * 0.1;
                    break;
            }
        });
    }

    Factura.prototype.visualizaDatosFactura = function () {
        let info = document.getElementById("info");
        this.elementos.forEach(element => {
            info.innerHTML += element.nombre + " - " + element.descripcion + " - " + element.precio + " - Cantidad: " + element.cantidad + "</br>";
        });
        this.calculoTotal();
        info.innerHTML += "Total sin IVA:" + this.informacion.base + "-------" + " Total: " + this.informacion.total;
    }
}