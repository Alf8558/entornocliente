let ncolu= parseInt(prompt("introduzca el numero de columnas: "));
let nfila=parseInt(prompt("introduzca el numero de filas: "));
let alt= parseInt(prompt("introduzca el alto: "));
let anc= parseInt(prompt("introduce el ancho: "));

document.write('<table border= "0" bgcolor="black" width="200">');


for(let i=1; i <=ncolu;i++){
    document.write('<tr height="anc">');
    document.write('<td width="50"></td>');
    document.write('<td width="50"></td>');
    document.write('</tr');
for(let j=1; i <=nfila; i++){
    document.write('<tr height="anc">');
    document.write('<td width="50"></td>');
    document.write('<td width="50"></td>');
    document.write('</tr');
    }
}
document.write('</table>');


