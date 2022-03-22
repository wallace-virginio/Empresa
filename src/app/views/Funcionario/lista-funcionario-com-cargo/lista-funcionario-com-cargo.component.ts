import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-funcionario-com-cargo',
  templateUrl: './lista-funcionario-com-cargo.component.html',
  styleUrls: ['./lista-funcionario-com-cargo.component.css']
})
export class ListaFuncionarioComCargoComponent implements OnInit {

  funcionarios:any = []

  constructor(private funcionarioService: FuncionarioService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.buscarTodosFuncionarios()
  }

    buscarTodosFuncionarios(){
      this.funcionarioService.buscarTodosFuncionarios().subscribe(resultado =>{

        resultado.forEach((funcionario: any[]) => {

          let funcionariosComCargo: any ={
            id_Funcionario:'',
            func_nome:'',
            func_cidade:'',
            id_cargo:'',
            car_nome:'',
            car_atribuicao:''
          }

          funcionariosComCargo.id_Funcionario = funcionario[0]
          funcionariosComCargo.func_nome = funcionario[1]
          funcionariosComCargo.func_cidade = funcionario[2]
        if(funcionario[3] != null){
          funcionariosComCargo.id_cargo = funcionario[3]
          funcionariosComCargo.car_nome = funcionario[4]
          funcionariosComCargo.car_atribuicao = funcionario[5]
        }else{
          funcionariosComCargo.id_cargo = 0
          funcionariosComCargo.car_nome = "----"
          funcionariosComCargo.car_atribuicao = "----"
        }


        this.funcionarios.push(funcionariosComCargo)

      });


    })

  }


  }

