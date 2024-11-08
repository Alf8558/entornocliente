let anc = parseInt(prompt("introduce anchura: "));
document.write('<table border ="2" cellspacing = "2" bgcolor ="black" width ="200">');
for(let i=1; i <=8 ; i++){
    if(i%2 ==0){
        document.write('<tr height="anc">');
        document.write('<td width ="anc" bgcolor="black" </td>');
        document.write('</tr');
    }
    for(let i=1; i <=8; i++){
        if(i%2 ==1){
            document.write('<tr height="anc">');
            document.write('<td width ="anc" bgcolor="white" </td>');
            document.write('</tr');
        }
        
    }

}
document.write('</table>');