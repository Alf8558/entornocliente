function muestraPosicion2(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);


    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var circle = L.circle([pos.coords.latitude, pos.coords.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);


}
navigator.geolocation.getCurrentPosition(muestraPosicion2)





