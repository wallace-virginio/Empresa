import { Router } from '@angular/router';
import { SupervisorService } from './../../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-supervisor',
  templateUrl: './lista-supervisor.component.html',
  styleUrls: ['./lista-supervisor.component.css']
})
export class ListaSupervisorComponent implements OnInit {

  supervisores: any = []

  constructor(private SupervisorService: SupervisorService,
              private Router:Router) { }

  ngOnInit(): void {
    this.buscarTodosSupervisores()
  }

  buscarTodosSupervisores(){
  this.SupervisorService.mostrarTodosSupervisores().subscribe(resultado =>{

    resultado.forEach((supervisor: any[]) => {

      let supervisorComCargo: any ={
        id_supervisor:'',
        super_nome:'',
        super_email: '',
        super_funcao: '',
        id_cargo:'',
        car_nome:'',
        car_atribuicao:''
      }

      supervisorComCargo.id_supervisor = supervisor[0]
      supervisorComCargo.super_nome = supervisor[1]
      supervisorComCargo.super_email = supervisor[2]
      supervisorComCargo.super_funcao = supervisor[3]
      if (supervisor[4] != null){
        supervisorComCargo.id_cargo = supervisor[4]
        supervisorComCargo.car_nome = supervisor[5]
        supervisorComCargo.car_atribuicao = supervisor[6]
      }else{
        supervisorComCargo.id_cargo = 0
        supervisorComCargo.car_nome = "----"
        supervisorComCargo.car_atribuicao = "----"
      }

      console.log(resultado)
      this.supervisores.push(supervisorComCargo)

    });


  })
  }
}
