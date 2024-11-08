let num = parseInt(prompt("introduzca un numero: "));
let adi = parseInt(prompt("intente adivinar el numero: "));

while(num != adi ){
    if(adi > num){
        document.write("el numero que buscas es menor.");
    }
    else{
        document.write("el numero que buscas es mayor.");
    }

}