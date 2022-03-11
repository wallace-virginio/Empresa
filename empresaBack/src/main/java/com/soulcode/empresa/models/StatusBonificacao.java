package com.soulcode.empresa.models;

public enum StatusBonificacao {

	PENDENTE("Pendente"),
	RECEBIDO("Recebido"),
	CANCELADO("Cancelado");
	
	private String descricao;
	
	StatusBonificacao(String descricao){
		this.descricao = descricao;
	}

	
	/// GETTERS AND SETTERS
	
	public String getDescricao() {
		return descricao;
	}
}
