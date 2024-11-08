
function maximo(a,b,c,d){
let a=prompt(parseInt("introduzca un numero:" ));
let b=prompt(parseInt("introduzca un numero:" ));
let c=prompt(parseInt("introduzca un numero:" ));
let d=prompt(parseInt("introduzca un numero:" ));

    let max=a;
if(b>max){
    max=b;
}
else if(c>max){
    max=c;
}
else if(d>max){
    max=d;
}
return max;
}

document.write("el numero mas grande es "+ maximo(a,b,c,d));



function lanzamiento(){
    let x = Math.floor(Math.random()*6)+1;

    return x;
}

document.write("el resultado es "+lanzamiento());

function tiradasDeDado() {
    let resultados = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
    };
  
    for (let i = 0; i < 6000; i++) {
      const lado = Math.floor(Math.random() * 6) + 1;
      resultados[lado]++;
    }
  
    return resultados;
  }
document.write("el numero de tiradas son: "+lanzamiento());



function volumen(radio){
    let radio=prompt(parseFloat("introduce el radio: "));
    let volumen = (4/3)*Math.PI*(radio*radio*radio);
return volumen;
}
document.write("el volumen del esfera es: "+volumen(radio));


function area(radio){
    let radio=prompt(parseFloat("introduce el radio: "));
    let area = Math.PI*(radio*radio);
    return area;
}
document.write("el area del circulo es: "+area(radio));


function potencia(base, exponente) {
    if (exponente === 0) {
      return 1;
    } else {
      return base * potencia(base, exponente - 1);
    }
  }