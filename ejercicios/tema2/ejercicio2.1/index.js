/*let num =Math.floor(Math.random()*100);
document.write(num);

let b= Math.random(200-100)+100;
document.write("b");

let num1 = Math.floor(Math.random()*1000);
document.write(num1);
*/
let a= parseInt(prompt(min("introduce un numero:" )));
let b= parseInt(prompt(max("introduce otro numero: ")));
let c= Math.floor(Math.random()*(a-b)+a);

document.write(c);




