var map;
var infowindow;
var myLat;
var myLong;
var directionsService;
var directionsDisplay;
var marker;
var currentposition;

function initialize()
{
	// Instanciation of a DirectionService object. This object communicates with the Google Maps API Directions Service which receives direction requests and returns computed results
	directionsService = new google.maps.DirectionsService;
	// Instanciation of a DirectionsRenderer object. It renders directions obtained from the DirectionsService.
	directionsDisplay = new google.maps.DirectionsRenderer;
	
	 map = new google.maps.Map(document.getElementById("map"), {
	        zoom: 15,
	        //center: new google.maps.LatLng(48.858565, 2.347198),
		    mapTypeId: google.maps.MapTypeId.ROADMAP
	 });
	 
	 
	 if (navigator.geolocation)
	 {
		 var watchId = navigator.geolocation.getCurrentPosition(successCallback, null, {enableHighAccuracy:true});
	 }
	 else
	 {
		 alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");    
	 }
}
 

function successCallback(position)
{
	
	myLat = position.coords.latitude;
	myLong= position.coords.longitude;
	
	currentposition = new google.maps.LatLng(myLat, myLong);
	
	map.setCenter(currentposition);
	
	var userMarker = new google.maps.Marker({
	    position: currentposition,
	    map: map,
	    title: 'You are here !'
	  });
	
	//Instanciation of a InfoWindow object. It displays content (usually text or images) in a popup window above the map, at a given location. 
	infowindow = new google.maps.InfoWindow();
  
	var request = {
	location: currentposition,
	radius: '500',
	query: 'station service'
	};
	
	//Instanciation of a PlacesService object. It contains methods related to searching for Places and retrieving details about a Place.
	service = new google.maps.places.PlacesService(map);
	service.textSearch(request, callback);
	
	var myArea = new google.maps.Circle({
		center:currentposition,
		radius:15000,
		strokeColor:"#0000FF",
		strokeOpacity:0.5,
		strokeWeight:2,
		fillColor:"#0000FF",
		fillOpacity:0.1,
		map:map}
	);
}


// Function called if places found. Used to create markers.
function callback(results, status)
{
  if (status === google.maps.places.PlacesServiceStatus.OK)
  {
	for (var i = 0; i < results.length; i++)
	{
		var place = results[i];
		createMarker(place);
	}
  }
}


// Create marker on map with informations on route.
function createMarker(place)
{
  var placeLoc = place.geometry.location;
  
  $.ajax({
      url: 'map',
      type: 'POST',
      data: {latitude:myLat, longitude:myLong},
      dataType: 'json',
      success:function(datas){
                   	  
    	  		//Change the center of the map to the given LatLng
    	  		map.panTo(new google.maps.LatLng(myLat, myLong));
    	  
	        	var image = {
			    url: datas.pictureInfo._url,
			    
			    // This marker is 55 pixels wide by 55 pixels high.
			    size: new google.maps.Size(datas.pictureInfo._size._coordonnee._latitude, datas.pictureInfo._size._coordonnee._longitude),
			    
			    // The origin for this image is (0, 0).
			    origin: new google.maps.Point(datas.pictureInfo._origin._coordonnee._latitude, datas.pictureInfo._origin._coordonnee._longitude),
			    
			    // The anchor for this image is the base of the flagpole at (0, 32).
			    anchor: new google.maps.Point(datas.pictureInfo._anchor._coordonnee._latitude, datas.pictureInfo._anchor._coordonnee._longitude)
			  };
	        	
			  // Shapes define the clickable region of the icon. The type defines an HTML
			  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
			  // The final coordinate closes the poly by connecting to the first coordinate.
			  var shape = {
			    coords: datas.shapeInfo._coords,
			    type: datas.shapeInfo._type
			  };
		 	
			  marker = new google.maps.Marker({
			  position: place.geometry.location,
			  map: map,
			  icon: image,
			  shape: shape
			  });
			  
			  google.maps.event.addListener(marker, 'click', function(event) {

				var StationCoordonates = event.latLng;
				var stationLat = StationCoordonates.lat();
				var stationLong = StationCoordonates.lng();			
				
				calculateAndDisplayRoute(directionsService, directionsDisplay,stationLat,stationLong);
				
				infowindow.setContent(place.name);
				infowindow.open(map, this);
			  });
		  			  
		  directionsDisplay.setMap(map);
		  
      },
      error: function (request, status, error) {
          alert(request.responseText);
      }  
  });
}


function calculateAndDisplayRoute(directionsService, directionsDisplay,lati,lng)
{	
	directionsService.route({
		origin: new google.maps.LatLng(myLat, myLong),
		destination: new google.maps.LatLng(lati, lng),
		travelMode: google.maps.TravelMode.DRIVING
		}, function(response, status) {
			if (status === google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}
