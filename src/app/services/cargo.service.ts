import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../cargoModel';

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

    cadastrarcargo(cargo:Cargo):Observable<Cargo>{
      const url = `${this.baseUrl}/cargo`
      return this.http.post<Cargo>(url,cargo)
    }

    excluircargo(id:String):Observable<void>{
      const url = `${this.baseUrl}/cargo/${id}`
      return this.http.delete<void>(url)
    }

    editarcargo(cargo:Cargo):Observable<Cargo>{
      const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
      return this.http.put<Cargo>(url,cargo);

    }

}
