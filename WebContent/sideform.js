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
	var enseigne = document.getElementById("enseigne").value;
	
	if(document.getElementById("mapiframe"))
	{
		if(adresse && (0 !== adresse.length) && adresse.trim())
		{
			document.getElementById("mapiframe").contentWindow.updateArea(typeCarburant,distance,enseigne,adresse);
			
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
			document.getElementById("mapiframe").contentWindow.updateArea(typeCarburant,distance,enseigne);
		}		
	}
	else if(document.getElementById("divliste"))
	{		
		if(adresse && (0 !== adresse.length) && adresse.trim())
		{
			getGazStations("listepompes",typeCarburant,distance,enseigne,adresse);
		}
		else
		{
			getGazStations("listepompes",typeCarburant,distance,enseigne);
		}
	}
	else if(document.getElementById("divinfos"))
	{
		if(adresse && (0 !== adresse.length) && adresse.trim())
		{
			 getGazStations("infos",typeCarburant,distance,enseigne,adresse);
		}
		else
		{
			getGazStations("infos",typeCarburant,distance,enseigne);
		}
	}
}


/*
function updateStationsAndPosition()
{
	updateStations(); 
	
	if(document.getElementById("mapiframe"))
	{
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
}
*/



function getGazStations(myUrl, typeCarburant, distance, enseigne, adresse)
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
	
	//alert(" distance : " + distance + " typeCarburant : " + typeCarburant + " adresse : " + adresse);
	
	
	//alert(document.getElementById("divprincipal").toString());// TEST
	
	$.ajax({
	     url: myUrl,
	     type: 'POST',
	     data: tabDatas,
	     dataType: 'html',
	     success:function(datas){
	    	 //alert("C'est bon ! " + datas.toString());
	    	 //alert("ICI : " + document.getElementById("divprincipal").innerHTML);
	    	 
	    	 //$("divprincipal").html(datas);
	    	 
	    	 document.getElementById("divprincipal").innerHTML = datas;
	    	 //alert("TOTOT = " + document.getElementById("divprincipal").toString());
	    	 
	     },
	     error: function (request, status, error) {
	    	  alert("ERREUR DANS L'APPEl AJAX");
	          //alert(request.responseText);
	     }  
	  });
}


