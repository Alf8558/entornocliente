var poslat1=null;
var poslon1=null;
var poslat2=null;
var poslon2=null;
var distatot=0;
var distance=0;

var posant=(poslat1,poslon1);
var posact=(poslat2,poslon2);


function optenerdis(pos){
    posant=posact;
    posact=pos;
    distatot+=pos;

}

function getDistanceBetweenPoints(poslat1, poslon1, poslat2, poslon2, unit = 'miles') {
    let theta = poslon1 - poslon2;
    let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
        Math.sin(poslat1 * (Math.PI/180)) * Math.sin(poslat2 * (Math.PI/180)) + 
        Math.cos(poslat1 * (Math.PI/180)) * Math.cos(poslat2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
    );
    if (unit == 'miles') {
        return Math.round(distance, 2);
    } else if (unit == 'kilometers') {
        return Math.round(distance * 1.609344, 2);
    }
}
navigator.geolocation.watchPosition(optenerdis);