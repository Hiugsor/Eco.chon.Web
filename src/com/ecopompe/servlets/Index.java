package com.ecopompe.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


//@WebServlet("/Index")
public class Index extends HttpServlet 
{
	private static final long serialVersionUID = 1L;
	public static final String VUE = "/WEB-INF/VIEWS/index.jsp";
	public static final String MAIN_PANEL="main_panel";
	
	public static final String PANEL_MAP ="/WEB-INF/VIEWS/INCLUDES/map.jsp"; 
	public static final String PANEL_STATION_LISTE = "/WEB-INF/VIEWS/INCLUDES/listepompes.jsp"; 
	public static final String PANEL_INFOS = "/WEB-INF/VIEWS/INCLUDES/infos.jsp"; 
       
    public Index() 
    {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {	
    	if (request.getParameter("panel_name")!=null)
    	{
    		switch (request.getParameter("panel_name")) {
			case "map":
				request.setAttribute(MAIN_PANEL, PANEL_MAP);
				break;
	
			case "listepompes":
				request.setAttribute(MAIN_PANEL, PANEL_STATION_LISTE);
				break;
								
			case "infos":
				request.setAttribute(MAIN_PANEL, PANEL_INFOS);
				break;
						
			default:
				request.setAttribute(MAIN_PANEL, PANEL_MAP);
				break;
    		}
    	}
		else
		{
			request.setAttribute(MAIN_PANEL, PANEL_MAP);
		}	
    	
    	this.getServletContext().getRequestDispatcher(VUE).forward(request, response);
	}
}
