<%@page import="com.bo.*"%>
<%@page import="com.dao.*" %>
<%@page import="java.util.*"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="UTF-8"%>

<div class="sidenav col-lg-2 collapse navbar-collapse" id="leftdiv">
	<div class="well2 sidebar-nav" align="center" id="leftside">
		<br>
		<form action="#" method="post">
			<label id="sidetext" for="carb">Carburant</label> <br> <select
				name="carb" id="carb">
				<option id="tous">Tous</option>
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
					  out.println("<option value=\"" + typecarb + "\">" + typecarb + "</option>");
				  }
				%>
			</select> <br>
			<br> <label id="sidetext" for="depart">Point de
				d&eacute;part</label> <br> <input type="text" id="depart" name="depart">
			<br>
			<br> <br>
			<br> <br>
			<br> <label id="sidetext" for="distance">Distance de<br>recherche</label> <br>
			<br> <input name="distance" id="slider" type="range" min="0"
				max="200" step="1" value="30" oninput="updatePerimeter(this.value)" onchange="updatePerimeter(this.value)" onclick="updatePerimeterAndStations(this.value)" >
			<output id="rangevalue">30</output>
			<br>
			<br> <label id="sidetext" for="enseigne">Enseigne</label> <br>
			<select name="enseigne" id="enseigne">
				<option id="tous">Toutes</option>
				<%
				  List<String> enseignes = stdao.getEnseignes();
				  Collections.sort(enseignes);
				  
			      for(String enseigne : enseignes)
				  {
				    out.println("<option value=\"" + enseigne + "\">" + enseigne.toUpperCase() + "</option>");
				  }
				%>
			</select> <br>
			<br> <input type="submit" name="filtreok" id="filtreok" value="CHERCHER STATIONS">
		</form>
	</div>
</div>
