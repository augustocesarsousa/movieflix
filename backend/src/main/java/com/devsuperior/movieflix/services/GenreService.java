package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.movieflix.dto.GenreMinDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;

@Service
public class GenreService {
	
	@Autowired
	private GenreRepository repository;

	public List<GenreMinDTO> findAll(){
		List<Genre> list = repository.findAll();
		return list.stream().map(x -> new GenreMinDTO(x)).collect(Collectors.toList());
	}
}
