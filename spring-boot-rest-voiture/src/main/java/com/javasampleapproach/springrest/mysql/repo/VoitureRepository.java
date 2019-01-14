package com.javasampleapproach.springrest.mysql.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javasampleapproach.springrest.mysql.model.Voiture;

public interface VoitureRepository extends JpaRepository<Voiture, Long> {

}
