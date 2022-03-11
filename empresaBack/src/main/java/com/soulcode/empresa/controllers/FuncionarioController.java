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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.soulcode.empresa.models.Funcionario;
import com.soulcode.empresa.repositorys.FuncionarioRepository;
import com.soulcode.empresa.services.FuncionarioService;


//anotação referente ao erro de CORS
@CrossOrigin
//anotação para dizer que essa classe é um controller
@RestController
//anotação para dizer que nossa rota será por esse endPoint
@RequestMapping("empresa")
public class FuncionarioController {

	// precisamos fazer a injeção de dependencias do service e do repository
	@Autowired
	private FuncionarioRepository FuncionarioRepository;
	@Autowired
	private FuncionarioService FuncionarioService;

	// anotação do método GetMapping - significa usar o método get do HTTP e mapear
	// para a rota /Funcionario
	@GetMapping("/funcionarios")
	public List<Funcionario> showAllFuncionarios() {
		List<Funcionario> Funcionarios = FuncionarioService.showAllFuncionarios();
		return Funcionarios;
	}

	// anotação com a rota em que conseguiremos acessar as infos desse Funcionario
	@GetMapping("/funcionarios/{id_funcionario}")
	// como é apenas um Funcionario específico o tipo de retorno é ResponseEntity
	// ResponseEntity retorna os dados reais de um registro do BD, retorna uma
	// resposta inteira - incluindo cabeçalho, corpo e status
	// o caractér curinga genérico <?> ele sempre traz uma resposta, seja ela de
	// sucesso ou de erro
	//////////// o pathVariable é para dizer que vai ser passado através do
	// paramêtro da url
	public ResponseEntity<?> showOneFuncionario(@PathVariable Integer id_Funcionario) {
		Funcionario Funcionarios = FuncionarioService.showOneFuncionario(id_Funcionario);
		return ResponseEntity.ok().body(Funcionarios);
	}
	
	@GetMapping("/funcionario/busca-funcionario/{id_cargo}")
	public List<Funcionario> buscarFuncionarioCargo(@PathVariable Integer id_cargo){
		List<Funcionario> funcionario = FuncionarioService.buscarFuncionarioCargo(id_cargo);
		return funcionario;
}
	
	@PutMapping("/funcionarios/{id_funcionario}")
	public ResponseEntity<Void> editarFuncionario(@PathVariable Integer id_Funcionario, @RequestBody Funcionario Funcionarios){
		Funcionarios.setId_Funcionario(id_Funcionario);
		Funcionarios = FuncionarioService.editarFuncionario(Funcionarios);
		return ResponseEntity.noContent().build();
	}

	//sempre que for fazer tratamento de erro esse tratamento de erro deve ser construido na camada do service e no controller
	@PostMapping("/funcionario")
	public ResponseEntity<Funcionario> InserirFuncionario(@RequestParam(value = "cargo") Integer id_cargo, 
			@RequestBody Funcionario Funcionario){
		Funcionario = FuncionarioService.InserirFuncionario(id_cargo, Funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/funcionario/{id}")
				.buildAndExpand(Funcionario.getId_Funcionario()).toUri();
		return ResponseEntity.created(uri).build();
	}
}