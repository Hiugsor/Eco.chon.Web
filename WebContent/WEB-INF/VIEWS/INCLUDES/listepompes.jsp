<%@page import="com.processing.GestionRecherche"%>
<%@page import="java.io.*"%>
<%@page import="com.bo.*"%>
<%@page import="com.dao.*"%>
<%@page import="java.util.*"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="UTF-8"%>

<div id="divliste">
	<img src="bootstrap/img/Bordure_ZoneCarte_1.png" id=cornerTopRight />
	<img src="bootstrap/img/Bordure_ZoneCarte_2.png" id=cornerBottomLeft />
	<img src="bootstrap/img/Bordure_ZoneCarte_3.png" id=cornerTopLeft />
	<img src="bootstrap/img/Bordure_ZoneCarte_4.png" id=cornerBottomRight />

	<%
		GestionRecherche grecherche = new GestionRecherche();
	/*
		Recherche recherche = new Recherche();
		Critere critere = new Critere();
		Point position = new Point();
		Coordonnees coordonnee = new Coordonnees();
		coordonnee.setLatitude(43.610769);
		coordonnee.setLongitude(3.876622);
		position.setCoordonnee(coordonnee);
		critere.setPosition(position);
		recherche.setCritere(critere);
		critere.setRayon(30);

	  
		Adresse adresse = new Adresse();
		adresse.setRue("98 avenue de toulouse");
		adresse.setVille("Montpellier");
		adresse.setCodepostal("34000");
		critere.setAdresse(adresse);
		critere.setRayon(30);
		recherche.setCritere(critere);
    */

		
		List<Station> stations = grecherche.recupereStations(43.610769, 3.876622,"TOTO",30);
		String enseigne = "";
		String enseigneok;
		String logo = "";
		
		for (Station station : stations) 
		{		
				enseigne = station.getNom();

				StringBuilder enseignemaj = new StringBuilder(enseigne);
				enseignemaj.replace(0, 1, enseignemaj.substring(0, 1).toUpperCase());

				enseigneok = enseignemaj.toString();

				if (enseigneok.equals("Super u") || enseigneok.equals("Hyper u"))
				{
					logo = "bootstrap/img/stations/Logo U.png";
				}
				else if (enseigneok.equals("Ecomarché") || enseigneok.equals("Netto"))
				{
					logo = "bootstrap/img/stations/Intermarché.png";
				}

				else if (enseigneok.equals("Total access") || enseigneok.equals("Total raffinage marketing"))
				{
					logo = "bootstrap/img/stations/Total.png";
				}

				else if (enseigneok.equals("Supermarché casino"))
				{
					logo = "bootstrap/img/stations/Casino.png";
				}
				
				else if (enseigneok.equals("Carrefour market"))
				{
					logo = "bootstrap/img/stations/Carrefour_market.png";
				}

				else if (enseigneok.equals("Simply market"))
				{
					logo = "bootstrap/img/stations/Simply_market.png";
				}
				
				else if (enseigneok.equals("Esso express"))
				{
					logo = "bootstrap/img/stations/Esso.png";
				}
				
				else if (enseigneok.equals("E.leclerc"))
				{
					logo = "bootstrap/img/stations/E_leclerc.png";
				}

				else 
				{	
					String webpath = request.getSession().getServletContext().getRealPath("/") + "bootstrap/img/stations/" + enseignemaj.toString() + ".png";
										
					if (new File(webpath).exists())
					  logo = "bootstrap/img/stations/" + enseignemaj.toString() + ".png";
					
					else
					  logo = "bootstrap/img/stations/StationX.png";
				}
	%>

	<div id="listepompes">
		<table id="tablepompe">
			<tr>
				<td align="center" id="tddistance">
					<!-- &rsaquo; 500m --> Distance
				</td>
				<td colspan="2"></td>
			</tr>
			<tr>
				<td align="center" id="logostation"><img alt="Logo station"
					src="<% out.println(logo); %>" width="25%" height="25%"></td>
				<td align="center" id="tdstation"><span id="underlined">
				<%
				  out.println(enseigne.toUpperCase());
				%>
				</span> <br> 
				<%
 				  out.println(station.getAdresse().getRue().toUpperCase());
 				%>
				<br>
				<%
 				  out.println(station.getAdresse().getCodepostal() + " " + station.getAdresse().getVille().toUpperCase());
				  out.print("<br />");
				%>
				<br><br>
				</td>
				<td id="prix">
			<!--    <canvas id="canvascarb" width="70" height="70"></canvas>
				    <script>
						var canvas = document.getElementById('carb');
						var context = canvas.getContext('2d');
						var centerX = canvas.width / 2;
						var centerY = canvas.height / 2;
						//var Xbis = centerX / 2;
						var radius = 30;
						var texte = "SP 95";

						context.beginPath();
						context.arc(centerX, centerY, radius, 0, 2 * Math.PI,
								false);
						context.fillStyle = '#00cc00';
						context.fill();
						context.fillStyle = '#ffffff';
						//context.font = 'bold' + radius + 'px Calibri';
						context.font = 'bold 16px Calibri';

						var width = context.measureText(texte).width;
						var height = context.measureText("w").width;

						context.fillText(texte, centerX - (width / 2), centerY
								+ (height / 2));
						context.lineWidth = 5;
						context.strokeStyle = '#ffffff';
						context.stroke();
					</script>
				-->
				</td>
				<td id="prix2"> 
				<%
				//  for(Carburant c : station.getCarburants())
					if(station.getCarburants() != null && station.getCarburants().size() > 0)
	 			      out.println("<span class=\"" + station.getCarburants().get(0).getNom() + "\">" + station.getCarburants().get(0).getNom() + " : "+ (station.getCarburants().get(0).getPrix() / 1000) +"</span> <br>");
	 			%>
	 			</td>
			</tr>
		</table>
	</div>
	<%
	  }  // fin For
	%>
</div>