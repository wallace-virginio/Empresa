import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from './../../funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  id_cargo: string = ''

    Funcionario: Funcionario ={
      id_funcionario: '',
      func_nome: '',
      func_cidade: ''
    }
  constructor(private FuncionarioService:FuncionarioService,
    private Router:Router,
    private Route:ActivatedRoute) {
      this.id_cargo = this.Route.snapshot.paramMap.get('id_cargo')!
    }

  ngOnInit(): void {
  }

  cadastrarFuncionario(){
    this.FuncionarioService.cadastrarFuncionario(this.Funcionario,this.id_cargo).subscribe({
      complete: () => {alert("Funcionario cadastrado com sucesso!")
                      this.Router.navigate([`/funcionario/${this.id_cargo}`])},
      error: () =>    {alert("Aconteceu algum erro no cadastro do Funcionario")
                      this.Router.navigate([`/funcionario/${this.id_cargo}`])},
      next: () => {console.log("Funcionario cadastrado")}
    })
  }
}
