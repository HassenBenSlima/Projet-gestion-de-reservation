package com.javasampleapproach.springrest.mysql.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javasampleapproach.springrest.mysql.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
