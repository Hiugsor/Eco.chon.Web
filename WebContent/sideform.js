// GLOBAL VARIABLES
var map;
var infowindow;
var myLat;
var myLong;
var directionsService;
var directionsDisplay;
var marker;
var markers = [];
var currentposition;
var userMarker;
var center;


// FUNCTIONS
function showVal(newVal)
{
	document.getElementById("rangevalue").innerHTML=newVal;
}


function updatePerimeter(newPerimeter)
{
	document.getElementById("rangevalue").innerHTML = document.getElementById("slider").value;
	
	var area = parseInt(newPerimeter)*1000;
	parent.center.setRadius(area);
}


function updatePerimeterAndStations(newPerimeter)
{	
	document.getElementById("mapiframe").contentWindow.updateArea(newPerimeter);
}