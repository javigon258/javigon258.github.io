{
    jQuery.fn.checkboxPersonalizado = function(opciones) {
        //opciones de configuración por defecto
        let conf = {
            activo: true,
            colorTextos: {
                activo: "#00f",
                pasivo: "#669"
            },
            textos: {
                activo: "",
                pasivo: ""
            },
            imagen: {
                activo: 'images/thumb_up.png',
                pasivo: 'images/thumb_down.png'
            },
            cssElemento: {
                padding: "2px 2px 2px 24px",
                display: "block",
                margin: "2px",
                border: "1px solid #eee",
                cursor: "pointer"
            },
            cssAdicional: {
                
            },
            nameCheck: ""
        };
        //Las extiendo con las opciones recibidas al invocar el plugin
        jQuery.extend(conf, opciones);
        
        this.each(function(){
            let miCheck = $(this);
            let activo = conf.activo
            let elementoCheck = $('<input type="checkbox" style="display: none;" />');
            if(conf.nameCheck==""){
                elementoCheck.attr("name", miCheck.text());
            }else{
                elementoCheck.attr("name", conf.nameCheck);
            }
            miCheck.before(elementoCheck);
            miCheck.css(conf.cssElemento);
            miCheck.css(conf.cssAdicional);
            
            if (activo){
                activar();
            }else{	
                desactivar();
            }
            miCheck.click(function(e){
                if(activo){
                    desactivar();
                }else{	
                    activar();
                }
                activo = !activo;
            });
            
            function desactivar(){
                miCheck.css({
                    background: "transparent url(" + conf.imagen.pasivo + ") no-repeat 3px",
                    color: conf.colorTextos.pasivo
                });
                if (conf.textos.pasivo!=""){
                    miCheck.text(conf.textos.pasivo)
                }
                elementoCheck.removeAttr("checked");
            };									
            
            function activar(){
                miCheck.css({
                    background: "transparent url(" + conf.imagen.activo + ") no-repeat 3px",
                    color: conf.colorTextos.activo
                });
                if (conf.textos.activo!=""){
                    miCheck.text(conf.textos.activo)
                }
                elementoCheck.attr("checked","1");
            };	
        });
        return this;
    };	
    
    $(function(){
        $(".ch").checkboxPersonalizado();
        $("#otro").checkboxPersonalizado({
            activo: false,
            colorTextos: {
                activo: "#f80",
                pasivo: "#98a"
            },
            imagen: {
                activo: 'images/weather_cloudy.png',
                pasivo: 'images/weather_rain.png'
            },
            textos: {
                activo: 'Buen tiempo :)',
                pasivo: 'Buena cara ;)'
            },
            cssAdicional: {
                border: "1px solid #dd5",
                width: "100px"
            },
            nameCheck: "buen_tiempo"
        });
    })
}