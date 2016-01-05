package com.ecopompe.servlets;

import java.awt.Color;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ecopompe.beans.Coordonnees;
import com.ecopompe.beans.Picture;
import com.ecopompe.beans.Point;
import com.ecopompe.beans.Shape;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;


@WebServlet("/Map")
public class Map extends HttpServlet 
{
	private static final long serialVersionUID = 1L;
	public static final String VUE = "/WEB-INF/map.jsp";
	public static final String MARKER_ICON = "img/Logo_EcoPomp40.png";
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		this.getServletContext().getRequestDispatcher(VUE).forward(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		//String latitude = request.getParameter("latitude");
		//String longitude = request.getParameter("longitude");
		
		PrintWriter out = response.getWriter();
		Gson gson = new Gson();
        JsonObject myObj = new JsonObject();
		
		Picture pict = new Picture();
		pict.setUrl(MARKER_ICON);
		pict.setSize(new Point(new Coordonnees(40,40),new Color(3691688)));
		pict.setOrigin(new Point(new Coordonnees(0,0),new Color(0)));
		pict.setAnchor(new Point(new Coordonnees(0,55),new Color(0)));
		
		
		Shape shape = new Shape();

		JsonElement pictureObj = gson.toJsonTree(pict);
		JsonElement shapeObj = gson.toJsonTree(shape);
		
		myObj.add("pictureInfo", pictureObj);
		myObj.add("shapeInfo", shapeObj);
        out.println(myObj.toString());

        out.close();		
	}
}
