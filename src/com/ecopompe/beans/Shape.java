package com.ecopompe.beans;

public class Shape
{
	
	private int[] _coords;
	private String _type;
	
	public Shape()
	{
		set_coords(new int[]{1,1,1,55,55,55,55,1});
		set_type("poly");
	}

	public int[] get_coords() {
		return _coords;
	}

	public void set_coords(int[] _coords) {
		this._coords = _coords;
	}

	public String get_type() {
		return _type;
	}

	public void set_type(String _type) {
		this._type = _type;
	}
}
