<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="UTF-8"%>

<nav class="navbar navbar-inverse" id="divheader">

	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#leftdiv">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    
	<div id="logoDiv" class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
		<img id="logo" alt="Logo" src="bootstrap/img/Logo.png">
	</div>

    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-8" id="boutons">
	  <ul class="nav">
	    <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="btn1">
	    	<a href="<c:url value="listepompes"></c:url>">
	    		<img alt="Liste des Pompes" src="bootstrap/img/bouton_Liste_Off_2.png" class="imgbtn">
	    	</a>
		</li>
	    <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="btn2">
	    	<a href="<c:url value="/"></c:url>">
	    		<img alt="Carte" src="bootstrap/img/bouton_Carte_On_2.png" class="imgbtn">
    		</a>
    	</li>
	    <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="btn3">
	    	<a href="<c:url value="infos"></c:url>">
	    		<img alt="Informations" src="bootstrap/img/bouton_Info_Off_2.png" class="imgbtn">
	    	</a>
	    </li>
	  </ul>
    </div>
	<img alt="lisere" src="bootstrap/img/lisere.png" id="lisere">
</nav>
