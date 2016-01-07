package com.ecopompe.beans;

public class Adresse 
{
	private String rue;
	private String codepostal;
	private String ville;
	private Point position;
	
	public Adresse(String rue, String codepostal, String ville, Point position)
	{
		this.rue = rue;
		this.codepostal = codepostal;
		this.ville = ville;
		this.position = position;
	}

	public String getRue() 
	{
		return rue;
	}

	public void setRue(String rue) 
	{
		this.rue = rue;
	}

	public String getCodepostal() 
	{
		return codepostal;
	}

	public void setCodepostal(String codepostal) 
	{
		this.codepostal = codepostal;
	}

	public String getVille() 
	{
		return ville;
	}

	public void setVille(String ville) 
	{
		this.ville = ville;
	}

	public Point getPosition() 
	{
		return position;
	}

	public void setPosition(Point position) 
	{
		this.position = position;
	}
}
