package com.soulcode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.soulcode.empresa.models.Cargo;
import com.soulcode.empresa.repositorys.CargoRepository;

@Service
public class CargoService {

	@Autowired
	private CargoRepository cargoRepository;
	
	public List<Cargo> mostrarTodoscargos(){
		return cargoRepository.findAll();
	}
	
	public Cargo buscarUmcargo(Integer id_cargo) {
		Optional<Cargo> cargo = cargoRepository.findById(id_cargo);
				return cargo.orElseThrow();
	}

	public Cargo showOnecargo(Integer id_cargo) {
		Optional<Cargo> cargo = cargoRepository.findById(id_cargo);
		return cargo.orElseThrow();
	}
	
	public Cargo cadastrarcargo(Cargo cargo) {
	//é uma forma de segurança para não setar o id
		cargo.setId_cargo(null);
		return cargoRepository.save(cargo);
	}
	
	public Cargo editarcargo(Cargo cargo) {
		buscarUmcargo(cargo.getId_cargo());
		return cargoRepository.save(cargo);
	}
	
	public void deletarUmcargo(Integer id_cargo) {
		cargoRepository.deleteById(id_cargo);
	}
}
