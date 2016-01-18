package com.ecopompe.servlets;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bo.Coordonnees;
import com.bo.Critere;
import com.bo.Point;
import com.bo.Recherche;
import com.bo.Station;
import com.ecopompe.beans.Picture;
import com.ecopompe.beans.Shape;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.processing.GestionRecherche;

@WebServlet("/Map")
public class Map extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public static final String VUE = "/WEB-INF/VIEWS/INCLUDES/map.jsp";
	public static final String MARKER_ICON_DEFAULT = "bootstrap/img/Logo_EcoPomp40.png";
	/*public static final String MARKER_ICON_GREEN = "bootstrap/img/Logo_EcoPomp40.png";
	public static final String MARKER_ICON_ORANGE = "bootstrap/img/Logo_EcoPomp40.png";
	public static final String MARKER_ICON_RED = "bootstrap/img/Logo_EcoPomp40.png";*/

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.getServletContext().getRequestDispatcher(VUE).forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		GestionRecherche grecherche = new GestionRecherche();
		Recherche recherche = new Recherche();
		Critere critere = new Critere();
		Point position = new Point();
		Coordonnees myCoord = new Coordonnees();
			
		 if (request.getParameterMap().containsKey("latitude") && request.getParameterMap().containsKey("longitude") && request.getParameterMap().containsKey("distance"))
		 {
			 	String distance = request.getParameter("distance");
			 	
				myCoord.setLatitude(Double.parseDouble(request.getParameter("latitude").toString()));
				myCoord.setLongitude(Double.parseDouble(request.getParameter("longitude").toString()));
					
				position.setCoordonnee(myCoord);
				critere.setPosition(position);
				critere.setRayon(Integer.parseInt(distance));
				recherche.setCritere(critere);
	
				ArrayList<Station> stationsRes = null;
				stationsRes = grecherche.recupereStations(recherche);
							 
								
				/*Picture pictGreen = new Picture();
				pictGreen.setUrl(MARKER_ICON_GREEN);
				
				Picture pictOrange = new Picture();
				pictOrange.setUrl(MARKER_ICON_ORANGE);
				
				Picture pictRed = new Picture();
				pictRed.setUrl(MARKER_ICON_RED);*/
				
				
				Picture pictDefault = new Picture();
				pictDefault.setUrl(MARKER_ICON_DEFAULT);
				
				Point size = new Point();
				myCoord = new Coordonnees();
				myCoord.setLatitude(40.0);
				myCoord.setLongitude(40.0);
				size.setCoordonnee(myCoord);
				pictDefault.setSize(size);
				
				Point origine = new Point();
				myCoord = new Coordonnees();
				myCoord.setLatitude(0.0);
				myCoord.setLongitude(0.0);
				origine.setCoordonnee(myCoord);
				pictDefault.setOrigin(origine);
				
				Point anchor = new Point();
				myCoord = new Coordonnees();
				myCoord.setLatitude(0.0);
				myCoord.setLongitude(55.0);
				anchor.setCoordonnee(myCoord);
				pictDefault.setAnchor(anchor);
	
				Shape shape = new Shape();
								
				PrintWriter out = response.getWriter();
				Gson gson = new Gson();
				JsonObject myObj = new JsonObject();
			 
				JsonElement stationArrayObj = gson.toJsonTree(stationsRes);
				JsonElement pictureObj = gson.toJsonTree(pictDefault);
				JsonElement shapeObj = gson.toJsonTree(shape);
				
				myObj.add("stationList",  stationArrayObj);
				myObj.add("pictureInfo",  pictureObj);
				myObj.add("shapeInfo",  shapeObj);
	
				out.println(myObj.toString());
	
				out.close();
	
	     }/*
		 else
		 {
			 	PrintWriter out = response.getWriter();
				Gson gson = new Gson();
				JsonObject myObj = new JsonObject();
				
				Picture pict = new Picture();
				pict.setUrl(MARKER_ICON);
				
				Point size = new Point();
				myCoord = new Coordonnees();
				myCoord.setLatitude(40.0);
				myCoord.setLongitude(40.0);
				size.setCoordonnee(myCoord);
				pict.setSize(size);
				
				Point origine = new Point();
				myCoord = new Coordonnees();
				myCoord.setLatitude(0.0);
				myCoord.setLongitude(0.0);
				origine.setCoordonnee(myCoord);
				pict.setOrigin(origine);
				
				Point anchor = new Point();
				myCoord = new Coordonnees();
				myCoord.setLatitude(0.0);
				myCoord.setLongitude(55.0);
				anchor.setCoordonnee(myCoord);
				pict.setAnchor(anchor);
	
				Shape shape = new Shape();
	
				JsonElement pictureObj = gson.toJsonTree(pict);
				JsonElement shapeObj = gson.toJsonTree(shape);
	
				myObj.add("pictureInfo", pictureObj);
				myObj.add("shapeInfo", shapeObj);
				out.println(myObj.toString());
	
				out.close();
		 }*/
	}
}