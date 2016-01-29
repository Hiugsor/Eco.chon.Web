<%@page import="javax.swing.JOptionPane"%>
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
		String carbchoix = "Gazole";

		List<Station> stations = null;
		// grecherche.recupereStations(43.610769, 3.876622, carbchoix, 30);     // AFPA
		// List<Station> stations = grecherche.recupereStations(44.425975, 3.739340, carbchoix, 30);        // Mont Lozère
		// List<Station> stations = grecherche.recupereStations("Route du Mont Lozère 48190 Le Bleymard", carbchoix, 30);
		if(request.getSession().getAttribute("stations") != null)
		stations = (ArrayList<Station>) request.getSession().getAttribute("stations");
		
		String enseigne = "";
		String enseigneok;
		String logo = "";
		List<String> servicesaafficher = new ArrayList<String>();
		int lg = (servicesaafficher.size() - 1);
		if(stations != null)
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

					/*String webpath = request.getSession().getServletContext().getRealPath("bootstrap/img/stations/" + enseignemaj.toString() + ".png");*/
					
					if (new File(webpath).exists())
					  logo = "bootstrap/img/stations/" + enseignemaj.toString() + ".png";
					
					else
					  logo = "bootstrap/img/stations/StationX.png";
				}
				
				//System.out.println(logo);//TEST
	%>

	<div id="listepompes">
		<table id="tablepompe">
			<tr>
				<td id="tddistance">
				<!-- &rsaquo; 500m -->
				<%
				  double distance = station.getDistance();
				  String affdist = String.format("%.02f", distance);
 				  
				  out.println("[" + affdist + " km]");
 				%>
				</td>
				<td colspan="2"></td>
			</tr>
			<tr>
				<td id="logostation"><img alt="Logo station"
					src="<% out.println(logo); %>" width="25%" height="25%"></td>
				<td id="tdstation">
				<br>
				<span id="underlined">
				<%
				  out.print(enseigne.toUpperCase());
				%>
				</span>
				<br>
				<%
 				  out.println("<span id=\"adresse\">" + station.getAdresse().getRue().toUpperCase() + "</span>");
 				%>
 				<span id="typeroute">
				<%
				String typeRoute = station.getTypeRoute().getNom();
								
				if(typeRoute.equals("A"))
					out.println("<img alt=\"type_route\" src=\"bootstrap/img/autoroute.png\" width=\"50%\" height=\"50%\">");
				
				else if(typeRoute.equals("R"))
					out.println("<img alt=\"type_route\" src=\"bootstrap/img/route.png\" width=\"50%\" height=\"50%\">");
				%>
				</span>
				<br>
				<%
 				  out.println("<span id=\"adresse\">" + station.getAdresse().getCodepostal() + " " + station.getAdresse().getVille().toUpperCase() + "</span>");
				%>
				<br>
				<%
 				  out.println("<span id=\"horaires\"><u>Horaires :</u> " + station.getHeureOuverture().toString().substring(0, 5).replace(':','h') + " - " + station.getHeureFermeture().toString().substring(0, 5).replace(':','h') + "</span>");
				%>
				
				<%
 				  List<TypeService> services = station.getServices();
				  String listeserv = "";
				
				  if((services != null) && (services.size() > 0))
				  {					  
					  for(TypeService service : services)
					    listeserv += (service.getNom() + " - ");
				  }
				  
				  else
				  {
					  listeserv += "N.C.  ";
				  }
				  
				  listeserv = listeserv.substring(0, (listeserv.length() - 2));      // pour retirer le "-" final (esthétique)
				  servicesaafficher.add(listeserv);
				  lg++;
				%>
				
				<script type="text/javascript">
				  function afficheServices(){
					  alert('<%=servicesaafficher.get(lg)%>');
				  }
				</script>
				
				<%
				  //out.print("<span id=\"services\"><u>Services :</u> " + listeserv + "</span>");
				  String servok = servicesaafficher.get(lg);
				%>
				<button id="services" onclick="alert('<%=servok%>')">AFFICHER SERVICES</button>				
				
				<br>
				<%
 				  List<String> joursFermeture = station.getJoursFermeture();
				  String jours = "";
				  StringBuilder jourmaj;				  
				  
				  if((joursFermeture != null) && (joursFermeture.size() > 0))
				  {					  
					  for(String jour : joursFermeture)
					  {
						  jourmaj = new StringBuilder(jour);
						  jourmaj.replace(0, 1, jourmaj.substring(0, 1).toUpperCase());					    
						  
						  jours += (jourmaj.toString() + " - ");
					  }
				  }
				  
				  else
				  {
					  jours += "N.C.  ";
				  }
				  
				  jours = jours.substring(0, (jours.length() - 2));      // pour retirer le "-" final (esthétique)
				  out.print("<span id=\"horaires\"><u>Ferm&eacute; le(s) :</u> &nbsp;" + jours + "</span>");
				%>
				<br><br>
				</td>
				<td id="prix2">
				<%
				
				  if((station.getCarburants() != null) && (station.getCarburants().size() > 0))
				  {
				    /*
					  if(carbchoix.equalsIgnoreCase("Tous"))                        // Si choix = "Tous (les carburants)" ...
					  {
					    for(Carburant carbitem : station.getCarburants())
					    {
						  String nomcarb = carbitem.getNom();
						  float prixcarb = (carbitem.getPrix() / 1000);
						  String affprix = String.format("%.03f", prixcarb);
						  
						  out.println("<div class=\"" + nomcarb + "\" id=\"spancarb\">" + nomcarb.toUpperCase() + " <span style=\"float: right;\">" + affprix +" &euro;</span></div>");
					    }
					  }
					*/  
					  if((carbchoix != null) && (! carbchoix.equals("")) && (! carbchoix.equals(" ")))      // Si l'utilisateur a choisi un carburant précis ...
					  {
						  int nbcarb = station.getCarburants().size();
						  boolean trouve = false;
						  int i;
						  
						  for(i=0; i < nbcarb; i++)
						  {							  
							  if(station.getCarburants().get(i).getNom().equalsIgnoreCase(carbchoix))
							  {
								  trouve = true;
								  break;
							  }
						  }
						  
						  if(trouve)             // Si la station propose bien le carburant choisi ...
						  {
							  String nomcarb = station.getCarburants().get(i).getNom();
						  	  float prixcarb = (station.getCarburants().get(i).getPrix() / 1000);
						  	  String affprix = String.format("%.03f", prixcarb);
						  
						  	  out.println("<div class=\"" + nomcarb + "\" id=\"spancarb\"><u>" + nomcarb.toUpperCase() + "</u><br>" + affprix +" &euro;</div>");   // <span style=\"float: right;\"> </span>
						  }
						  
						  else                                             // Sinon, message "données inconnues" ...
						  {
							  out.println("<div id=\"nocarb\">" + carbchoix.toUpperCase() + " INDISPONIBLE</div>");
						  }
					  }
					  
					  else       // Sinon, message "données inconnues" ...
					  {
						  out.println("<div id=\"nocarb\">PAS DE CARBURANT S&Eacute;LECTIONN&Eacute;</div>");
					  }
				  }
				  
				  else
					  out.println("<div id=\"nocarb\">ERREUR : AUCUNE DONN&Eacute;E &Agrave; AFFICHER !!</div>");
	 			%>
	 			</td>
			</tr>
		</table>
	</div>
	<%
	  }  // fin For
	%>
</div>

<!--
<script src="jquery.fittext.js"></script>

<script type="text/javascript">
		$("#tddistance").fitText();
		$("#tdstation").fitText(); /*1.2);*/
		$("#horaires").fitText(); /*1.1, { minFontSize: '6pt', maxFontSize: '32pt' });*/
		$("#services").fitText();
		$("#prix2").fitText();
</script>
-->