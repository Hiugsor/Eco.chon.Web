<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
	  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	  <title>Index</title>
	  <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	  <link href="bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
	  <link href="index.css" rel="stylesheet" type="text/css" />
	  <!-- <link type="text/css" rel="stylesheet" href="map.css" /> -->
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCglAqJ_MLrlZxzJq8rCl-6xFMmWYlSxzA" async defer></script>
	  <script type="text/javascript" src="map.js"></script>
	</head>
	<!--  <body onload="initialize()">-->
	<body>
		<%@include file="header.jsp" %>
		<div class="container-fluid text-center" id="divbas">    
  			<div class="row content">
				<%@include file="sideform.jsp" %>		
				<%@include file="map.jsp" %>
			</div>
		</div>
				
		
		
	  <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
	  <script type="text/javascript" src="bootstrap/js/bootstrap.js"></script>
	</body>
</html>