package com.soulcode.empresa.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.soulcode.empresa.models.Funcionario;


public interface FuncionarioRepository extends JpaRepository<Funcionario,Integer>{

	@Query(value = "SELECT * FROM funcionario WHERE id_cargo = :id_cargo", nativeQuery = true)
	List<Funcionario> fetchByCargo(Integer id_cargo);
	
	@Query(value = "SELECT id_Funcionario, func_nome,func_cidade,cargo.id_cargo,car_nome,car_atribuicao FROM cargo right JOIN funcionario ON funcionario.id_cargo = cargo.id_cargo order by func_nome",nativeQuery = true)
	List<List> funcionariosComCargo();
}
