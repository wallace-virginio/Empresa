package com.soulcode.empresa.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.soulcode.empresa.models.Cargo;
import com.soulcode.empresa.services.CargoService;

@CrossOrigin
@RestController
@RequestMapping("empresa")
public class CargoController {

	@Autowired
	private CargoService cargoService;
	
	@GetMapping("/cargo")
	public List<Cargo> mostrarTodoscargos(){
		List<Cargo> cargo = cargoService.mostrarTodoscargos();
		return cargo;
	}
	
	@GetMapping("/cargo/{id_cargo}")
	public ResponseEntity<Cargo> buscarUmcargo(@PathVariable Integer id_cargo){
		Cargo cargo = cargoService.showOnecargo(id_cargo);
		return ResponseEntity.ok().body(cargo);
	}
	
	@PostMapping("/cargo")
	//VOID para não retornar e cargo para retornar
	public ResponseEntity<Void> cadastrarcargo(@RequestBody Cargo cargo){
		cargo = cargoService.cadastrarcargo(cargo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(cargo.getId_cargo()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("cargo/{id_cargo}")
	public ResponseEntity<Cargo> editarcargo(@PathVariable Integer id_cargo, @RequestBody Cargo cargo){
		cargo.setId_cargo(id_cargo);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/cargo/{id_cargo}")
	public ResponseEntity<Void> deletarUmcargo(@PathVariable Integer id_cargo){
		cargoService.deletarUmcargo(id_cargo);
		return ResponseEntity.noContent().build();
	}
	
	
}
