package com.ecopompe.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

import com.bo.Station;
import com.processing.GestionRecherche;

@WebServlet("/ListePompes")
public class ListePompes extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
		
    public ListePompes()
    {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{		
		request.setAttribute(Constants.MAIN_PANEL, Constants.PANEL_STATION_LISTE);
		this.getServletContext().getRequestDispatcher(Constants.VUE).forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		
		HttpServletResponseWrapper responseWrapper = new HttpServletResponseWrapper(response){
	        private final StringWriter sw = new StringWriter();

	        @Override
	        public PrintWriter getWriter() throws IOException {
	            return new PrintWriter(sw);
	        }

	        @Override
	        public String toString() {
	            return sw.toString();
	        }
	    };
				
		GestionRecherche grecherche = new GestionRecherche();
		
		if (request.getParameterMap().containsKey("distance") && request.getParameterMap().containsKey("typeCarburant"))
		{			
			ArrayList<Station> stationsRes = null;
			int distance = Integer.parseInt( request.getParameter("distance"));
			String carburant = request.getParameter("typeCarburant");
			
			response.setContentType("text/html");
			response.setCharacterEncoding("UTF-8");
						
			if(request.getParameterMap().containsKey("adresse"))
			{
				String adresse = request.getParameter("adresse").toString();
				stationsRes = grecherche.recupereStations(adresse, carburant, distance);
			}
			else if(request.getParameterMap().containsKey("latitude") && request.getParameterMap().containsKey("longitude"))
			{
				Double latitude = Double.parseDouble(request.getParameter("latitude"));
				Double longitude = Double.parseDouble(request.getParameter("longitude"));
				
				stationsRes = grecherche.recupereStations(latitude, longitude, carburant, distance);	
			}
				
			if(stationsRes != null)
			{
				request.getSession().setAttribute("stations", stationsRes);
			    
				PrintWriter out = response.getWriter();		
				request.getRequestDispatcher(Constants.PANEL_STATION_LISTE).include(request, responseWrapper);
			    String content = responseWrapper.toString();
			   		
				out.println(content);
				out.close();
			}
			else
			{
				if(request.getSession().getAttribute("stations") != null)
				{
					PrintWriter out = response.getWriter();					
					request.getRequestDispatcher(Constants.PANEL_STATION_LISTE).include(request, responseWrapper);
				    String content = responseWrapper.toString();
				   		
					out.println(content);
					out.close();
				}
			}
	    }
		else
		{
			System.out.println("PARAMETRES NON VALIDES");//TEST
		}		
	}
}
