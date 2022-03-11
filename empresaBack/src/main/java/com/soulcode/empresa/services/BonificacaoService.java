package com.soulcode.empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soulcode.empresa.models.Bonificacao;
import com.soulcode.empresa.models.Funcionario;
import com.soulcode.empresa.repositorys.BonificacaoRepository;
import com.soulcode.empresa.models.StatusBonificacao;


@Service
public class BonificacaoService {

	@Autowired
	private BonificacaoRepository bonificacaoRepository;

	@Autowired
	private FuncionarioService funcionarioService;

	public List<Bonificacao> buscarTodasBonificacoes() {
		return bonificacaoRepository.findAll();
	}

	public Bonificacao buscarUmaBonificacao(Integer codigo) {
		Optional<Bonificacao> bonificacao = bonificacaoRepository.findById(codigo);
		return bonificacao.orElseThrow();
	}

	public List<Bonificacao> buscarBonificacoesDoFuncionario(Integer id_Funcionario) {
		List<Bonificacao> bonificacao = bonificacaoRepository.buscarBonificacaoDoFuncionario(id_Funcionario);
		return bonificacao;
	}

	public Bonificacao inserirBonificacao(Bonificacao bonificacao, Integer id_Funcionario) {
		bonificacao.setCodigo(null);
		Funcionario funcionario = funcionarioService.BuscarUmFuncionario(id_Funcionario);
		bonificacao.setFuncionario(funcionario);
		return bonificacaoRepository.save(bonificacao);
	}

	public Bonificacao pagarBonificacao(Integer codigo) {
		Bonificacao bonificacao = buscarUmaBonificacao(codigo);
		StatusBonificacao st1 = StatusBonificacao.RECEBIDO;
		bonificacao.setBoni_status(st1);
		return bonificacaoRepository.save(bonificacao);
	}

	public Bonificacao cancelarBonificacao(Integer codigo) {
		Bonificacao bonificacao = buscarUmaBonificacao(codigo);
		StatusBonificacao st1 = StatusBonificacao.CANCELADO;
		bonificacao.setBoni_status(st1);
		return bonificacaoRepository.save(bonificacao);
	}

}
