// console.log('hi')

/* Adding map start */
const myMap = L.map('map').setView([51.505, -0.09], 15);
/* Adding map end */

/* Tile layers start */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);
/* Tile layers end */


/* Getting user coordinates start */

/* Getting user location end  */

/* Marker Start */
const marker = L.marker([51.5, -0.09]).addTo(myMap)
marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()
/* Marker End */

/* Popups click start */
const popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(myMap);
}
myMap.on('click', onMapClick);
/* Popups end */


/* Events start */



/* Events end */
