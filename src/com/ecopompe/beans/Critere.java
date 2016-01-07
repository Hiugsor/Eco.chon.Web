package com.ecopompe.beans;

public class Critere 
{
	private Adresse adresse;
	private Carburant carburant;
	private int rayon;
	private Point position;
	
	public Critere(Adresse adresse, Point position)
	{
		this.adresse = adresse;
		this.carburant = null;
		this.rayon = 30000;
		this.position = position;
	}
	
	public Critere(Adresse adresse, Carburant carburant, int rayon, Point position)
	{
		this.adresse = adresse;
		this.carburant = carburant;
		this.rayon = rayon;
		this.position = position;
	}
	
	public Adresse getAdresse() 
	{
		return adresse;
	}

	public void setAdresse(Adresse adresse) 
	{
		this.adresse = adresse;
	}

	public Carburant getCarburant() 
	{
		return carburant;
	}

	public void setCarburant(Carburant carburant) 
	{
		this.carburant = carburant;
	}

	public int getRayon() 
	{
		return rayon;
	}

	public void setRayon(int rayon) 
	{
		this.rayon = rayon;
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
