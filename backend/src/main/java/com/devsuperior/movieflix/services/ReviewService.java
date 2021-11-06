package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Review entity = new Review();
		String email = SecurityContextHolder.getContext().getAuthentication().getName();
		User user = userRepository.findByEmail(email);
		copyDtoToEntity(dto, entity, user);
		entity = repository.save(entity);
		return new ReviewDTO(entity);
	}
	
	public List<ReviewDTO> findReviewsByMovieId(Long movieId){
		List<Review> list = repository.findReviewsByMovieId(movieId);
		return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}

	private void copyDtoToEntity(ReviewDTO dto, Review entity, User user) {
		entity.setText(dto.getText());
		entity.setMovie(new Movie(dto.getMovieId()));
		entity.setUser(user);
	}
}
