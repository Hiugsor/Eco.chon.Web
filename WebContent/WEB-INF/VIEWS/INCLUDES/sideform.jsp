<%@page import="com.bo.*"%>
<%@page import="com.dao.*" %>
<%@page import="java.util.*"%>

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

<script type="text/javascript" src="leftarea.js"></script>

<script type="text/javascript">
<!--
  $(document).ready(function() {
	$(window).scroll(function() {
		scroll_item('leftdiv');				
	});
  });
//-->
</script>

<div class="sidenav col-lg-2 collapse navbar-collapse" id="leftdiv">
	<div class="well2 sidebar-nav" align="center" id="leftside">
		<br>

		<form novalidate method="post">
			<label id="sidetext" for="carb">Carburant</label>
			<br>
			<select	name="carb" id="carb" onchange="updateStations()">
				<!--  <option id="tous">Tous</option> -->

				<%
				  StationDao stdao = new StationDao();  
				  List<Carburant> carburants = stdao.getCarburants();
				  List<String> typecarbs = new ArrayList<String>();
				  
				  for(Carburant carb : carburants)
				  {
					  typecarbs.add(carb.getNom());
				  }
				  
				  Collections.sort(typecarbs);
				  
				  for(String typecarb : typecarbs)
				  {
					  if(typecarb.equals("Gazole"))
					    out.println("<option value=\"Gazole\" selected=\"selected\">Gazole</option>");
					  
					  else
						out.println("<option value=\"" + typecarb + "\">" + typecarb + "</option>");
				  }
				%>
			</select> <br>
			<br> <label id="sidetext" for="depart">Point de	d&eacute;part</label> <br> <input type="text" id="depart" name="depart">
			<br>
			<br> <br>
			<br> <br>
			<br> <label id="sidetext" for="distance">Distance de<br>recherche</label> <br>
<<<<<<< HEAD
			<br> <input name="distance" id="slider" type="range" min="0"
				max="200" step="1" value="30" oninput="updatePerimeter(this.value)" onchange="updatePerimeter(this.value)" onclick="updateStations()" >
=======
			<br> <input name="distance" id="slider" type="range" min="0" max="200" step="1" value="30" onchange="rangevalue.value = value">
>>>>>>> 6eb92486d2acd874732305ce46d5d3c89b68d505
			<output id="rangevalue">30</output>
			<br>
			<br> <label id="sidetext" for="enseigne">Enseigne</label> <br>
			<select name="enseigne" id="enseigne">
				<option id="tous" value="toutes">Toutes</option>
				<%
				  List<String> enseignes = stdao.getEnseignes();
				  Collections.sort(enseignes);
				  
			      for(String enseigne : enseignes)
				  {
				    out.println("<option value=\"" + enseigne + "\">" + enseigne.toUpperCase() + "</option>");
				  }
				%>
			</select> <br>
			<br> <input type="button" onClick="updateStationsAndPosition()" name="filtreok" id="filtreok" value="CHERCHER STATIONS">
		</form>
	</div>
</div>
<!--
</body>
</html> -->