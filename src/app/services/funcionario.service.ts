import { Cargo } from 'src/app/models/cargoModel';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionarioModel';
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
    const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url);

  }

   buscarTodosFuncionarios():Observable<any>{
    //("/aluno/busca-turma/{id_turma}"
    const url = `${this.baseUrl}/funcionarios/`
    return this.http.get<any>(url);
  }

   buscarUmFuncionario(id_Funcionario:string):Observable<Funcionario>{
       const url = `${this.baseUrl}/funcionarios/${id_Funcionario}`
       return this.http.get<Funcionario>(url)
       console.log(id_Funcionario)
     }

     cadastrarFuncionario(Funcionario:Funcionario, id_cargo:string):Observable<Funcionario>{
      //("/funcionario")
      const url = `${this.baseUrl}/funcionario?cargo=${id_cargo}`
       return this.http.post<Funcionario>(url,Funcionario);
       console.log(id_cargo)
     }

     excluirFuncionario(id_Funcionario:string):Observable<Funcionario>{
       const url = `${this.baseUrl}/funcionarios/${id_Funcionario}`
       return this.http.delete<Funcionario>(url)
     }

     editarFuncionario(funcionario:Funcionario,id_Funcionario:any, id_cargo:any):Observable<Funcionario>{
      //http://localhost:8080/escola/alunos/1?turma=1
      const url = `${this.baseUrl}/funcionarios/${id_Funcionario}?cargo=${id_cargo}`
      return this.http.put<Funcionario>(url,funcionario);

    }

    atribuirCargo(cargo:Cargo, id_Funcionario:String):Observable<Funcionario>{

    // "/funcionario/inserirCargo/{id_Funcionario}"
      const url = `${this.baseUrl}/funcionario/inserirCargo/${id_Funcionario}`
      return this.http.put<Funcionario>(url,cargo)

    }

    deixarFuncionarioSemCargo(funcionario:Funcionario, id_Funcionario:String):Observable<Funcionario>{

      //"/funcionario/deixarSemCargo/{id_Funcionario}"
      const url = `${this.baseUrl}/funcionario/deixarSemCargo/${id_Funcionario}`
      return this.http.put<Funcionario>(url,funcionario)
    }
}
