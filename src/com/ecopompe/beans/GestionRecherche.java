package com.ecopompe.beans;
import java.util.*;

public class GestionRecherche 
{
	private List<Station> resultat;
	
	public GestionRecherche(List<Station> resultat)
	{
		this.resultat = resultat;
	}

	public List<Station> getResultat() 
	{
		return resultat;
	}

	public void setResultat(List<Station> resultat) 
	{
		this.resultat = resultat;
	}
	
	public Point geolocalise(Recherche recherche)
	{
		return recherche.getCritere().getAdresse().getPosition();  // à revoir !!
	}
}
