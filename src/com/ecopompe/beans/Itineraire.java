package com.ecopompe.beans;
import java.util.*;

public class Itineraire 
{
	private Adresse depart;
	private Adresse arrivee;
	private Date duree;
	private float distance;
	
	public Itineraire(Adresse depart, Adresse arrivee, Date duree, float distance)
	{
		this.depart = depart;
		this.arrivee = arrivee;
		this.duree = duree;
		this.distance = distance;
	}

	public Adresse getDepart() 
	{
		return depart;
	}

	public void setDepart(Adresse depart) 
	{
		this.depart = depart;
	}

	public Adresse getArrivee() {
		return arrivee;
	}

	public void setArrivee(Adresse arrivee) 
	{
		this.arrivee = arrivee;
	}

	public Date getDuree() 
	{
		return duree;
	}

	public void setDuree(Date duree) 
	{
		this.duree = duree;
	}

	public float getDistance() 
	{
		return distance;
	}

	public void setDistance(float distance) 
	{
		this.distance = distance;
	}
}
