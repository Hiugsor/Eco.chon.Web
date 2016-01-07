package com.ecopompe.beans;

public class Recherche 
{
	private Critere critere;
	
	public Recherche(Critere critere)
	{
		this.critere = critere;
	}

	public Critere getCritere() 
	{
		return critere;
	}

	public void setCritere(Critere critere) 
	{
		this.critere = critere;
	}
}
