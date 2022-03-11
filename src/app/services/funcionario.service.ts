import { Observable } from 'rxjs';
import { Funcionario } from './../funcionarioModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

   /*Sempre colocar a base */
   baseUrl:string = 'http://localhost:8080/empresa'

   constructor(private http:HttpClient) { }



     buscarFuncionariosCargo(id_cargo:string):Observable<Funcionario[]>{
       const url = `${this.baseUrl}/funcionario/busca-funcionario/${id_cargo}`
       return this.http.get<Funcionario[]>(url);
       console.log(this.buscarFuncionariosCargo)

     }

     buscarUmFuncionario(id_funcionario:string):Observable<Funcionario>{
       const url = `${this.baseUrl}/funcionarios/${id_funcionario}`
       return this.http.get<Funcionario>(url)
       console.log(id_funcionario)
     }

     cadastrarFuncionario(Funcionario:Funcionario, id_cargo:string):Observable<Funcionario>{
       const url = `${this.baseUrl}/funcionario?cargo=${id_cargo}`
       return this.http.post<Funcionario>(url,Funcionario);
       console.log(id_cargo)
     }

     excluirFuncionario(id_funcionario:string):Observable<Funcionario>{
       const url = `${this.baseUrl}/funcionario/${id_funcionario}`
       return this.http.delete<Funcionario>(url)
     }
}
