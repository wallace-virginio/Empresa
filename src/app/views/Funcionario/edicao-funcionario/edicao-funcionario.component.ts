import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../../services/funcionario.service';
import { Funcionario } from '../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao-funcionario',
  templateUrl: './edicao-funcionario.component.html',
  styleUrls: ['./edicao-funcionario.component.css']
})
export class EdicaoFuncionarioComponent implements OnInit {

  id_cargo: any = ''

  Funcionario:Funcionario ={
  id_Funcionario: '',
  func_nome: '',
  func_cidade: ''
  }

  constructor(private FuncionarioService:FuncionarioService,
    private Route:ActivatedRoute,
    private Router: Router) { }

  ngOnInit(): void {
    this.Funcionario.id_Funcionario = this.Route.snapshot.paramMap.get('id_Funcionario')
    this.id_cargo = this.Route.snapshot.paramMap.get('id_cargo')!
    this.buscarUmFuncionario()
  }


  buscarUmFuncionario(){
    this.FuncionarioService.buscarUmFuncionario(this.Funcionario.id_Funcionario).subscribe((resultado)=>{
      this.Funcionario = resultado
    })
  }
  editarFuncionario(){
    this.FuncionarioService.editarFuncionario(this.Funcionario, this.Funcionario.id_Funcionario, this.id_cargo).subscribe({
      complete: () => {alert("Funcionario editado com sucesso!")
                  this.Router.navigate([`/FuncionarioCargo/${this.id_cargo}`])},
      error: () => {alert("Erro: Funcionario não editado")
                this.Router.navigate([`/FuncionarioCargo/${this.id_cargo}`])}

    })
  }

  cancelarEdicao(){
    this.Router.navigate(['/alunosComTurma'])
  }

}
