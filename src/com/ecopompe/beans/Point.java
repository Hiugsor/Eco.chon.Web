package com.ecopompe.beans;
import java.awt.*;

public class Point 
{
	private Coordonnees _coordonnee;
	private Color _couleur;
	
	public Point()
	{}
	
	public Point(Coordonnees coordonnee, Color couleur)
	{
		_coordonnee = coordonnee;
		_couleur = couleur;	
	}
	
	// GETTERS & SETTERS
	public Coordonnees getCoordonnee() {
		return _coordonnee;
	}
	
	public void setCoordonnee(Coordonnees coordonnee) {
		this._coordonnee = coordonnee;
	}
	
	public Color getCouleur() {
		return _couleur;
	}
	
	public void setCouleur(Color couleur) {
		this._couleur = couleur;
	}
}
