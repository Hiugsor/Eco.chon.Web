<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="UTF-8"%>
<!--
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  <title>Formulaire de recherche des stations</title>
</head>
<body>  -->
<!--  <div class="nav nav-stacked nav-stacked-left pull-left col-lg-3" id="leftdiv"> -->
<div class="sidenav col-lg-2 collapse navbar-collapse" id="leftdiv">
	<div class="well2 sidebar-nav" align="center" id="leftside">
		<br>
		<form action="#" method="post">
			<label id="sidetext" for="carb">Carburant</label> <br> <select
				name="carb" id="carb">
				<option id="tous">Tous</option>
				<option>SP 95</option>
				<option>SP 98</option>
				<option>Gazole</option>
				<option>E 10</option>
				<option>E 85</option>
				<option>GPL</option>
			</select> <br>
			<br> <label id="sidetext" for="depart">Point de
				d&eacute;part</label> <br> <input type="text" id="depart" name="depart">
			<br>
			<br> <br>
			<br> <br>
			<br> <label id="sidetext" for="distance">Distance de<br>recherche</label> <br>
			<br> <input name="distance" id="slider" type="range" min="0"
				max="200" step="1" value="30" onchange="rangevalue.value = value">
			<output id="rangevalue">30</output>
			<br>
			<br> <label id="sidetext" for="enseigne">Enseigne</label> <br>
			<select name="enseigne" id="enseigne">
				<option id="tous">Toutes</option>
				<option>AUCHAN</option>
				<option>AVIA</option>
				<option>CARREFOUR</option>
				<option>CASINO</option>
				<option>ELF</option>
				<option>ESSO</option>
				<option>INTERMARCHE</option>
				<option>LECLERC</option>
				<option>MAGASINS U</option>
				<option>TOTAL</option>
			</select> <br>
			<br> <input type="submit" name="filtreok" id="filtreok" value="LANCER LA RECHERCHE">
		</form>
	</div>
</div>
<!--
</body>
</html> -->