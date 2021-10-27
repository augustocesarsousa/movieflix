package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.User;

public class UserDTO implements Serializable{

    private static final long serialVersionUID = 1L;
    
    private Long id;

    @NotBlank(message = "Campo obrigatório")
    private String name;

    @Email(message = "Favor entrar com um e-mail válido")
    private String email;

    private Set<RoleDTO> roles = new HashSet<>();
    private List<ReviewDTO> reviews = new ArrayList<>();

    public UserDTO(){

    }

    public UserDTO(Long id,String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public UserDTO(User entity) {
        id = entity.getId();
        name = entity.getName();
        email = entity.getEmail();
        entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
        entity.getReviews().forEach(review -> this.reviews.add(new ReviewDTO(review)));
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<RoleDTO> getRoles() {
        return roles;
    }

	public List<ReviewDTO> getReviews() {
		return reviews;
	}    
    
    
}
