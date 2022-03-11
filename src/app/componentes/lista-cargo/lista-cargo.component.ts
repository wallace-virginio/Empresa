import { Cargo } from './../../cargoModel';
import { CargoService } from './../../services/cargo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-cargo',
  templateUrl: './lista-cargo.component.html',
  styleUrls: ['./lista-cargo.component.css']
})
export class ListaCargoComponent implements OnInit {

  cargos:Cargo[] = []

  constructor(private cargoService:CargoService) { }

  ngOnInit(): void {
    this.MostrarTodosCargos();
  }

  MostrarTodosCargos(){
  this.cargoService.mostrarTodosCargos().subscribe(resposta =>{
    this.cargos = resposta;
  })
}
}
