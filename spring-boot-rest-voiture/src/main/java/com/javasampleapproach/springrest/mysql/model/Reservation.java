package com.javasampleapproach.springrest.mysql.model;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "reservation")
public class Reservation implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "date_reservation")
	private ZonedDateTime dateReservation;
	@Column(name = "lieu_destination")
	private String lieuDestination;

	@Column(name = "lieu_rdv")
	private String lieuRDV;

	@Column(name = "count_of_passenger")
	private int countOfPassenger;

	@Column(name = "count_of_luggage")
	private int countOfLuggage;

	@ManyToOne
	private Voiture voiture;

	@ManyToOne
	private Client client;

	public Reservation() {
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
	 * @return the dateReservation
	 */
	public ZonedDateTime getDateReservation() {
		return dateReservation;
	}

	/**
	 * @param dateReservation
	 *            the dateReservation to set
	 */
	public void setDateReservation(ZonedDateTime dateReservation) {
		this.dateReservation = dateReservation;
	}

	/**
	 * @return the voiture
	 */
	public Voiture getVoiture() {
		return voiture;
	}

	/**
	 * @param voiture
	 *            the voiture to set
	 */
	public void setVoiture(Voiture voiture) {
		this.voiture = voiture;
	}

	/**
	 * @return the client
	 */
	public Client getClient() {
		return client;
	}

	/**
	 * @param client
	 *            the client to set
	 */
	public void setClient(Client client) {
		this.client = client;
	}

	public String getLieuDestination() {
		return lieuDestination;
	}

	public void setLieuDestination(String lieuDestination) {
		this.lieuDestination = lieuDestination;
	}

	public String getLieuRDV() {
		return lieuRDV;
	}

	public void setLieuRDV(String lieuRDV) {
		this.lieuRDV = lieuRDV;
	}

	public int getCountOfPassenger() {
		return countOfPassenger;
	}

	public void setCountOfPassenger(int countOfPassenger) {
		this.countOfPassenger = countOfPassenger;
	}

	public int getCountOfLuggage() {
		return countOfLuggage;
	}

	public void setCountOfLuggage(int countOfLuggage) {
		this.countOfLuggage = countOfLuggage;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		return Objects.hashCode(id);
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
		Reservation other = (Reservation) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
