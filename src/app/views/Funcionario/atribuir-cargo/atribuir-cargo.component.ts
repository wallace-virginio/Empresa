import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargoModel';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from '../../../models/funcionarioModel';

@Component({
  selector: 'app-atribuir-cargo',
  templateUrl: './atribuir-cargo.component.html',
  styleUrls: ['./atribuir-cargo.component.css']
})
export class AtribuirCargoComponent implements OnInit {

  cargos:Cargo[] = []
  cargoEscolhido: any = []
  id_cargo:any
  id_Funcionario:any
  cargoDoFuncionario:any = []

    funcionario:Funcionario ={
    id_Funcionario:'',
    func_nome:'',
    func_cidade:'',

  }

  constructor(private cargoService:CargoService,
              private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id_Funcionario = this.route.snapshot.paramMap.get('id_Funcionario')
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
    console.log(this.id_cargo)
    this.buscarTodosCargos()
    this.buscarFuncionario()
    this.buscarCargo()
  }

  buscarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resultado =>{
      this.cargos = resultado
    })
  }

  buscarCargo(){
    console.log(this.cargoEscolhido)
  }

  buscarFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.id_Funcionario).subscribe(resultado =>{
      this.funcionario = resultado
    })
  }

  buscaCargo(){
    this.cargoService.MostrarUmCargo(this.id_cargo).subscribe(resultado =>{
      this.cargoEscolhido = resultado
      console.log(this.cargoDoFuncionario)
    })
  }

  atribuirCargo(){
    this.funcionarioService.atribuirCargo(this.cargoEscolhido, this.id_Funcionario).subscribe({
      complete: () => { alert("Funcionario cadastrado no Cargo com sucesso")
                        this.router.navigate(['/funcionarioComCargo'])
                      },
      error: () => { alert("Funcionario não cadastrado no cargo")
                        this.router.navigate(['/funcionarioComCargo'])
                      },
      next: () => { console.log("Funcionario cadastrado com sucesso")}

      });
  }

  deixarFuncionarioSemCargo(){
    this.funcionarioService.deixarFuncionarioSemCargo(this.funcionario,this.id_Funcionario).subscribe({
      complete: () => { alert("Funcionario ficou sem cargo")
                        this.router.navigate(['/funcionarioComCargo'])
                      },
      error: () => { alert("Aluno não ficou sem turma")
                        this.router.navigate(['/funcionarioComCargo'])
                      },
      next: () => { console.log("Aluno editado com sucesso")}

      });

  }

}
