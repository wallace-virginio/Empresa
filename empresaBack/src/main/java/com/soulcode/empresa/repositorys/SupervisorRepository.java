package com.soulcode.empresa.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.soulcode.empresa.models.Supervisor;


public interface SupervisorRepository extends JpaRepository<Supervisor, Integer>{
	
	@Query(value="SELECT * FROM supervisor WHERE id_cargo = :id_cargo", nativeQuery = true)
	Supervisor buscarSupervisorDoCargo(Integer id_cargo);
	
	@Query(value="SELECT * FROM supervisor WHERE id_cargo is null", nativeQuery = true)
	List<Supervisor> SupervisorSemCargo();
	
	@Query(value = "SELECT * FROM supervisor WHERE super_nome = :super_nome", nativeQuery = true)
	Supervisor fetchByName(String super_nome);
}
