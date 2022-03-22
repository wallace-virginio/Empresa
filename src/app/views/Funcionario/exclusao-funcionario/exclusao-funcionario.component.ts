import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../../services/funcionario.service';
import { Funcionario } from '../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusao-funcionario',
  templateUrl: './exclusao-funcionario.component.html',
  styleUrls: ['./exclusao-funcionario.component.css']
})
export class ExclusaoFuncionarioComponent implements OnInit {


  Funcionario:Funcionario = {
    id_Funcionario: '',
    func_nome: '',
    func_cidade: ''
  }


constructor(private FuncionarioService:FuncionarioService,
            private route:ActivatedRoute,
            private Router:Router) {


            }

ngOnInit(): void {

  this.Funcionario.id_Funcionario = this.route.snapshot.paramMap.get("id_Funcionario")
  this.buscarUmFuncionario()
}

buscarUmFuncionario(){
  this.FuncionarioService.buscarUmFuncionario(this.Funcionario.id_Funcionario).subscribe((resultado) =>{
    this.Funcionario = resultado
  })

  }

  excluirFuncionario(){
    this.FuncionarioService.excluirFuncionario(this.Funcionario.id_Funcionario).subscribe({
      next: () => {alert("Funcionario excluido com sucesso!")},
      error: () => {alert("Não foi possivel excluir Funcionario")},
      complete: () => {this.Router.navigate}
    })


}
}
