var map = L.map('map').setView([40.68025, -74.00155], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var parkIcon = L.icon({
	iconUrl: 'image/forest.png',

		iconSize: [32, 37],
		shadowSize: [50, 64],
		shadowAnchor: [4, 62],
		popupAnchor: [-3, -76]

});

var centralParkMarker = L.marker([40.778997, -73.968973],
{icon: parkIcon}).addTo(map);

var riversideParkMarker = L.marker([40.802780, -73.971462],
{icon: parkIcon}).addTo(map);

var prospectParkMarker = L.marker([40.661774, -73.971462],
{icon: parkIcon}).addTo(map);


$('.park').on('mouseover', function(){
	$(this).css('background','#8ECEFA');
});

$('.park').on('mouseout', function(){
	$(this).css('background','#7FABC9')
});

prospectParkMarker.on('mouseover', function(){
	$('.prospectPark').toggleClass('hover');
});

prospectParkMarker.on('mouseout', function(){
	$('.prospectPark').toggleClass('hover');
});

centralParkMarker.on('mouseover', function(){
	$('.centralPark').toggleClass('hover');
});

centralParkMarker.on('mouseout', function(){
	$('.centralPark').toggleClass('hover');
});

riversideParkMarker.on('mouseover', function(){
	$('.riversidePark').toggleClass('hover');
});

riversideParkMarker.on('mouseout', function(){
	$('.riversidePark').toggleClass('hover');
});


$('.centralPark').on('click', function(){
	map.panTo(new L.LatLng(40.778997, -73.968973)), {animate: true, duration: 1.0}
});

$('.riversidePark').on('click', function(){
	map.panTo(new L.LatLng(40.802780, -73.971462)), {animate: true, duration: 1.0}
});

$('.prospectPark').on('click', function(){
	map.panTo(new L.LatLng(40.661774, -73.971462)), {animate: true, duration: 1.0}
});



