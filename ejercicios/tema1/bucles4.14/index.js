let ncolum = parseInt(prompt("introduce el numero de columnas: "));
let alt = parseInt(prompt("introduce la altura: "));
let anc = parseInt(prompt("introduce anchura: "));
document.write('<table border ="2" cellspacing = "2" bgcolor ="black" width ="200">');
document.write('<tr bgcolor="white" height="anc">');
let i=1;
while( i >= ncolum){
    if(i%2 ==0){
        document.write('<td width ="alt" bgcolor="black" </td>');
    }
    else{
        document.write('<td width ="alt" bgcolor="white" </td>');
    }
i++
}
document.write("</tr>");
document.write('</table>');