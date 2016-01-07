package com.ecopompe.beans;
import java.util.*;

public class Stats
{
	private float moyenne;
	
	public Stats()
	{
		this.moyenne = 0;
	}
	
	public Stats(float moyenne)
	{
		this.moyenne = moyenne;
	}
	
	public float getMoyenne() 
	{
		return moyenne;
	}

	public void setMoyenne(float moyenne) 
	{
		this.moyenne = moyenne;
	}
	
	public List<StatsCarburants> recupererMoyenneNat(List<Station> stations)    // Fonction à implémenter !!
	{
		List<StatsCarburants> statcarb = new ArrayList<StatsCarburants>();
		
		return statcarb;
	}
	
	public List<StatsCarburants> recupererMoyennePerimetre(List<Station> stations)  // Fonction à implémenter !!
	{
		List<StatsCarburants> statcarb = new ArrayList<StatsCarburants>();
		
		return statcarb;
	}
}
