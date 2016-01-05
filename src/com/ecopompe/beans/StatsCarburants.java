package com.ecopompe.beans;

public class StatsCarburants 
{
	private float moyenne;
	private Carburant carburant;
	
	public StatsCarburants(float moyenne, Carburant carburant)
	{
		this.moyenne = moyenne;
		this.carburant = carburant;
	}

	public float getMoyenne() 
	{
		return moyenne;
	}

	public void setMoyenne(float moyenne) 
	{
		this.moyenne = moyenne;
	}

	public Carburant getCarburant() 
	{
		return carburant;
	}

	public void setCarburant(Carburant carburant) 
	{
		this.carburant = carburant;
	}
}
