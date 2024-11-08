/*let fecha= new Date();

document.write(fecha.getFullYear()+"<br>");
document.write(fecha.getMonth()+"<br>");
document.write(fecha.getDate()+"<br>");
document.write(fecha.getHours()+"<br>");
document.write(fecha.getMinutes()+"<br>");
document.write(fecha.getSeconds()+"<br>");
*/
/*let fechahoy= new Date();
fechahoy.setDate(fechahoy.getDate());
document.write(fechahoy+"<br>");
let fecha85= new Date() ;
fecha85.setDate(fechahoy.getDate()+85);
document.write("<br>"+fecha85);
let fecha187 = new Date();
fecha187.setDate(fechahoy.getDate()-187);
document.write(fecha187);
let suma2 = new Date;
suma2.setDate(fechahoy.getDate() + 720);
document.write(suma2);
let rest24 = new Date();
rest24.setDate(fechahoy.getDate() - 1);
document.write(rest24);
let fecharesto = new Date;
fecharesto.setDate(fecha85.getDate()-fecha187.getDate());
document.write(fecharesto);
*/
/*
let tiempo = 60;

        // Obtenemos el elemento donde se mostrará el contador
        const contadorElemento = document.getElementById('contador')
        function contador() {
            tiempo--;

    
            if (tiempo > 0) {
                setTimeout(contador, 1000); 
            } else {
                alert('¡Tiempo terminado!');
            }
        }
        setTimeout(contador(), 1000);


for(i=0;i=tiempo.length; i--){
    document.write(i+"<br>");
}
*/
var segundos= 60;

function miFuncion(){
        document.write(segundos);
        segundos--;
    }

setInterval(miFuncion,1000);
