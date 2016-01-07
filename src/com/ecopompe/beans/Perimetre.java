package com.ecopompe.beans;

public class Perimetre 
{
	private Point sommetSupG;
	private Point sommetInfD;
	
	public Perimetre(Point sommetSupG, Point sommetInfD)
	{
		this.sommetSupG = sommetSupG;
		this.sommetInfD = sommetInfD;
	}

	public Point getSommetSupG() 
	{
		return sommetSupG;
	}

	public void setSommetSupG(Point sommetSupG)
	{
		this.sommetSupG = sommetSupG;
	}

	public Point getSommetInfD() 
	{
		return sommetInfD;
	}

	public void setSommetInfD(Point sommetInfD) 
	{
		this.sommetInfD = sommetInfD;
	}
}
