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

import com.javasampleapproach.springrest.mysql.model.Voiture;
import com.javasampleapproach.springrest.mysql.repo.VoitureRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = { "*" }, allowedHeaders = { "*" }, methods = { RequestMethod.DELETE, RequestMethod.POST,
		RequestMethod.PUT, RequestMethod.GET, RequestMethod.HEAD, RequestMethod.OPTIONS })
public class VoitureResource {

	@Autowired
	private VoitureRepository voitureRepository;

	@GetMapping(value = "/voitures")
	public ResponseEntity<List<Voiture>> getVoitures() {
		List<Voiture> results = voitureRepository.findAll();

		return ResponseEntity.ok().body(results);
	}

	@GetMapping(value = "/voitures/{id}")
	public ResponseEntity<Voiture> getVoiture(@PathVariable Long id) {

		Optional<Voiture> result = voitureRepository.findById(id);

		return ResponseEntity.ok().body(result.get());
	}

	@PostMapping(value = "/voitures")
	public ResponseEntity<Voiture> createVoiture(@Valid @RequestBody Voiture reservation) throws URISyntaxException {

		if (reservation.getId() != null) {
			throw new RuntimeException();
		}

		Voiture result = voitureRepository.save(reservation);

		return ResponseEntity.created(new URI("/api/reservations/" + result.getId())).body(result);
	}

	@PutMapping(value = "/voitures")
	public ResponseEntity<Voiture> updateVoiture(@Valid @RequestBody Voiture reservation) throws URISyntaxException {

		if (reservation.getId() == null)
			return createVoiture(reservation);

		Voiture result = voitureRepository.save(reservation);

		return ResponseEntity.ok().body(result);

	}

	@DeleteMapping(value = "/voitures/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> deleteVoiture(@PathVariable Long id) {

		voitureRepository.deleteById(id);

		return ResponseEntity.ok().build();
	}
}
