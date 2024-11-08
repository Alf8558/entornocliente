let nota = parsertFloat(prompt("dime la nota de examen: "));
let tra1 = parsertFloat(promnt("dime la nota del primer trabajo: "));
let tra2 = pasertFloat(promnt("dime la nota del segundo trabajo: "));


let notaf = ((nota*0.75)+(tra1*0.25)+(tra2*0.25));


if(notaf > 5){
    document.write(" has aprobado");
}
else{
    document.write("lo siento, has suspendido");
}