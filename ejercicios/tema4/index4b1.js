window.onload;{
    crearTitu();

}

function crearTitu(){
    let colorAl = document.getElementById("colorAl").innerText.document.write(generaColo+","+generaColo+","+generaColo);
    //colorAl=document.write(generaColo+","+generaColo+","+generaColo);
}

function generaColo (){
    let min =0;
    let max =255;
    return Math.random() * (max - min) + min;
  }
  //document.write(generaColo+","+generaColo+","+generaColo);




//function crearColor(){
   /* for(let i=0; i<=255;i++){
        document.write(i+",");
        for(let j=0; j<=255;i++){
            document.write(j+",");
            for(let l=0; l=255; i++){
                document.write(l);

            }
        }
    }*/
