package com.soulcode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soulcode.empresa.repositorys.CargoRepository;

import com.soulcode.empresa.models.Supervisor;
import com.soulcode.empresa.models.Cargo;
import com.soulcode.empresa.repositorys.SupervisorRepository;

@Service
public class SupervisorService {

	@Autowired
	private SupervisorRepository supervisorRepository;

	@Autowired
	private CargoService cargoService;

	@Autowired
	private CargoRepository cargoRepository;

	// -------------- INICIO DOS METODOS DE BUSCA OU MOSTRAR SUPERVISORESES
	// --------------\\

	public List<Supervisor> mostrarTodosSupervisores() {
		return supervisorRepository.findAll();
	}

	public Supervisor mostrarUmSupervisor(Integer id_supervisor) {
		Optional<Supervisor> supervisor = supervisorRepository.findById(id_supervisor);
		return supervisor.orElseThrow();
	}

	public Supervisor buscarSupervisorDoCargo(Integer id_cargo) {
		Supervisor supervisor = supervisorRepository.buscarSupervisorDoCargo(id_cargo);
		return supervisor;
	}

	public Supervisor buscarSupervisorPeloNome(String super_nome) {
		Supervisor supervisor = supervisorRepository.fetchByName(super_nome);
		return supervisor;
	}

	public List<Supervisor> SupervisorSemCargo() {
		return supervisorRepository.SupervisorSemCargo();
	}

	// -------------- FIM DOS METODOS DE BUSCA OU MOSTRAR SUPERVISORES
	// --------------\\

	// -------------- INCIO DO METODO INSERIR --------------\\
	public Supervisor inserirSupervisor(Integer id_cargo, Supervisor supervisor) {
		supervisor.setId_supervisor(null);
		if (id_cargo != null) {
			Cargo cargo = cargoService.buscarUmcargo(id_cargo);
			supervisor.setCargo(cargo);
			cargo.setSupervisor(supervisor);
		}
		return supervisorRepository.save(supervisor);
	}

	// -------------- FIM DO METODO INSERIR --------------\\

	// -------------- INCIO DO METODO EDITAR --------------\\
	public Supervisor editarSupervisor(Integer id_cargo, Supervisor supervisor) {

		if (id_cargo != null) {
			Supervisor dadosSuperAntesDaMudanca = mostrarUmSupervisor(supervisor.getId_supervisor());
			Cargo cargoAnterior = dadosSuperAntesDaMudanca.getCargo();
			if (cargoAnterior != null) {
				cargoAnterior.setSupervisor(null);
				cargoRepository.save(cargoAnterior);
			}

			Cargo cargo = cargoService.buscarUmcargo(id_cargo);
			supervisor.setCargo(cargo);
			cargo.setSupervisor(supervisor);
		}
		return supervisorRepository.save(supervisor);
	}

	// -------------- FIM DO METODO EDITAR --------------\\

	public Supervisor salvarFoto(Integer id_supervisor, String caminhoFoto) {
		Supervisor supervisor = mostrarUmSupervisor(id_supervisor);
		supervisor.setSuper_foto(caminhoFoto);
		return supervisorRepository.save(supervisor);
	}
}
