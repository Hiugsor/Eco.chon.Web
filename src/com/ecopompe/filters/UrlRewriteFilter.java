package com.ecopompe.filters;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;



/*


//Servlet Filter implementation class RestrictionFilter

//@WebFilter("/RestrictionFilter")
public class UrlRewriteFilter implements Filter {

	
	
	
	
	
	
	

    //Default constructor. 
    public UrlRewriteFilter() {
        // TODO Auto-generated constructor stub
    }

	
	//@see Filter#destroy()
	public void destroy() {
		// TODO Auto-generated method stub
	}

	
	//@see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException
	{
		HttpServletRequest request = (HttpServletRequest) req;
        String requestURI = request.getRequestURI();

        if (requestURI.endsWith("/listepompes"))
        {
        	String newURI = "?panel_name=listepompes";
            req.getRequestDispatcher(newURI).forward(req, res);
        }
        else if(requestURI.endsWith("/infos"))
        {
        	String newURI = "?panel_name=infos";
            req.getRequestDispatcher(newURI).forward(req, res);
        }
        else
        {
        	chain.doFilter(req, res);
        }
	}


	//@see Filter#init(FilterConfig)
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}
	
} 

*/
