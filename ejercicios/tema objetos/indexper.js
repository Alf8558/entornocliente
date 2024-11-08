class persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.estomago=[];
        
    }
    toString(){
        return "Hola "+this.nombre+ "tu edad es "+this.edad+ " verdad?";
    }
   
    comer(comida){
        if(this.estomago.length < 10)
             this.estomago.push(comida);
            }
    servicio(){
        this.estomago=[]

    }

}