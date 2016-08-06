package com.springboot;

public class widget {
	 private String type;

	    private int length;

	    private int height;

	    public widget(String type, int length, int height) {
	        this.type = type;
	        this.length = length;
	        this.height = height;
	    }

	    public String getType() {
	        return type;
	    }

	    public int getLength() {
	        return length;
	    }

	    public int getHeight() {
	        return height;
	    }
}
