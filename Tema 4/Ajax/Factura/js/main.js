{
    let elementos = [];
    let contadorLineas = 1;
    let tabla;
    let factura;

    function init() {
        tabla = document.getElementById("tabla");
        document.getElementById("addLinea").addEventListener("click", nuevaLinea);
        document.getElementById("crearFactura").addEventListener("click",crearFactura);
    }

    function nuevaLinea() {
        if (!isEmptyLast()) {
            let linea = document.createElement("tr");
            let td, input, option;
            for (let i = 0; i < 4; i++) {
                td = document.createElement("td");
                switch (i) {
                    case 0:
                        input = document.createElement("input");
                        input.type = "text";
                        break;
                    case 3:
                        input = document.createElement("select");
                        for (let j = 0; j < 3; j++) {
                            switch (j) {
                                case 0:
                                    option = document.createElement("option");
                                    option.text = "Superreducido - 4%";
                                    option.value = 0.04;
                                    break;
                                case 1:
                                    option = document.createElement("option");
                                    option.text = "Reduccido - 10%";
                                    option.value = 0.1;
                                    break;
                                case 2:
                                    option = document.createElement("option");
                                    option.text = "General - 21%";
                                    option.value = 0.21;
                                    break;
                            }
                            input.appendChild(option);
                        }
                        break;
                    default:
                        input = document.createElement("input");
                        input.type = "number";
                        break;
                }

                td.appendChild(input);
                linea.appendChild(td);
            }
            tabla.appendChild(linea);
        }
        ++contadorLineas;
    }

    function isEmptyLast() {
        if (tabla.rows[contadorLineas].cells[0].childNodes[0].value == "" || tabla.rows[contadorLineas].cells[1].childNodes[0].value == "" ||
            tabla.rows[contadorLineas].cells[2].childNodes[0].value == "") {
            throw new Error("Debes rellenar la información antes de añadir.");
        } else
            return false;
    }

    function isEmpty() {
        for (let i = 0; i < contadorLineas; i++) {
            if(tabla.rows[1+i].cells[0].childNodes[0].value == "" || tabla.rows[1+i].cells[1].childNodes[0].value == "" ||
            tabla.rows[1+i].cells[2].childNodes[0].value == "" || tabla.rows[1+i].cells[3].childNodes[0].value == "")
                throw new Error("Debes rellenar la información de las líneas");
        }
    }

    function crearEmpresa() {
        let nombre = document.getElementById("nombreEmpresa").value;
        let direccion = document.getElementById("direccionEmpresa").value;
        let tlf = document.getElementById("tlfEmpresa").value;
        let cif = document.getElementById("cifEmpresa").value;
        if(nombre == "" || nombre == "" || nombre == "" || nombre == "")
            throw new Error("Debes rellenar todos los campos del cliente");
        return new Empresa(nombre, direccion, tlf, cif);
    }

    function crearCliente() {
        let nombre = document.getElementById("nombreCliente").value;
        let direccion = document.getElementById("direccionCliente").value;
        let tlf = document.getElementById("tlfCliente").value;
        let cif = document.getElementById("cifCliente").value;
        if(nombre == "" || nombre == "" || nombre == "" || nombre == "")
            throw new Error("Debes rellenar todos los campos del cliente");
        return new Cliente(nombre, direccion, tlf, cif);
    }

    function addElementos() {
        for (let i = 1; i < tabla.rows.length; i++) {
            //console.log("pasando por " + i);
            let optionSelected = tabla.rows[i].cells[3].childNodes[0];
            elementos.push(new Productos(tabla.rows[i].cells[0].childNodes[0].value,
                tabla.rows[i].cells[1].childNodes[0].value,
                tabla.rows[i].cells[2].childNodes[0].value,
                optionSelected.options[optionSelected.selectedIndex].value
                ));
        }
    }

    function crearFactura() {
        addElementos();
        factura = new Factura(crearEmpresa(),crearCliente(),elementos);
        factura.calcularTotal();
        console.log(factura);
        let ventanaFactura = window.open("","Factura");
        ventanaFactura.factura;
        ventanaFactura.factura = factura;
        ventanaFactura.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <script src="js/Factura.js"></script>
            <script src="js/Cliente.js"></script>
            <script src="js/Empresa.js"></script>
            <script src="js/Elemento.js"></script>
            <script src="js/main.js"></script>
            <title>Factura</title>
            <link rel="stylesheet" href="css/estilo.css" />
        </head>
        <body>
        <noscript>
            Mensaje que deberia mostraria si el navegador no es compatible con
            javascript.
        </noscript>
            <div>
                <h3>Tus datos.</h3>
                <label>Nombre: </label>${factura.empresa.nombre}  <label>CIF: </label>${factura.empresa.cif}
                <label>Dirección: ${factura.empresa.direccion}  </label><label>Teléfono: ${factura.empresa.telefono}</label>
            </div>
            <div id="datosCliente">
            <label>Nombre: </label>${factura.cliente.nombre}  <label>CIF: </label>${factura.cliente.cif}
            <label>Dirección: ${factura.cliente.direccion}  </label><label>Teléfono: ${factura.cliente.telefono}</label>
            </div>
            <div>
                <table id="tabla">
                    <tr>
                        <th>Descripción</th>
                        <th>Unidades</th>
                        <th>Precio</th>
                        <th>Iva</th>
                    </tr>`);
        let tabla = ``;
        elementos.forEach(element => {
            tabla += `<tr>
            <td>${element.descripcion}</td>
            <td>${element.cantidad}</td>
            <td>${element.precio}</td>
            <td>${element.iva}</td>
            </tr>
            `;
        });
        ventanaFactura.document.writeln(tabla);
        ventanaFactura.document.writeln(`
        </table>
            </div>
            <p id="error"></p>
                <p style="text-align:right;">
                <p>Precio base: ${factura.base}</p>
                <p>IVA ${(factura.ivasAcumulados.general + factura.ivasAcumulados.reducido + factura.ivasAcumulados.superreducido).toFixed()}</p>
                <p>Total: ${factura.total} </p>
            </p>
        </body>
        </html>`);
        ventanaFactura.document.close();
    }
    
    document.addEventListener("DOMContentLoaded", init);

}