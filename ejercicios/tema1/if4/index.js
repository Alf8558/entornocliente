let her = propmt(" numero de hermanos: ");
let cant = propmt(pasertInt(" dime una cantidad"));

if(her > 3){
    document.write(cant* 0.15);
}
else if(her < 3){
    document.write(cant * 0.05);
}
else{
    document.write(cant);
}