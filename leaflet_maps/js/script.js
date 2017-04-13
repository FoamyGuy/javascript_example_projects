/*
	Leaflet.js is an open source javascript library that 
	makes it easy for us to add interative maps to our page.
	Learn more here: 
*/

// Create the leaflet map object and store it in a variable.
// parameters accepted: id of div to hold the map, lat/lng coords
// to center map on, zoom level
var map = L.map('map').setView([40.737, -73.923], 3);

// initialize the tileLayer. There are many different entities that
// host tile servers. We must tell leaflet which one we want to use.
// We must also attribute our usage.
L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> | <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
}).addTo(map);


console.log("getting data");

/*
	Use the getJSON() ajax function from jquery.
	It accepts a URL to fetch, a function to call
	when the request is complete, that function accepts
	a parameter that will hold the data that was fetched. 
*/
$.getJSON( "data.json", function( points_of_interest ) {
	console.log(points_of_interest['list']);
	// loop over all of the points that we fetched
	for (place in points_of_interest['list']){
		// make a variable and store the current point in it
		var cur_place = points_of_interest['list'][place];
		// log for debugging
		console.log(cur_place.text);
		// make a variable and store the current points LatLng value
		var cur_latLng = L.latLng(cur_place.latLng.split(',').map(Number));
		// finally add the marker to the map.
		L.marker(cur_latLng).addTo(map).bindPopup('<h3>' + cur_place.text + '</h3>');
	}
});