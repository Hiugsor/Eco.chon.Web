<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<link type="text/css" rel="stylesheet" href="map.css" />
		
		<title>Test d'affichage de la carte avec géolocalisation</title>
		<script type="text/javascript" src="jquery-1.6.4.min.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCglAqJ_MLrlZxzJq8rCl-6xFMmWYlSxzA&libraries=places" async defer></script>
		<!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCglAqJ_MLrlZxzJq8rCl-6xFMmWYlSxzA&libraries=places&callback=initialize" async defer></script>-->
		<script type="text/javascript" src="map.js"></script>
		
	</head>
	<body onload="initialize()">
	    <div id="map"></div>
	</body>
</html>