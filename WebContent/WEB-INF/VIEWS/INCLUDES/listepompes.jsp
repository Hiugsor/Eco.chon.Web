<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Affichage de la liste des stations</title>
</head>
<body>
  <div id="divliste">
    <img src="bootstrap/img/Bordure_ZoneCarte_1.png" id=cornerTopRight />
	<img src="bootstrap/img/Bordure_ZoneCarte_2.png" id=cornerBottomLeft />
	<img src="bootstrap/img/Bordure_ZoneCarte_3.png" id=cornerTopLeft />
	<img src="bootstrap/img/Bordure_ZoneCarte_4.png" id=cornerBottomRight />
  		
  	<div id="listepompes">
  	  <table id="tablepompe">
  	    <tr>
  	      <td align="center" id="tddistance">&rsaquo; 500m</td>
  	      <td colspan="2"></td>
  	    </tr>
  	    <tr>
  	      <td align="center" id="logostation"> <img alt="Logo TOTAL" src="bootstrap/img/logo_Total.png" width="25%" height="25%"> </td>
  	      <td align="center" id="tdstation">
  	        <u>Station-service TOTAL</u> <br>
  	        100, Avenue de la Pompignane <br>
  	        04.67.99.54.93 <br><br>
  	      </td>
  	      <td id="prix">
  	        <!-- <img alt="SP95-E10" src="bootstrap/img/Sp95-E10.eps" width="20%" height="20%"> -->
  	        1.33 &euro;
  	      </td>
  	    </tr>
  	  </table>
  	</div>
  		
  	<div id="listepompes">
  	  <table id="tablepompe">
  	    <tr>
  	      <td align="center" id="tddistance">&rsaquo; 1km</td>
  	      <td colspan="2"></td>
  	    </tr>
  	    <tr>
  	      <td align="center" id="logostation"> <img alt="Logo AGIP" src="bootstrap/img/logo_Agip.png" width="25%" height="25%"> </td>
  	      <td align="center" id="tdstation">
  	        <u>Station-service AGIP</u> <br>
  	        544, Rue Paul Rimbaud <br>
  	        04.67.63.08.18 <br><br>
  	      </td>
  	      <td id="prix">
  	        <!-- <img alt="Diesel" src="bootstrap/img/Diesel.eps" width="20%" height="20%"> -->
  	        0.86 &euro;
  	      </td>
  	    </tr>
  	  </table>
  	</div>
  		
  	<div id="listepompes">
  	  <table id="tablepompe">
  	    <tr>
  	      <td align="center" id="tddistance">&lsaquo; 3km</td>
  	      <td colspan="2"></td>
  	    </tr>
  	    <tr>
  	      <td align="center" id="logostation"> <img alt="Logo CARREFOUR" src="bootstrap/img/logo_Carrefour.png" width="25%" height="25%"> </td>
  	      <td align="center" id="tdstation">
  	        <u>Station-service CARREFOUR</u> <br>
  	        Route de Ganges <br>
  	        04.67.23.52.12 <br><br>
  	      </td>
  	      <td id="prix">
  	        <!-- <img alt="Diesel" src="bootstrap/img/Diesel.eps" width="20%" height="20%"> -->
  	        0.95 &euro;
  	      </td>
  	    </tr>
  	  </table>
  	</div>
  </div>
</body>
</html>