<%@page import="com.dao.*"%>
<%@page import="com.bo.*" %>
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

	  <script type="text/javascript" src="sideform.js"></script>
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	  	  
	</head>
	<body>
		<c:import url="INCLUDES/header.jsp" />
		<div class="container-fluid text-center" id="divbas">    
  			<div class="row content">
				<c:import url="INCLUDES/sideform.jsp" />
				<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12" id="divprincipal">
				  <c:import url="${main_panel}"/>
				</div>
			</div>
		</div>
	  
	  <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
	  <script type="text/javascript" src="bootstrap/js/bootstrap.js"></script>
	
	</body>
</html>