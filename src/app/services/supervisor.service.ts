import { Supervisor } from './../models/supervisorModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }

  mostrarUmSupervisor(id_supervisor:String):Observable<Supervisor>{
    //"/supervisor/{id_supervisor}"

    const url = `${this.baseUrl}/supervisor/${id_supervisor}`
    return this.http.get<Supervisor>(url)
  }

  mostrarTodosSupervisores():Observable<any>{

    const url = `${this.baseUrl}/supervisor/`
    return this.http.get<any>(url)
  }

  //buscarTodosSupervisores2():Observable<any>{

  //  const url = `${this.baseUrl}/supervisor/supervisor-cargo`
  //  return this.http.get<any>(url)
  //}

  buscarSupervisorDoCargo(id_cargo:String):Observable<Supervisor>{
    ///professor-turma/{id_turma}

    const url = `${this.baseUrl}/supervisor-cargo/${id_cargo}`
    return this.http.get<Supervisor>(url)
  }

  buscarSupervisorPeloNome(super_nome:String):Observable<Supervisor>{

    const url = `${this.baseUrl}/supervisor-nome/${super_nome}`
    return this.http.get<Supervisor>(url)
  }

  buscarSupervisoresSemCargo():Observable<Supervisor[]>{
    //http://localhost:8080/escola/professorSemTurma

    const url = `${this.baseUrl}/supervisorSemCargo`
    return this.http.get<Supervisor[]>(url)
  }

  cadastrarSupervisor(supervisor:Supervisor, id_cargo:string):Observable<Supervisor>{
  //  const url = `${this.baseUrl}/supervisor?cargo=${id_cargo}`
    const url = `${this.baseUrl}/supervisor?cargo=${id_cargo}`
    return this.http.post<Supervisor>(url,supervisor);
  }


}
