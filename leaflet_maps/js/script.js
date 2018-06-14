var map = L.map('map').setView([40.737, -73.923], 3);

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var golf_icon = L.icon({
    iconUrl: 'css/images/golf.png',
		iconSize:     [64, 64], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [32, 64], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [32, 0] // point from which the popup should open relative to the iconAnchor
});

var golf_icon = L.icon({
    iconUrl: 'css/images/golf.png',
		iconSize:     [64, 64], // size of the icon
    shadowSize:   [0, 0], // size of the shadow
    iconAnchor:   [32, 64], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [32, 0] // point from which the popup should open relative to the iconAnchor
});


		

		/*
function onMapClick(e) {
	L.marker(e.latlng).addTo(map)
    .bindPopup('loc: ' + e.latlng)
    .openPopup();
}

map.on('click', onMapClick);
*/

console.log("getting data");
$.getJSON( "data.json", function( points_of_interest ) {
	console.log(points_of_interest['list']);
	for (place in points_of_interest['list']){
		cur_place = points_of_interest['list'][place];
		console.log(cur_place.text);
		var cur_latLng = L.latLng(cur_place.latLng.split(',').map(Number));
		console.log(L.icon(L.icon(cur_place.icon)))
		L.marker(cur_latLng).addTo(map).bindPopup('<h3>' + cur_place.text + '</h3>');
	}
});