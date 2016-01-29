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
var myGeocoder;


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
	
	if(document.getElementById("mapiframe"))
	{
		if(adresse && (0 !== adresse.length) && adresse.trim())
		{

			document.getElementById("mapiframe").contentWindow.updateArea(typeCarburant,distance,adresse);
			
			myGeocoder.geocode( { 'address': document.getElementById("depart").value}, function(results, status) {
			      if (status == document.getElementById("mapiframe").contentWindow.google.maps.GeocoderStatus.OK)
			      {
			    	  	// On retire le cercle de la MAP
			    		myCircle.setMap(null); 
			    		myCircle.setRadius(null);
			    		
			    		myLat = results[0].geometry.location.lat();
		  				myLong= results[0].geometry.location.lng();
		  				
		  				var goo = document.getElementById("mapiframe").contentWindow.google;
		  				
		  				currentposition = new goo.maps.LatLng(myLat, myLong);
			    		    		
			    		userMarker.setMap(null);
			    		userMarker.setPosition(currentposition);
			    		userMarker.setMap(myMap);
			    		
			    		myCircle.setCenter(currentposition);
			    		var newDistance = document.getElementById("slider").value*1000;
			    		myCircle.setRadius(newDistance);    		
			    		myCircle.setMap(myMap);
			      }
			      else
			      {
			    	  alert("Geocode was not successful for the following reason: " + status);
			      }
			});
		}
		else
		{
			document.getElementById("mapiframe").contentWindow.updateArea(typeCarburant,distance);
		}		
	}
	else if(document.getElementById("divliste"))
	{		
		if(adresse && (0 !== adresse.length) && adresse.trim())
		{
			getGazStations("listepompes",typeCarburant,distance,adresse);
		}
		else
		{
			getGazStations("listepompes",typeCarburant,distance);
		}
	}
	else if(document.getElementById("divinfos"))
	{
		if(adresse && (0 !== adresse.length) && adresse.trim())
		{
			 getGazStations("infos",typeCarburant,distance,adresse);
		}
		else
		{
			getGazStations("infos",typeCarburant,distance);
		}
	}
}


function getGazStations(myUrl, typeCarburant, distance, adresse)
{
	var tabDatas;
	
	if (typeof adresse === 'undefined')
	{
		tabDatas = {distance:distance, typeCarburant:typeCarburant};
	}
	else
	{
		tabDatas = {distance:distance, typeCarburant:typeCarburant,adresse:adresse};
	}
		
	$.ajax({
	     url: myUrl,
	     type: 'POST',
	     data: tabDatas,
	     dataType: 'html',
	     success:function(datas){
	    	 document.getElementById("divprincipal").innerHTML = datas;	    	 
	     },
	     error: function (request, status, error) {
	    	  alert("ERREUR DANS L'APPEl AJAX");
	     }  
	  });
}


function successCallback(position)
{
	var defaultDistance = document.getElementById("slider").value; // Distance de recherche par defaut exprimee en km
	var typeCarburant = document.getElementById("carb").value;
		
	if(position != null)
	{		
		myLat = position.coords.latitude;
		myLong = position.coords.longitude;
	}
	else
	{
		// Default position on map
		myLat = 47.084394; // BOURGES - CENTRE DE LA FRANCE 
		myLong = 2.375797; // BOURGES - CENTRE DE LA FRANCE
	}
	
	currentposition = new google.maps.LatLng(myLat, parent.myLong);
	parent.myMap.setCenter(parent.currentposition);
	
	//Set marker position
	parent.userMarker.setPosition(parent.currentposition);
	
	// Retrieve and add stations on map
	getStations(defaultDistance,typeCarburant);
	
	parent.myCircle.setCenter(parent.currentposition);
	parent.myCircle.setRadius(defaultDistance*1000);
}
