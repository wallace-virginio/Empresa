////// a classe Funcionarios está no pacote model
package com.soulcode.empresa.models;

/////// imports necessários
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

//////////// essa anotação diz que é um model
@Entity
public class Funcionario {

	//////////// atributos da classe Funcionario - ao invés de criar lá no mysql,
	//////////// cria aqui pelo java
	/// os modificadores de acesso serão private e para alterações usaremos os sets

	////// anotação @Id diz que o atributo id_Funcionario é a chave primária
	///// anotação @GeneratedValue(strategy = GenerationType.IDENTITY) diz que o
	////// valor será autoincrementado
	/// e a estratágia é que a geração será pelo springBoot
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_Funcionario;

	////// anotação column diz que o atributo al_nome será uma coluna da tabela
	//// os parâmetros-> nullabe como false diz que ele NÃO PODE ser nulo
	/// e o length é o tamanho máxcimo da string - o default é 255 e isso é o que
	////// ele pega na memória
	@Column(nullable = false, length = 80)
	private String func_nome;

	////// anotação column diz que o atributo al_cidade será uma coluna da tabela
	//// os parâmetros-> nullabe como false diz que ele NÃO PODE ser nulo
	/// e o length é o tamanho máxcimo da string - o default é 255 e isso é o que
	////// ele pega na memória
	@Column(nullable = false, length = 60)
	private String func_cidade;

	////// anotação column diz que o atributo al_cargo será uma coluna da tabela
	//// os parâmetros-> nullabe como false diz que ele NÃO PODE ser nulo
	/// e o length é o tamanho máxcimo da string - o default é 255 e isso é o que
	////// ele pega na memória

	@JsonIgnore // quando fizer a listagem das cargos
	@ManyToOne
	@JoinColumn(name = "id_cargo")
	private Cargo cargo;

	///////////// getters and setters

	public Integer getId_Funcionario() {
		return id_Funcionario;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

	public String getFunc_nome() {
		return func_nome;
	}

	public void setFunc_nome(String func_nome) {
		this.func_nome = func_nome;
	}

	public String getFunc_cidade() {
		return func_cidade;
	}

	public void setFunc_cidade(String func_cidade) {
		this.func_cidade = func_cidade;
	}

	public void setId_Funcionario(Integer id_Funcionario) {
		this.id_Funcionario = id_Funcionario;
	}

	public Cargo getcargo() {
		return cargo;
	}

	public void setcargo(Cargo cargo) {
		this.cargo = cargo;
	}

}