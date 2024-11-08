function muestraPosicion(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);

}
navigator.geolocation.getCurrentPosition(muestraPosicion);
function funcionerror(error){
    console.log(error.code);
    console.log(error.message);

}
 if(navigator.geolocation ){
    document.write("la geolocalizacion  esta disponible.");
    navigator.geolocation.getCurrentPosition(muestraPosicion);
    
}else{
    navigator.geolocation.getCurrentPosition(GeolocationPositionError.message);
    document.write("la geolocalizacion no esta disponible." + funcionerror);
}
function muestraPosicion(pos){
    document.write("latitud: "+ pos.coords.latitude+"<br>");
    document.write("longitud: "+pos.coords.longitude);

}


/*let n= [5];
let j =[5];
if(navigator.geolocation ){
    document.write("la geolocalizacion  esta disponible.");
    navigator.geolocation.watchPosition(muestraPosicion1);
    for(i=0;i<n.length && i<j.length;i++){
        navigator.geolocation.watchPosition(muestraPosicion1);
        n[i]=pos.coords.latitude;
        j[i]=pos.coords.longitude;
        
    }
}else{
    document.write("la geolocalizacion no esta disponible.");
}
function muestraPosicion1(pos){
    document.write(" latitud: "+ pos.coords.latitude +"<br>");
    document.write(" longitud: "+pos.coords.longitude  + "<br>");

}
*/
function getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2, unit = 'miles') {
    let theta = longitude1 - longitude2;
    let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
        Math.sin(latitude1 * (Math.PI/180)) * Math.sin(latitude2 * (Math.PI/180)) + 
        Math.cos(latitude1 * (Math.PI/180)) * Math.cos(latitude2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
    );
    if (unit == 'miles') {
        return Math.round(distance, 2);
    } else if (unit == 'kilometers') {
        return Math.round(distance * 1.609344, 2);
    }
}
var posatc= null;
var posant= null;
var distancia= null;

function obtenpocion(pos){
    let posant=posatc;
    let posatc= nuev;
    
}
function muestraPosicion1(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
 var circle = L.circle([pos.coords.latitude, pos.coords.longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

}


navigator.geolocation.watchPosition(muestraPosicion1);


