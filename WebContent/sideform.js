// GLOBAL VARIABLES
var myMap;
var infowindow;
var myLat;
var myLong;
var directionsService;
var directionsDisplay;
var markers = [];
var currentposition;
var userMarker;
var myCircle;


// FUNCTIONS
function showVal(newVal)
{
	document.getElementById("rangevalue").innerHTML=newVal;
}

// Mise à jour du radius et de sa valeur en temps réel
function updatePerimeter(newPerimeter)
{
	document.getElementById("rangevalue").innerHTML = document.getElementById("slider").value;
	
	if(typeof myCircle !== 'undefined')
	{
		var area = parseInt(newPerimeter)*1000;
		myCircle.setRadius(area);
	}
}


function updateStations()
{	
	var typeCarburant = document.getElementById("carb").value;
	var adresse = document.getElementById("depart").value;
	var distance = document.getElementById("slider").value;
	var enseigne = document.getElementById("enseigne").value;
	
	if(document.getElementById("mapiframe"))
	{
		if(adresse && (0 !== adresse.length) && adresse.trim())
		{
			document.getElementById("mapiframe").contentWindow.updateArea(typeCarburant,distance,enseigne,adresse);
		}
		else
		{
			document.getElementById("mapiframe").contentWindow.updateArea(typeCarburant,distance,enseigne);
		}		
	}
}



function updateStationsAndPosition()
{
	var geocoder = new google.maps.Geocoder();
	
	geocoder.geocode( { 'address': document.getElementById("depart").value}, function(results, status) {
	      if (status == google.maps.GeocoderStatus.OK)
	      {
	    	  	// On retire le cercle de la MAP
	    		myCircle.setMap(null); 
	    		myCircle.setRadius(null);
	    		
	    		myLat = results[0].geometry.location.lat();
  				myLong= results[0].geometry.location.lng();
  				
  				currentposition = new google.maps.LatLng(myLat, myLong);
	    		    		
	    		userMarker.setMap(null);
	    		userMarker.setPosition(currentposition);
	    		userMarker.setMap(myMap);
	    		
	    		myCircle.setCenter(currentposition);
	    		var newDistance = document.getElementById("slider").value*1000;
	    		myCircle.setRadius(newDistance);    		
	    		myCircle.setMap(myMap);
	    		     
	    		updateStations();   
	      }
	      else
	      {
	    	  alert("Geocode was not successful for the following reason: " + status);
	      }
	});	
}
