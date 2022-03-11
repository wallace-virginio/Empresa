package com.soulcode.empresa.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.soulcode.empresa.models.Bonificacao;


public interface BonificacaoRepository extends JpaRepository<Bonificacao, Integer> {

	@Query(value = "SELECT * FROM empresa.bonificacao WHERE id_funcionario = :id_funcionario", nativeQuery = true)
	List<Bonificacao> buscarBonificacaoDoFuncionario(Integer id_funcionario);
}
