import { ActivatedRoute, Router } from '@angular/router';
import { CargoService } from './../../services/cargo.service';
import { Cargo } from './../../cargoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao-cargo',
  templateUrl: './edicao-cargo.component.html',
  styleUrls: ['./edicao-cargo.component.css']
})
export class EdicaoCargoComponent implements OnInit {

  cargo:Cargo = {
    id_cargo:'',
    car_nome: '',
    car_atribuicao: ''
  }

  constructor(private cargoService:CargoService,
    private route:ActivatedRoute,
    private Router:Router) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id')
    this.mostrarUmCargo();

  }
  mostrarUmCargo() {
    this.cargoService.MostrarUmCargo(this.cargo.id_cargo).subscribe((resultado)=>{
      this.cargo = resultado
    })
  }

  editarCargo(){
    this.cargoService.editarcargo(this.cargo).subscribe({
      complete: () => alert("Cargo editado com sucesso!"),
      error: () => alert("Erro: Cargo não pode ser editado")
    })
    this.Router.navigate(['/cargo'])

  }
}
