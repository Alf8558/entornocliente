//ejercicio 1
//window.onload = function() {
/*const btn = document.querySelector("button");
function saltaAlert(){
    console.log("alertaaaaaaa");
}
btn.addEventListener("click",saltaAlert);

//ejercicio 2

//const movimientoRat=document.getElementsByName("mouseover");

document.addEventListener("mousemove",(e)=>{
    console.log(e.clientY);
    console.log(e.clientX);
});
*/

//ejercicio 3
/*let startTime;

        // Función que se ejecuta cuando la página se carga
       
            startTime = new Date(); // Guarda el tiempo de carga
            updateTimer(); // Inicia el temporizador
        

        // Función para actualizar el tiempo transcurrido
        function updateTimer() {
            let startTime = new Date();
            const currentTime = new Date();
            const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Calcula el tiempo en segundos
            document.getElementById('timer').innerText = elapsedTime + ' segundos'; // Actualiza el texto

            // Llama a esta función cada segundo
            setTimeout(updateTimer, 1000);
        }
*/

//ejercicio 4

            document.write('<table>');
            for(let i=0;i<=100;i++){
               document.write('<tr>');
               for(j=0;j<=100;j++){
                   document.write('<td></td>');
               }
               document.write('</tr>');
            }
            document.write('</table>');

       window.onload = () => {
           const celdas= document.getElementsByTagName("td");
           for(let i = 0; i < celdas.length; i++){
               celdas[i].addEventListener("mousemove", (e) =>{
                   if (e.ctrlKey){
                       celdas[i].style.backgroundColor = "red";
                   } else if(e.shiftKey){
                       celdas[i].style.backgroundColor = "blue";
                   }
               });
           }
        }
   // };

 /*  


window.onload = () => {
    const celdas = document.getElementsByTagName("td");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener("mousemove", (e) => {
            if (e.ctrlKey) {
                celdas[i].style.backgroundColor = "red";
            } else if (e.shiftKey) {
                celdas[i].style.backgroundColor = "blue";
            }
        });
    }
}*/