import { Observable } from 'rxjs';
import { Bonificacao } from './../models/bonificacaoModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonificacaoService {

  baseUrl: String = 'http://localhost:8080/escola'

  constructor(private http:HttpClient) { }

  buscarUmaBonificacao(codigo:string):Observable<Bonificacao>{
   /// "/funcionario/bonificacao/{codigo}"

    const url = `${this.baseUrl}/funcionario/bonificacao/${codigo}`
    return this.http.get<Bonificacao>(url)
  }

  listarBonificaoFuncionario(id_Funcionario: String):Observable<Bonificacao[]>{
    //http://localhost:8080/escola/aluno/boletosDoAluno/1
    const url = `${this.baseUrl}/funcionario/bonificacoesDoFuncionario/${id_Funcionario}`
    return this.http.get<Bonificacao[]>(url)
  }

  cadastrarBonificacao(bonificacao:Bonificacao, id_Funcionario:String):Observable<Bonificacao>{
    const url = `${this.baseUrl}/funcionario/bonificacao/${id_Funcionario}`
    return this.http.post<Bonificacao>(url,bonificacao);
  }

  editarBonificacao(bonificacao:Bonificacao, codigo:any, id_Funcionario:any):Observable<Bonificacao>{
    const url = `${this.baseUrl}/funcionario/bonificacao/${codigo}/${id_Funcionario}`
    return this.http.put<Bonificacao>(url,bonificacao)
  }

  excluirBonificacao(codigo:string):Observable<void>{
    const url = `${this.baseUrl}/funcionario/bonificacao/${codigo}`
    return this.http.delete<void>(url)
  }

  pagarBonificacao(bonificacao:Bonificacao, codigo:any):Observable<Bonificacao>{
    //http://localhost:8080/escola/aluno/QuitarBoleto/5
    const url = `${this.baseUrl}/funcionario/quitarBonificacao/${codigo}`
    return this.http.put<Bonificacao>(url,bonificacao)
  }

  cancelarBonificacao(bonificacao:Bonificacao, codigo:any):Observable<Bonificacao>{
    //http://localhost:8080/escola/aluno/cancelarBoleto/5
    const url = `${this.baseUrl}/funcionario/cancelarBonificacao/${codigo}`
    return this.http.put<Bonificacao>(url,bonificacao)
  }

}
