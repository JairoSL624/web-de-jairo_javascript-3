let options={
    enableHighAccurcy: true,
    timeout: 5000,
    maximunAge: 0
}


if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    )

}else{
    alert("Los sercicios de geolocalización no están disponibles");
}

function success(position){
    let latitude= position.coords.latitude;
    let longitude= position.coords.longitude;
 
    let map = L.map("map",{
        center:[latitude,longitude],
        zoom: 14
    })
 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map)
 
    let control = L.routing.control({
        waypoints:[
            L.latLng(latitude,longitude),
            L.latLng(39.466553, -0.380095)
        ],
        language:"es",
    }).addTo(map);
}

function error(){}
    /*
document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([39.46599, -0.38158], 19);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([39.46599, -0.38158]).addTo(map)
        .bindPopup('Aquí está Mi Empresa')
        .openPopup();

    L.Routing.control({
        waypoints: [
            L.latLng(39.46599, -0.38158),
            L.latLng(39.466553, -0.380095)
        ]
    }).addTo(map);
});
*/