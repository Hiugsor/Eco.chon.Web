package com.ecopompe.beans;

public class Coordonnees 
{
	// ATTRIBUTS
	private float _latitude;
	private float _longitude;
	
	
	// CONSTRUCTORS
	public Coordonnees()
	{}
	
	public Coordonnees(float latitude, float longitude)
	{
		_latitude = latitude;
		_longitude = longitude;
	}

	
	//GETTERS & SETTERS
	public float getLatitude() 
	{
		return _latitude;
	}

	public void setLatitude(float latitude) 
	{
		this._latitude = latitude;
	}

	public float getLongitude() 
	{
		return _longitude;
	}

	public void setLongitude(float longitude) 
	{
		_longitude = longitude;
	}
}
