package com.javasampleapproach.springrest.mysql.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Voiture implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Column(name = "marque", nullable = false)
	private String marque;

	@Column(name = "image_url")
	private String imageURL;
	@NotNull
	@Column(name = "description", length = 50)
	private String description;

	@Column(name = "prix")
	private double prix;

	@Column(name = "max_personne")
	private int maxPersonne;

	@Column(name = "max_bagages")
	private int maxBagages;

	@OneToMany(mappedBy = "voiture")
	@JsonIgnore
	private Set<Reservation> reservations = new HashSet<>();

	public Voiture() {
		super();
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the marque
	 */
	public String getMarque() {
		return marque;
	}

	/**
	 * @param marque
	 *            the marque to set
	 */
	public void setMarque(String marque) {
		this.marque = marque;
	}

	/**
	 * @return the imageURL
	 */
	public String getImageURL() {
		return imageURL;
	}

	/**
	 * @param imageURL
	 *            the imageURL to set
	 */
	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	/**
	 * @return the reservations
	 */
	public Set<Reservation> getReservations() {
		return reservations;
	}

	/**
	 * @param reservations
	 *            the reservations to set
	 */
	public void setReservations(Set<Reservation> reservations) {
		this.reservations = reservations;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public int getMaxPersonne() {
		return maxPersonne;
	}

	public void setMaxPersonne(int maxPersonne) {
		this.maxPersonne = maxPersonne;
	}

	public int getMaxBagages() {
		return maxBagages;
	}

	public void setMaxBagages(int maxBagages) {
		this.maxBagages = maxBagages;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Voiture other = (Voiture) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
