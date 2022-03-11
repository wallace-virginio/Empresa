package com.soulcode.empresa.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Supervisor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_supervisor;

	@Column(nullable = false, length = 80)
	private String super_nome;

	@Column(nullable = true, length = 80)
	private String super_funcao;

	@Column(nullable = true)
	private String super_foto;

	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_cargo", unique = true)
	private Cargo cargo;

	public Integer getId_supervisor() {
		return id_supervisor;
	}

	public void setId_supervisor(Integer id_supervisor) {
		this.id_supervisor = id_supervisor;
	}

	public String getSuper_nome() {
		return super_nome;
	}

	public void setSuper_nome(String super_nome) {
		this.super_nome = super_nome;
	}

	public String getSuper_formacao() {
		return super_funcao;
	}

	public void setSuper_formacao(String super_funcao) {
		this.super_funcao = super_funcao;
	}

	public String getSuper_foto() {
		return super_foto;
	}

	public void setSuper_foto(String super_foto) {
		this.super_foto = super_foto;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

}
