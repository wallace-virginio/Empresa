import { Cargo } from './../../cargoModel';
import { Router } from '@angular/router';
import { CargoService } from './../../services/cargo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.css']
})
export class CadastroCargoComponent implements OnInit {

  cargo:Cargo ={
    car_nome: '',
    car_atribuicao: ''
  }
  constructor(private CargoService:CargoService,
    private Router:Router) { }

  ngOnInit(): void {
  }

  cadastrarCargo(){
    this.CargoService.cadastrarcargo(this.cargo).subscribe((resultado) => {
      alert("cargo cadastrado com sucesso")
      this.Router.navigate(['/cargos'])
    })
  }
}
