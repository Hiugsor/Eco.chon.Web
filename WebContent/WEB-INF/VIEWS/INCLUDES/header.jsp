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

    <div class="col-lg-10 col-md-10 col-sm-9 col-xs-8" id="boutons">
	  <ul class="nav">
	    <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="btn1">
	    	<a href="<c:url value="listepompes"></c:url>">
	    		<input type="button" id="btnstyle" value="Liste Pompes" title="Liste des stations-service sélectionnées" alt="Liste des Pompes">
	    	</a>
		</li>
	    <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="btn2">
	    	<a href="<c:url value="/"></c:url>">
	    		<input type="button" id="btnstyle" value="Carte" title="Carte des stations-service" alt="Carte">
    		</a>
    	</li>
	    <li class="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="btn3">
	    	<a href="<c:url value="infos"></c:url>">
	    		<input type="button" id="btnstyle" value="Informations" title="Informations carburants" alt="Informations">
	    	</a>
	    </li>
	  </ul>
    </div>
    
	<img alt="lisere" src="bootstrap/img/lisere.png" id="lisere">
</nav>
