import { ActivatedRoute, Router } from '@angular/router';
import { CargoService } from './../../services/cargo.service';
import { Cargo } from './../../cargoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusao-cargo',
  templateUrl: './exclusao-cargo.component.html',
  styleUrls: ['./exclusao-cargo.component.css']
})
export class ExclusaoCargoComponent implements OnInit {
  cargo:Cargo ={
    id_cargo: '',
    car_nome: '',
    car_atribuicao: ''
  }


  constructor(private cargoService:CargoService,
    private route:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id')
    this.mostrarUmCargo()
  }

  mostrarUmCargo(){
    this.cargoService.MostrarUmCargo(this.cargo.id_cargo).subscribe((resultado)=>{
      this.cargo = resultado
    })
  }

  excluirCargo(){
    this.cargoService.excluircargo(this.cargo.id_cargo).subscribe({
      complete: () => alert("Cargo excluído com sucesso!"),
      error: () => alert("Esse Cargo possui funcionários associados, não pode ser excluida.")
    })
     this.router.navigate(['/cargo'])
    }
}
