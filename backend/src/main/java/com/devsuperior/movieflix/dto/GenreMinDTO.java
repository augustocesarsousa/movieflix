package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Genre;

public class GenreMinDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;

	public GenreMinDTO() {
		
	}

	public GenreMinDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public GenreMinDTO(Genre entity) {
		id = entity.getId();
		name = entity.getName();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
