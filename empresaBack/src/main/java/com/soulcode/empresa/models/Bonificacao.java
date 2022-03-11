package com.soulcode.empresa.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.format.annotation.NumberFormat;

@Entity
public class Bonificacao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigo;

	@Column(nullable = false)
	private String boni_descricao;

	@NumberFormat(pattern = "#.##0,00")
	@Column(nullable = false)
	private Double boni_valor;

	@Enumerated(EnumType.STRING)
	private StatusBonificacao boni_status;

	// MUITOS PARA UM
	@ManyToOne
	@JoinColumn(name = "id_Funcionario")
	private Funcionario funcionario;

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getBoni_descricao() {
		return boni_descricao;
	}

	public void setBoni_descricao(String boni_descricao) {
		this.boni_descricao = boni_descricao;
	}

	public Double getBoni_valor() {
		return boni_valor;
	}

	public void setBoni_valor(Double boni_valor) {
		this.boni_valor = boni_valor;
	}

	public StatusBonificacao getBoni_status() {
		return boni_status;
	}

	public void setBoni_status(StatusBonificacao boni_status) {
		this.boni_status = boni_status;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}

	// GETTERS AND SETTERS

}
