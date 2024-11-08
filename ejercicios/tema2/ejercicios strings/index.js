/*var cadena = "alfonso";
var cadena2= cadena.length;
function inviertecadena(){
    for(; i=cadena2[cadena];i++){
        document.write([i])
    }
}
inviertecadena();
*/
/*function inviertecadena(cadenaainvertir){
    for(let i=cadenaainvertir.length-1; i>=0;i--)
       resultado+= cadenaainvertir[i];
    return resultado;
}
document.write(inviertecadena(prompt("escribe una cadena:")));

function inviertepalabras(cadena){
    let resultado="";
    let cadenatranssplit= cadena.split(" ");
    for(let i=0; i<cadenatranssplit.length; i++){
    resultado+= inviertecadena(cadenatranssplit([i])+"");
    return resultado;
    }
    document.write("esto es un ejercio");
}
*/


function encuentrapalabra( cad){
    let palabras= cad.split(" ");
    let larga= palabras[0];
    for(let i=0; i<palabras.length; i++){
        if(palabras[i].length > larga){
            palabras= larga.length;
            return palabras;
        }
    }
    document.write("esto es un ejercio");
}