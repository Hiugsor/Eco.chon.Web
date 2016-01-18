var stationList;
var markerIcons;

function initialize()
{	
	// Instanciation of a DirectionService object. This object communicates with the Google Maps API Directions Service which receives direction requests and returns computed results
    parent.directionsService = new google.maps.DirectionsService;
	
	 parent.map = new google.maps.Map(document.getElementById("map"), {
	        zoom: 15,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
	 });
	 
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
	var defaultDistance = 30; // Distance de recherche exprimee en km
	
	if(position != null)
	{
		parent.myLat = position.coords.latitude;
		parent.myLong= position.coords.longitude;
	}
	else
	{
		// Default position on map
		parent.myLat = 47.084394; // BOURGES - CENTRE DE LA FRANCE 
		parent.myLong = 2.375797; // BOURGES - CENTRE DE LA FRANCE
	}
	
	parent.currentposition = new google.maps.LatLng(parent.myLat, parent.myLong);
	parent.map.setCenter(parent.currentposition);
	
	// Creation of userMarker
	parent.userMarker = new google.maps.Marker({
	    position: parent.currentposition,
	    map: parent.map,
	    title: 'You are here !',
	    draggable: true
	  });
  
	// Retrieve and add stations on map
	getStations(defaultDistance);
	//getStations();
		
	//Creation of circle around userMarker
	parent.center = new google.maps.Circle({
		center:parent.currentposition,
		radius:(defaultDistance*1000),
		strokeColor:"#0000FF",
		strokeOpacity:0.5,
		strokeWeight:2,
		fillColor:"#0000FF",
		fillOpacity:0.1,
		map:parent.map
	});
}


function getStations(defaultDistance)
{
	 $.ajax({
	      url: 'map',
	      type: 'POST',
	      data: {latitude:parent.myLat, longitude:parent.myLong, distance:defaultDistance},
	      dataType: 'json',
	      success:function(datas){
	    	  
	    	  	var stationList = datas.stationList;
	    	  		    	  
		    	//Change the center of the map to the given LatLng
	  	  		parent.map.panTo(new google.maps.LatLng(parent.myLat, parent.myLong));
  	  
	        	var image = {
			    url: datas.pictureInfo._url,
			    
			    // This marker is 55 pixels wide by 55 pixels high.
			    size: new google.maps.Size(datas.pictureInfo._size.coordonnee.latitude, datas.pictureInfo._size.coordonnee.longitude),
			    
			    // The origin for this image is (0, 0).
			    origin: new google.maps.Point(datas.pictureInfo._origin.coordonnee.latitude, datas.pictureInfo._origin.coordonnee.longitude),
			    
			    // The anchor for this image is the base of the flagpole at (0, 32).
			    anchor: new google.maps.Point(datas.pictureInfo._anchor.coordonnee.latitude, datas.pictureInfo._anchor.coordonnee.longitude)
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
			  
			  for (var i = 0; i < stationList.length; i++)
			  {   
				  //Instanciation of a InfoWindow object. It displays content (usually text or images) in a popup window above the map, at a given location. 
				  var infowin = new google.maps.InfoWindow();
				  var station = stationList[i];
				  				  
				  var mark = new google.maps.Marker({
				  numero : i,
				  position: {lat: station.adresse.position.coordonnee.latitude, lng: station.adresse.position.coordonnee.longitude},
				  map: parent.map,
				  icon: image,
				  shape: shape
				  });
				  				  
				  google.maps.event.addListener(mark, 'click', function(event) {

					var StationCoordonates = event.latLng;
					stationLat = StationCoordonates.lat();
					stationLong = StationCoordonates.lng();			
					 
					calculateAndDisplayRoute(stationLat,stationLong);
					
					infowin.setContent(stationList[this.numero].nom);
					infowin.open(this.getMap(), this);
				  });	
				  
				//Ajout du marker dans le tableau de markers
				parent.markers.push(mark);
				
				parent.directionsDisplay.setMap(parent.map);
			  } 
			  
		  //parent.marker.setMap(parent.map); // A quoi ça sert ?
		  
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
function setMapOnAll(map)
{
  for (var i = 0; i < parent.markers.length; i++)
  {
    parent.markers[i].setMap(map);
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


function updateArea(rad)
{
	var distance = parseInt(rad);
		
	parent.directionsDisplay.setMap(null);
	
	deleteMarkers();
	getStations(distance);
}



