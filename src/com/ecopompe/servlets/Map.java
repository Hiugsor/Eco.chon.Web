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
import com.bo.Point;
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

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setAttribute(Constants.MAIN_PANEL, Constants.PANEL_MAP);	
		this.getServletContext().getRequestDispatcher(Constants.VUE).forward(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		GestionRecherche grecherche = new GestionRecherche();
		Coordonnees myCoord = new Coordonnees();
				
		if (request.getParameterMap().containsKey("latitude") && request.getParameterMap().containsKey("longitude") && request.getParameterMap().containsKey("distance") && request.getParameterMap().containsKey("typeCarburant"))
		{
			ArrayList<Station> stationsRes = null;
			int distance = Integer.parseInt( request.getParameter("distance"));
			String carburant = request.getParameter("typeCarburant").toString();
			
			response.setContentType("text/html");
			response.setCharacterEncoding("UTF-8");

			if(request.getParameterMap().containsKey("adresse"))
			{
				String adresse = request.getParameter("adresse").toString();
				 
				// Appel de la fonction GestionRecherche.recupereStation(RUE,CP,VILLE,NOM_CARBURANT,RAYON)
				stationsRes = grecherche.recupereStations(adresse, carburant, distance);
			}
			else
			{
				Double latitude = Double.parseDouble(request.getParameter("latitude").toString());
				Double longitude = Double.parseDouble(request.getParameter("longitude").toString());
												
				stationsRes = grecherche.recupereStations(latitude, longitude, carburant, distance);	
			}						 
						
			if(stationsRes != null)
			{
				request.getSession().setAttribute("stations", stationsRes);
							
				Picture pictGreen = new Picture();
				pictGreen.setUrl(Constants.MARKER_ICON_GREEN);
				
				Picture pictOrange = new Picture();
				pictOrange.setUrl(Constants.MARKER_ICON_ORANGE);
				
				Picture pictRed = new Picture();
				pictRed.setUrl(Constants.MARKER_ICON_RED);
							
				Point size = new Point();
				myCoord = new Coordonnees();
				myCoord.setLatitude(40.0);
				myCoord.setLongitude(40.0);
				size.setCoordonnee(myCoord);
				pictGreen.setSize(size);
				pictOrange.setSize(size);
				pictRed.setSize(size);
				
				Point origine = new Point();
				myCoord = new Coordonnees();
				myCoord.setLatitude(0.0);
				myCoord.setLongitude(0.0);
				origine.setCoordonnee(myCoord);
				pictGreen.setOrigin(origine);
				pictOrange.setOrigin(origine);
				pictRed.setOrigin(origine);
				
				Point anchor = new Point();
				myCoord = new Coordonnees();
				myCoord.setLatitude(0.0);
				myCoord.setLongitude(55.0);
				anchor.setCoordonnee(myCoord);
				pictGreen.setAnchor(anchor);
				pictOrange.setAnchor(anchor);
				pictRed.setAnchor(anchor);
			
				Shape shape = new Shape();
								
				PrintWriter out = response.getWriter();
				Gson gson = new Gson();
				JsonObject myObj = new JsonObject();
			 
				JsonElement stationArrayObj = gson.toJsonTree(stationsRes);
				JsonElement greenPig = gson.toJsonTree(pictGreen);
				JsonElement orangePig = gson.toJsonTree(pictOrange);
				JsonElement redPig = gson.toJsonTree(pictRed);
				JsonElement shapeObj = gson.toJsonTree(shape);
				
				myObj.add("stationList",  stationArrayObj);
				myObj.add("greenPicture",  greenPig);
				myObj.add("orangePicture",  orangePig);
				myObj.add("redPicture",  redPig);
				myObj.add("shapeInfo",  shapeObj);
	
				out.println(myObj.toString());
				out.close();
			}
	     }
	}
}