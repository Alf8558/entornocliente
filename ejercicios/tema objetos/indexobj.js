class gato{
    constructor(cansancio, hambre, soledad, felicidad){
    this.cansancio=cansancio;
    this.hambre=hambre;
    this.soledad=soledad;
    this.felicidad=felicidad;
    }
    cansancio(){
        return this.dormir();
    }
    dormir(){
        return "quiero dormir.";
    }
    hambre(){
        return this.comer();
    }
    comer(){
        return "quiero un salmon, tengo hambre humano.";
    }
    soledad(){
        return this.acariciar;
    }
    acariciar(){
        return "daz me una acaricia rancio, que me encuetro solo y estoy trizte";
    }
    felicidad(){
        return this.acariciar;
    }
}