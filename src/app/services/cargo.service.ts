import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../models/cargoModel';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl: String = 'http://localhost:8080/empresa'


  constructor(private http:HttpClient) { }

  mostrarTodosCargos():Observable<Cargo[]>{
    const url = `${this.baseUrl}/cargo`
    return this.http.get<Cargo[]>(url)

  }
  MostrarUmCargo(id:string):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.get<Cargo>(url)
  }

    cadastrarCargo(cargo:Cargo):Observable<Cargo>{
      const url = `${this.baseUrl}/cargo`
      return this.http.post<Cargo>(url,cargo)
    }

    excluirCargo(id:String):Observable<void>{
      const url = `${this.baseUrl}/cargo/${id}`
      return this.http.delete<void>(url)
    }

    editarCargo(cargo:Cargo):Observable<Cargo>{
      const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
      return this.http.put<Cargo>(url,cargo);

    }

    atribuirSupervisor(cargo:Cargo,id_cargo:String, id_supervisor:String):Observable<void>{

      //http://localhost:8080/escola/turma/definirProfessor/3/2

      const url = `${this.baseUrl}/cargo/definirSupervisor/${id_cargo}/${id_supervisor}`
      return this.http.put<void>(url,cargo);

    }

    deixarCargoSemSupervisor(cargo:Cargo,id_cargo:String, id_supervisor:String):Observable<void>{

      //http://localhost:8080/escola/turma/tirarProfessor/3/2

      const url = `${this.baseUrl}/cargo/removerSupervisor/${id_cargo}/${id_supervisor}`
      return this.http.put<void>(url,cargo);

    }

}
