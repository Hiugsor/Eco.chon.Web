var stationList;
var markerIcons;

function initialize()
{	
	// Instanciation of a DirectionService object. This object communicates with the Google Maps API Directions Service which receives direction requests and returns computed results
	parent.directionsService = new google.maps.DirectionsService;
	
	parent.myMap = new google.maps.Map(document.getElementById("map"), {
	        zoom: 13,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
	 });
	 
	 
	 parent.userMarker = new google.maps.Marker({
		    map: parent.myMap,
		    title: 'You are here !',
		    draggable: false
		  });
	 
	 
	 parent.myCircle = new google.maps.Circle({
			strokeColor:"#0000FF",
			strokeOpacity:0.5,
			strokeWeight:2,
			fillColor:"#0000FF",
			fillOpacity:0.1,
			map:parent.myMap
		});
	 
    	 
	 parent.myGeocoder = new google.maps.Geocoder();
	 
	 if (navigator.geolocation)
	 {
		 var watchId = navigator.geolocation.getCurrentPosition(successCallback, error, {enableHighAccuracy:true});
	 }
	 else
	 {
		 alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");    
	 }
}


function error(err)
{
	var info="";
	
	switch(error.code) {
	    case error.TIMEOUT:
	    	info = "Timeout !";
	    	var position =  null;
	 		successCallback(position);
	    break;
	    
	    case error.PERMISSION_DENIED:
	    	info = "Vous n’avez pas donné la permission";
	    	var position =  null;
	    	successCallback(position);
	    break;
	    
	    case error.POSITION_UNAVAILABLE:
	    	info = "La position n’a pu être déterminée";
	    break;
	    
	    case error.UNKNOWN_ERROR:
	    	info = "Erreur inconnue";
	    break;
    }
	console.warn('ERROR(' + err.code + '): ' + err.message + ' ' + info);
}


function successCallback(position)
{
	var defaultDistance = parent.document.getElementById("slider").value; // Distance de recherche par defaut exprimee en km
	var typeCarburant = parent.document.getElementById("carb").value;
	var enseigne = parent.document.getElementById("enseigne").value;
		
	if(position != null)
	{		
		parent.myLat = position.coords.latitude;
		parent.myLong = position.coords.longitude;
	}
	else
	{
		// Default position on map
		parent.myLat = 47.084394; // BOURGES - CENTRE DE LA FRANCE 
		parent.myLong = 2.375797; // BOURGES - CENTRE DE LA FRANCE
	}
	
	parent.currentposition = new google.maps.LatLng(parent.myLat, parent.myLong);
	parent.myMap.setCenter(parent.currentposition);
	
	//Set marker position
	parent.userMarker.setPosition(parent.currentposition);
	
	// Retrieve and add stations on map
	getStations(defaultDistance,typeCarburant,enseigne);
	
	parent.myCircle.setCenter(parent.currentposition);
	parent.myCircle.setRadius(defaultDistance*1000);
}


function getStations(distance, typeCarburant, enseigne, adresse)
{
	var tabDatas;
		
	if (typeof adresse === 'undefined')
	{
		tabDatas = {latitude:parent.myLat, longitude:parent.myLong, distance:distance, typeCarburant:typeCarburant, enseigne:enseigne};
	}
	else
	{
		tabDatas = {latitude:parent.myLat, longitude:parent.myLong, distance:distance, typeCarburant:typeCarburant, enseigne:enseigne, adresse:adresse};
	}
	
	$.ajax({
	     url: 'map',
	     type: 'POST',
	     data: tabDatas,
	     dataType: 'json',
	     success:function(datas){

	    	
	    	 
	    	 if(datas.stationList)
	    	 {
		    	 var stationList = datas.stationList;
	
		    	 //alert(stationList.toSource());//TEST
		    	 
		    	 //Change the center of the map to the given LatLng
		    	 parent.myMap.panTo(new google.maps.LatLng(parent.myLat, parent.myLong));
		    	 
		    	 var greenPig = {
		    			 url: datas.greenPicture._url,
				
		    			 // This marker is 55 pixels wide by 55 pixels high.
		    			 size: new google.maps.Size(datas.greenPicture._size.coordonnee.latitude, datas.greenPicture._size.coordonnee.longitude),
				
		    			 // The origin for this image is (0, 0).
		    			 origin: new google.maps.Point(datas.greenPicture._origin.coordonnee.latitude, datas.greenPicture._origin.coordonnee.longitude),
	
		    			 // The anchor for this image is the base of the flagpole at (0, 32).
		    			 anchor: new google.maps.Point(datas.greenPicture._anchor.coordonnee.latitude, datas.greenPicture._anchor.coordonnee.longitude)
		    	 };
		    	 
		    	 var orangePig = {
		    			 url: datas.orangePicture._url,
				
		    			 // This marker is 55 pixels wide by 55 pixels high.
		    			 size: new google.maps.Size(datas.greenPicture._size.coordonnee.latitude, datas.greenPicture._size.coordonnee.longitude),
				
		    			 // The origin for this image is (0, 0).
		    			 origin: new google.maps.Point(datas.greenPicture._origin.coordonnee.latitude, datas.greenPicture._origin.coordonnee.longitude),
	
		    			 // The anchor for this image is the base of the flagpole at (0, 32).
		    			 anchor: new google.maps.Point(datas.greenPicture._anchor.coordonnee.latitude, datas.greenPicture._anchor.coordonnee.longitude)
		    	 };
		    	 
		    	 var redPig = {
		    			 url: datas.redPicture._url,
				
		    			 // This marker is 55 pixels wide by 55 pixels high.
		    			 size: new google.maps.Size(datas.greenPicture._size.coordonnee.latitude, datas.greenPicture._size.coordonnee.longitude),
				
		    			 // The origin for this image is (0, 0).
		    			 origin: new google.maps.Point(datas.greenPicture._origin.coordonnee.latitude, datas.greenPicture._origin.coordonnee.longitude),
	
		    			 // The anchor for this image is the base of the flagpole at (0, 32).
		    			 anchor: new google.maps.Point(datas.greenPicture._anchor.coordonnee.latitude, datas.greenPicture._anchor.coordonnee.longitude)
		    	 };   	 
		    	 
		        	
		    	 // Shapes define the clickable region of the icon. The type defines an HTML
		    	 // <area> element 'poly' which traces out a polygon as a series of X,Y points.
		    	 // The final coordinate closes the poly by connecting to the first coordinate.
				 var shape = {
						 coords: datas.shapeInfo._coords,
						 type: datas.shapeInfo._type
				 };
			 		
				  // Instanciation of a DirectionsRenderer object. It renders directions obtained from the DirectionsService.
				  parent.directionsDisplay = new google.maps.DirectionsRenderer;
				  			  			  
				  //Tri du tableau d'objets en fonction du prix du carburant visé
				  stationList.sort(comparator(typeCarburant));
				  		  
				  // Calcul des bornes pour la couleur des cochons
				  var borneGreenOrange = stationList.length/3;
				  var borneOrangeRed = borneGreenOrange*2;
				  
				  for (var i = 0; i < stationList.length; i++)
				  {   
					  //Instanciation of a InfoWindow object. It displays content (usually text or images) in a popup window above the map, at a given location. 
					  var infowin = new google.maps.InfoWindow();
					  var station = stationList[i];
					  
					  var mark = new google.maps.Marker({
					  numero : i,
					  position: {lat: station.adresse.position.coordonnee.latitude, lng: station.adresse.position.coordonnee.longitude},
					  map: parent.myMap,
					  shape: shape
					  });
					  				  
					  // On détermine la couleur du cochon en fonction de sa position dans le tableau trié
					  if(i>borneOrangeRed)
					  {
						  mark.setIcon(redPig);
					  }
					  else if(i>borneGreenOrange)
					  {
						  mark.setIcon(orangePig);
					  }
					  else
					  {
						  mark.setIcon(greenPig);
					  }
					  				  
					  google.maps.event.addListener(mark, 'click', function(event) {
	
						var StationCoordonates = event.latLng;
						stationLat = StationCoordonates.lat();
						stationLong = StationCoordonates.lng();			
						
						var prixCarburants = stationList[this.numero].carburants;
						var stringListeCarburant = "<h3>Carburant</h3>";
						prixCarburants.forEach(function(entry){
									var prixCarbu = (parseInt(entry.prix)/1000);
									stringListeCarburant += entry.nom + " : " + prixCarbu + " €<br/>";
								});
						
						var contentString = "<h2>Station : " + stationList[this.numero].nom + "</h2>" + /*"</h2> Lat : " + stationList[this.numero].adresse.position.coordonnee.latitude + "<br/> Long : " + stationList[this.numero].adresse.position.coordonnee.longitude + */"<br/> Adresse : " + stationList[this.numero].adresse.rue + "<br/> CP : " + stationList[this.numero].adresse.codepostal + "<br/> Ville : " + stationList[this.numero].adresse.ville.toUpperCase() + "<br/><hr size=\"1\">" + stringListeCarburant + "<br/><br/><input type='button' onClick=calculateAndDisplayRoute(stationLat,stationLong); value='Go !'>";
	
						infowin.setContent(contentString);
						infowin.open(this.getMap(), this);			
					  });	
					  
					  //Ajout du marker dans le tableau de markers
					  parent.markers.push(mark);
					  parent.directionsDisplay.setMap(parent.myMap);
				  }
	    	 }
	      },
	      error: function (request, status, error) {
	          alert(request.responseText);
	      }  
	  });
}


function calculateAndDisplayRoute(lati,lng)
{	
	parent.directionsService.route({
		origin: new google.maps.LatLng(parent.myLat,parent.myLong),
		destination: new google.maps.LatLng(lati, lng),
		travelMode: google.maps.TravelMode.DRIVING
		}, function(response, status) {
			if (status === google.maps.DirectionsStatus.OK) {
				parent.directionsDisplay.setDirections(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}


//Sets the map on all markers in the array.
function setMapOnAll(v_map)
{
	for (var i = 0; i < parent.markers.length; i++)
	{
		parent.markers[i].setMap(v_map);
	}
}


// Removes the markers from the map, but keeps them in the array.
function clearMarkers()
{
  setMapOnAll(null);
}


//Deletes all markers in the array by removing references to them.
function deleteMarkers()
{
  clearMarkers();
  parent.markers = [];
}


function updateArea(typeCarburant, distance, enseigne, adresse)
{
	var distance = parseInt(distance);
		
	if(parent.directionsDisplay != null)
	{
		parent.directionsDisplay.setMap(null);
	}
	
	deleteMarkers();	
	
	if (typeof adresse === 'undefined')
	{
		getStations(distance,typeCarburant,enseigne);
	}
	else
	{
		getStations(distance,typeCarburant,enseigne,adresse);
	}
}


function comparator(typeCarburant)
{
	return function(a,b){
		
		  var carbFound = false;
		  var index=0;
		  var valCarbA;
		  var valCarbB;
		  				  
		  while(index < a["carburants"].length && !carbFound)
		  {					  
			 if(a["carburants"][index]["nom"]== typeCarburant)
			 {
				 valCarbA = a["carburants"][index]["prix"];
				 carbFound=true;
			 }
			 else
			 {
				index++;
			 }
		  }
		  
		  index=0;
		  carbFound=false;
		  
		  while(index < b["carburants"].length && !carbFound)
		  {					  
			 if(b["carburants"][index]["nom"]== typeCarburant)
			 {
				 valCarbB = b["carburants"][index]["prix"];
				 carbFound=true;
			 }
			 else
			 {
				index++;
			 }
		  }
		  
		  return valCarbA - valCarbB;
	}
}
