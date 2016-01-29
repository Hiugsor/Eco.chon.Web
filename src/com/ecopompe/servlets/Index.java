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

	public Index() 
    {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
    {   
    	request.setAttribute(Constants.MAIN_PANEL, Constants.PANEL_MAP);
    	this.getServletContext().getRequestDispatcher(Constants.VUE).forward(request, response);
	}
}
