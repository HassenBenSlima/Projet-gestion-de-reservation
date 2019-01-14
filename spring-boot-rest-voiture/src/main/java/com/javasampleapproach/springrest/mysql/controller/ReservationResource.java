package com.javasampleapproach.springrest.mysql.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.springrest.mysql.model.Reservation;
import com.javasampleapproach.springrest.mysql.repo.ReservationRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = { "*" }, allowedHeaders = { "*" }, methods = { RequestMethod.DELETE, RequestMethod.POST,
		RequestMethod.PUT, RequestMethod.GET, RequestMethod.HEAD, RequestMethod.OPTIONS })
public class ReservationResource {

	@Autowired
	private ReservationRepository reservationRepository;

	@GetMapping(value = "/reservations")
	public ResponseEntity<List<Reservation>> getReservations() {
		List<Reservation> results = reservationRepository.findAll();

		return ResponseEntity.ok().body(results);
	}

	@GetMapping(value = "/reservations/{id}")
	public ResponseEntity<Reservation> getReservation(@PathVariable Long id) {

		Optional<Reservation> result = reservationRepository.findById(id);

		return ResponseEntity.ok().body(result.get());
	}

	@PostMapping(value = "/reservations")
	public ResponseEntity<Reservation> createReservation(@Valid @RequestBody Reservation reservation)
			throws URISyntaxException {

		if (reservation.getId() != null) {
			throw new RuntimeException();
		}

		Reservation result = reservationRepository.save(reservation);

		return ResponseEntity.created(new URI("/api/reservations/" + result.getId())).body(result);
	}

	@PutMapping(value = "/reservations")
	public ResponseEntity<Reservation> updateReservation(@Valid @RequestBody Reservation reservation)
			throws URISyntaxException {

		if (reservation.getId() == null)
			return createReservation(reservation);

		Reservation result = reservationRepository.save(reservation);

		return ResponseEntity.ok().body(result);

	}

	@DeleteMapping(value = "/reservations/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> deleteReservation(@PathVariable Long id) {

		reservationRepository.deleteById(id);

		return ResponseEntity.ok().build();
	}
}
