package com.ecopompe.beans;

public class Carburant 
{
	private String nom;
	private TypeCarburant type;
	private float prix;
	private boolean estDisponible;
	
	public Carburant(String nom, TypeCarburant type, float prix, boolean estDisponible)
	{
		this.nom = nom;
		this.type = type;
		this.prix = prix;
		this.estDisponible = estDisponible;
	}

	public String getNom() 
	{
		return nom;
	}

	public void setNom(String nom) 
	{
		this.nom = nom;
	}

	public TypeCarburant getType() 
	{
		return type;
	}

	public void setType(TypeCarburant type) 
	{
		this.type = type;
	}

	public float getPrix() 
	{
		return prix;
	}

	public void setPrix(float prix) 
	{
		this.prix = prix;
	}

	public boolean isEstDisponible() 
	{
		return estDisponible;
	}

	public void setEstDisponible(boolean estDisponible) 
	{
		this.estDisponible = estDisponible;
	}
}
