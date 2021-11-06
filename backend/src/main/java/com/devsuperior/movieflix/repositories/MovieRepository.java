package com.devsuperior.movieflix.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.movieflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

	@Query("SELECT obj "
			+ "FROM Movie obj "
			+ "WHERE obj.genre.id IN :genreId "
			+ "ORDER BY obj.title ")
	Page<Movie> findByGenreId(Long genreId, Pageable pageable);
	
	@Query("SELECT obj "
			+ "FROM Movie obj "
			+ "ORDER BY obj.title ")
	Page<Movie> findAllOrderByTitle(Pageable pageable);
	
	@Query("SELECT obj FROM Movie obj JOIN FETCH obj.genre WHERE obj = :movie")
	List<Movie> findMoviessWithGenres(Movie movie);
}
