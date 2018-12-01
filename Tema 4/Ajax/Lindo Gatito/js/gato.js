{
    /**
     * @author Javier González
     */
    function Gato(nombre,fechaNac,raza,peso){
        this.nombre = nombre;
        this.fechaNac = fechaNac;
        this.edad = getEdad(fechaNac);
        this.raza = raza;
        this.peso = peso;
        this.enfermo = false;
    }
    Gato.prototype.isMuerto = false;

    Gato.prototype.isDurmiendo = false;

    Gato.prototype.jugar = function(){
        if (this.peso > 1) 
            this.peso--;
            this.isMuerto = true;
          
    }
    Gato.prototype.comer= function(){
        if (this.peso < 15) 
            this.peso++;
            this.isMuerto = true;
    }
    Gato.prototype.dormir = function() {
        this.isDurmiendo = true;
      }
      
    Gato.prototype.getNombre = function(){
        return this.nombre;
    }
    Gato.prototype.getRaza = function(){
        return this.raza;
    }
    Gato.prototype.getFecha = function(){
        return this.fechaNac;
    }
    function getEdad(fechaNac){
        return (new Date()).getFullYear() - fechaNac.split('/')[2];
    }
    
    Gato.prototype.getPeso = function(){
        return this.peso;
    }
    Gato.prototype.getEnfermo = function(){
        return this.isMuerto;
    }
}