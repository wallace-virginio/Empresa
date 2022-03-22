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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.soulcode.empresa.models.Bonificacao;
import com.soulcode.empresa.services.BonificacaoService;


@CrossOrigin
@RestController
@RequestMapping("empresa")
public class BonificacaoController {

	@Autowired
	private BonificacaoService bonificacaoService;

	@GetMapping("/funcionario/bonificacao")
	public List<Bonificacao> BuscarTodasBonificacoes() {
		List<Bonificacao> bonificacao = bonificacaoService.buscarTodasBonificacoes();
		return bonificacao;
	}

	@GetMapping("/funcionario/bonificacao/{codigo}")
	public ResponseEntity<Bonificacao> buscarUmaBonificacao(@PathVariable Integer codigo) {
		Bonificacao bonificacao = bonificacaoService.buscarUmaBonificacao(codigo);
		return ResponseEntity.ok().body(bonificacao);
	}

	@GetMapping("/funcionario/BonificacoesFuncionario/{id_funcionario}")
	public List<Bonificacao> buscarBonificacoesDoFuncionario(@PathVariable Integer id_Funcionario) {
		List<Bonificacao> bonificacao = bonificacaoService.buscarBonificacoesDoFuncionario(id_Funcionario);
		return bonificacao;
	}

	@PostMapping("/funcionario/bonificacao/{id_Funcionario}")
	public ResponseEntity<Bonificacao> inserirBonificacao(@RequestBody Bonificacao bonificacao,
			@PathVariable Integer id_Funcionario) {
		bonificacao = bonificacaoService.inserirBonificacao(bonificacao, id_Funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(bonificacao.getCodigo())
				.toUri();
		return ResponseEntity.created(uri).build();
	}

	@PutMapping("/funcionario/pagarBonificacao/{codigo}")
	public ResponseEntity<Bonificacao> pagarBonificacao(@PathVariable Integer codigo) {
		bonificacaoService.pagarBonificacao(codigo);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("/funcionario/cancelarBonificacao/{codigo}")
	public ResponseEntity<Bonificacao> cancelarBonificacao(@PathVariable Integer codigo) {
		bonificacaoService.cancelarBonificacao(codigo);
		return ResponseEntity.noContent().build();
	}

}
