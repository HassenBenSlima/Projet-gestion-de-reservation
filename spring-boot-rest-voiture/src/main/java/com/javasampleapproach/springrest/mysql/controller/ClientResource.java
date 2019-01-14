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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.springrest.mysql.model.Client;
import com.javasampleapproach.springrest.mysql.repo.ClientRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = { "*" }, allowedHeaders = { "*" }, methods = { RequestMethod.DELETE, RequestMethod.POST,
		RequestMethod.PUT, RequestMethod.GET, RequestMethod.HEAD, RequestMethod.OPTIONS })
public class ClientResource {

	@Autowired
	private ClientRepository clientRepository;

	@GetMapping(value = "/clients")
	public ResponseEntity<List<Client>> getClients() {
		List<Client> clients = clientRepository.findAll();

		return ResponseEntity.ok().body(clients);
	}

	@GetMapping(value = "/clients/{id}")
	public ResponseEntity<Client> getClient(@PathVariable Long id) {

		Optional<Client> result = clientRepository.findById(id);

		return ResponseEntity.ok().body(result.get());
	}

	@PostMapping(value = "/clients")
	public ResponseEntity<Client> createClient(@Valid @RequestBody Client client) throws URISyntaxException {

		if (client.getId() != null) {
			throw new RuntimeException();
		}

		Client result = clientRepository.save(client);

		return ResponseEntity.created(new URI("/api/clients/" + result.getId())).body(result);
	}

	@PutMapping(value = "/clients")
	public ResponseEntity<Client> updateClient(@Valid @RequestBody Client client) throws URISyntaxException {

		if (client.getId() == null)
			return createClient(client);

		Client result = clientRepository.save(client);

		return ResponseEntity.ok().body(result);

	}

	@DeleteMapping(value = "/clients/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> deleteClient(@PathVariable Long id) {

		clientRepository.deleteById(id);

		return ResponseEntity.ok().build();
	}

	@GetMapping(value = "/clients/mail")
	public ResponseEntity<Client> getClientByEmail(@RequestParam String email) {
		System.out.println("hassen : " + email);
		Client result = clientRepository.findByEmail(email);
		return ResponseEntity.ok().body(result);
	}

}
