package com.soulcode.empresa.controllers;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.soulcode.empresa.models.Supervisor;
import com.soulcode.empresa.services.SupervisorService;

@CrossOrigin
@RestController
@RequestMapping("empresa")
public class SupervisorController {

	@Autowired
	private SupervisorService supervisorService;

	// -------------- INICIO DOS METODOS DE BUSCA OU MOSTRAR PROFESSORES
	// --------------\\

	@GetMapping("/supervisor")
	public List<Supervisor> mostrarTodosSupervisores() {
		List<Supervisor> supervisor = supervisorService.mostrarTodosSupervisores();
		return supervisor;
	}

	@GetMapping("/supervisor/{id_supervisor}")
	public ResponseEntity<Supervisor> mostrarUmSupervisor(@PathVariable Integer id_supervisor) {
		Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_supervisor);
		return ResponseEntity.ok().body(supervisor);
	}

	@GetMapping("/supervisor-cargo/{id_cargo}")
	public ResponseEntity<Supervisor> buscarSupervisorDoCargo(@PathVariable Integer id_cargo) {
		Supervisor supervisor = supervisorService.buscarSupervisorDoCargo(id_cargo);
		return ResponseEntity.ok().body(supervisor);
	}

	@GetMapping("/supervisorSemCargo")
	public List<Supervisor> supervisorSemCargo() {
		List<Supervisor> supervisor = supervisorService.SupervisorSemCargo();
		return supervisor;
	}

	@GetMapping("/supervisor-nome/{super_nome}")
	public ResponseEntity<Supervisor> buscarSupervisorPeloNome(@PathVariable String super_nome) {
		Supervisor supervisor = supervisorService.buscarSupervisorPeloNome(super_nome);
		return ResponseEntity.ok().body(supervisor);
	}

	// -------------- FIM DOS METODOS DE BUSCA OU MOSTRAR PROFESSORES
	// --------------\\

	// -------------- INICIO DO METODO DE INSERIR --------------\\

	@PostMapping("/supervisor")
	public ResponseEntity<Supervisor> inserirSupervisor(
			@RequestParam(value = "cargo", required = false) Integer id_cargo, @RequestBody Supervisor supervisor) {
		supervisor = supervisorService.inserirSupervisor(id_cargo, supervisor);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(supervisor.getId_supervisor()).toUri();
		return ResponseEntity.created(uri).build();
	}

	// -------------- FIM DO METODO DE INSERIR --------------\\

	// -------------- INICIO DO METODO DE EDITAR --------------\\

	@PutMapping("/supervisor/{id_supervisor}")
	public ResponseEntity<Supervisor> editarSupervisor(
			@RequestParam(value = "cargo", required = false) Integer id_cargo, @PathVariable Integer id_supervisor,
			@RequestBody Supervisor supervisor) {
		supervisor.setId_supervisor(id_supervisor);
		supervisor = supervisorService.editarSupervisor(id_cargo, supervisor);

		return ResponseEntity.noContent().build();
	}

	// -------------- FIM DO METODO DE EDITAR --------------\\

}
