package com.ecopompe.beans;

import java.util.*;

public class Station 
{
	private Adresse adresse;
	private String nom;
	private String enseigne;
	private List<Carburant> carburants;
	private List<TypeService> services;
	private String heureOuverture;
	private String heureFermeture;
	private List<String> joursFermeture;
	private TypeRoute emplacement;
	
	public Station(Adresse adresse, String nom, String enseigne, List<Carburant> carburants, List<TypeService> services, String heureOuverture, String heureFermeture, List<String> joursFermeture,	TypeRoute emplacement)
	{
		this.adresse = adresse;
		this.nom = nom;
		this.enseigne = enseigne;
		this.carburants = carburants;
		this.services = services;
		this.heureOuverture = heureOuverture;
		this.heureFermeture = heureFermeture;
		this.joursFermeture = joursFermeture;
		this.emplacement = emplacement;
	}

	public Adresse getAdresse() 
	{
		return adresse;
	}

	public void setAdresse(Adresse adresse) 
	{
		this.adresse = adresse;
	}

	public String getNom() 
	{
		return nom;
	}

	public void setNom(String nom) 
	{
		this.nom = nom;
	}

	public String getEnseigne()
	{
		return enseigne;
	}

	public void setEnseigne(String enseigne) 
	{
		this.enseigne = enseigne;
	}

	public List<Carburant> getCarburants() 
	{
		return carburants;
	}

	public void setCarburants(List<Carburant> carburants) 
	{
		this.carburants = carburants;
	}

	public List<TypeService> getServices() 
	{
		return services;
	}

	public void setServices(List<TypeService> services) 
	{
		this.services = services;
	}

	public String getHeureOuverture() 
	{
		return heureOuverture;
	}

	public void setHeureOuverture(String heureOuverture) 
	{
		this.heureOuverture = heureOuverture;
	}

	public String getHeureFermeture() 
	{
		return heureFermeture;
	}

	public void setHeureFermeture(String heureFermeture) 
	{
		this.heureFermeture = heureFermeture;
	}

	public List<String> getJoursFermeture() 
	{
		return joursFermeture;
	}

	public void setJoursFermeture(List<String> joursFermeture) 
	{
		this.joursFermeture = joursFermeture;
	}

	public TypeRoute getEmplacement() 
	{
		return emplacement;
	}

	public void setEmplacement(TypeRoute emplacement) 
	{
		this.emplacement = emplacement;
	}
}
