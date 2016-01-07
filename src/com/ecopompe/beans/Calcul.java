package com.ecopompe.beans;
import java.awt.*;
import java.util.List;

public final class Calcul 
{
	private Calcul() { }
	
	public static Perimetre calculPerimetre(int rayon, Point point)         // Fonction à implémenter !!
	{
		Point pointInfD = new Point(new Coordonnees((float)45.159542, (float)3.5162458), Color.green);
		Perimetre perim = new Perimetre(point, pointInfD);
		
		return perim;
	}
	
	public static List<Station> filtreParDistance(int distance, List<Station> stations, String filtre)       // Fonction à implémenter !!
	{
		return stations;
	}
}
