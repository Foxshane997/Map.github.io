// console.log('hi')
let myMap;

/* Getting user coordinates start */
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}
console.log(getCoords())
/* Getting user location end  */

/* Adding map start */

async function createMap(){
    let coords = await getCoords();
    const myMap = L.map('map').setView(coords, 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

const marker = L.marker(coords).addTo(myMap)
marker.bindPopup('<p1><b>My Location</b></p1>').openPopup()
}
createMap()

/* Adding map end */

// query Foursquare API for locations the user selects
async function placeSearch(selection, coords) {
    try {
        const searchParams = new URLSearchParams({
          query: selection,
          ll: coords,
          open_now: 'true',
          sort: 'DISTANCE'
        });
        const results = await fetch(
          `https://api.foursquare.com/v3/places/search?${searchParams}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: 'fsq3VdkyX8R8j/VCAEqNrnYWw7YcdSyv9G8JWIbAlwleyp4=',
            }
          }
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

/* Events start */



/* Events end */
