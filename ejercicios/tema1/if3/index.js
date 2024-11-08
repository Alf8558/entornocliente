let edad = prompt("que edad tienes: ");

if(edad <=5){
    document.write("jardin de infancia");
}
else if(edad >= 6 && edad <=11){
    document.write("primaria");
}
else if(edad >=12 && edad <= 16){
    document.write("eso");
}
else if(edad >=17 && edad <= 21){
    document.write("bachillerato o ciclos");
}
else if(edad > 21){
    document.write("universidad");
}