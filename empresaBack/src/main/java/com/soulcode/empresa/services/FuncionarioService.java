package com.soulcode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soulcode.empresa.models.Funcionario;
import com.soulcode.empresa.models.Cargo;
import com.soulcode.empresa.repositorys.FuncionarioRepository;
import com.soulcode.empresa.services.exceptions.ObjectNotFoundException;


//anotação que essa classe é um serviço
@Service
public class FuncionarioService {
	

	//fazendo a injeção de dependência
	@Autowired
	private FuncionarioRepository FuncionarioRepository;
	
	@Autowired
	private CargoService cargoService;
	
	//o primeiro serviço que vamos implementar é a listagem de todos os Funcionarios cadastrados
	public List<Funcionario> showAllFuncionarios(){
		//ao acessar o FuncionarioRepository temos acesso as métodos do JPA como o findAll()
		return FuncionarioRepository.findAll();
	}
	
	//o segundo serviço que vamos implementar é listar apenas um Funcionario através do ID dele (ra_Funcionario)
	//retorno do tipo Optional - evita o erro de new point exception. Verifica se o Funcionario existe no BD, se não, lança uma exceção
	public Funcionario showOneFuncionario(Integer ra_Funcionario) {
		Optional<Funcionario> Funcionarios = FuncionarioRepository.findById(ra_Funcionario);
		return Funcionarios.orElseThrow();
	}
	
	//o terceiro serviço que vamos implementar é o POST, mais complicado até agora
//	public Funcionarios insertFuncionario(Funcionarios Funcionarios) {
//		return FuncionarioRepository.save(Funcionarios);
//	}
	
	//quarto serviço que vamos implementar é o DELETE
	public void deleteFuncionario(Integer id_Funcionario) {
		FuncionarioRepository.deleteById(id_Funcionario);
	}
	
	public Funcionario editarFuncionario(Funcionario Funcionarios) {
		showOneFuncionario(Funcionarios.getId_Funcionario());
		return FuncionarioRepository.save(Funcionarios);
	}
	
	public Funcionario BuscarUmFuncionario(Integer id_Funcionario) {
		Optional<Funcionario> Funcionario = FuncionarioRepository.findById(id_Funcionario);
		return Funcionario.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não cadastrado! O ID procurado foi.."+ id_Funcionario));
	}
	
	public Funcionario InserirFuncionario(Integer id_cargo, Funcionario Funcionario) {
		Funcionario.setId_Funcionario(null);
		//cargo cargo = cargoService.buscarUmacargo(id_cargo);
	//	Funcionario.setcargo(cargo);
		return FuncionarioRepository.save(Funcionario);
	}
	
	public List<Funcionario> buscarFuncionarioCargo(Integer id_cargo){
		List<Funcionario> funcionario = FuncionarioRepository.fetchByCargo(id_cargo);
		return funcionario;
	}
	
}