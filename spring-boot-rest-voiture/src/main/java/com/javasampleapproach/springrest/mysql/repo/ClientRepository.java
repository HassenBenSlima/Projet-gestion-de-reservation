package com.javasampleapproach.springrest.mysql.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javasampleapproach.springrest.mysql.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
	Client findByEmail(String email);
}
