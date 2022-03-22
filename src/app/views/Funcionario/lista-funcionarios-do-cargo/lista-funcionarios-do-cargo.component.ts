import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../../services/funcionario.service';
import { Funcionario } from './../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-funcionarios-do-cargo',
  templateUrl: './lista-funcionarios-do-cargo.component.html',
  styleUrls: ['./lista-funcionarios-do-cargo.component.css']
})
export class ListaFuncionariosDoCargoComponent implements OnInit {

  id_cargo: any

  funcionarios:Funcionario[] =[]

  constructor(private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
    this.mostrarFuncionariosDoCargo()
  }

  mostrarFuncionariosDoCargo(){
    this.funcionarioService.buscarFuncionariosCargo(this.id_cargo).subscribe(resultado =>{
      this.funcionarios = resultado
      console.log(this.funcionarios)
    })
  }
}
