<%@page import="com.bo.*"%>
<%@page import="com.dao.*" %>
<%@page import="java.util.*"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="UTF-8"%>

<script type="text/javascript" src="leftarea.js"></script>
<script type="text/javascript" src="map.js"></script>
<script type="text/javascript">

  $(document).ready(function() {
	$(window).scroll(function() {
		scroll_item('leftdiv');				
	});
  });
  
  function geolocUser()
  {
	  if (eval("document.getElementById('geoloc').checked == true"))
	  {
	    if (navigator.geolocation)
	    {
		    var watchIdbis = navigator.geolocation.getCurrentPosition(successCallback, error, {enableHighAccuracy:true});
	    }
	    else
	    {
		    alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");    
	    }
	  }
  }
</script>

<div class="sidenav col-lg-2 collapse navbar-collapse" id="leftdiv">
	<div class="well2 sidebar-nav" align="center" id="leftside">
		<br>
		<form method="post" novalidate="novalidate">

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
			<br> <label id="sidetext" for="distance">Distance de<br>recherche</label> <br>
			<br> <input name="distance" id="slider" type="range" min="0" max="200" step="1" value="30" oninput="updatePerimeter(this.value)" onchange="updateStations()" onclick="updateStations()">

			<output id="rangevalue">30</output>
			<br>
			<br>
			<input type="checkbox" name="geoloc" id="geoloc" onclick="geolocUser()">
			  <label id="sidetext2" for="geoloc">
			    <%
			      out.println("<span class=\"ui\"></span> G&eacute;olocalisation ?");
			    %>
			  </label>			
			<br><br>
			<input type="button" onClick="updateStations()" name="filtreok" id="filtreok" value="CHERCHER STATIONS">
		</form>
	</div>
</div>