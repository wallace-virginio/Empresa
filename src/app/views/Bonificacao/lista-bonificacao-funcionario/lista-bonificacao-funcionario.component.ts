import { Bonificacao } from './../../../models/bonificacaoModel';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../../services/funcionario.service';
import { BonificacaoService } from './../../../services/bonificacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-bonificacao-funcionario',
  templateUrl: './lista-bonificacao-funcionario.component.html',
  styleUrls: ['./lista-bonificacao-funcionario.component.css']
})
export class ListaBonificacaoFuncionarioComponent implements OnInit {
  id_Funcionario:any
  func_nome:any

  recebido:boolean = false
  cancelado:boolean = false

  bonificacoes:Bonificacao[] = []

  bonificacao:Bonificacao ={
    codigo:'',
    boni_descricao:'',
    boni_status:'',
    boni_valor: 0,
  }

  constructor(private bonificacaoService:BonificacaoService,
              private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.id_Funcionario = this.route.snapshot.paramMap.get('id_Funcionario')
    this.listarBonificacaoDoFuncionario()
    this.buscarFuncionario()
  }


  listarBonificacaoDoFuncionario(){
    this.bonificacaoService.listarBonificaoFuncionario(this.id_Funcionario).subscribe(resultado =>{
      this.bonificacoes = resultado

      console.log(resultado)
    })
  }

  buscarFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.id_Funcionario).subscribe(resultado =>{
      this.func_nome = resultado.func_nome
    })
  }

  pagarBonificacao(codigo:any){

    this.bonificacaoService.buscarUmaBonificacao(codigo).subscribe(resultado =>{
      this.bonificacao = resultado

      console.log(this.bonificacao)

      this.bonificacaoService.pagarBonificacao(this.bonificacao,this.bonificacao.codigo).subscribe({
        complete: () => {alert("Bonificacao paga com sucesso")
                         this.listarBonificacaoDoFuncionario()},
        error: () => {alert("Erro: Bonificacao não paga")}
      })
    })


  }

  cancelarBonificacao(codigo:any){


    this.bonificacaoService.buscarUmaBonificacao(codigo).subscribe(resultado =>{
      this.bonificacao = resultado

      console.log(this.bonificacao)

      this.bonificacaoService.cancelarBonificacao(this.bonificacao,this.bonificacao.codigo).subscribe({
        complete: () => {alert("Bonificacao cancelada com sucesso")
                         this.listarBonificacaoDoFuncionario()},
        error: () => {alert("Erro: Bonificacao não cancelada")}
      })
    })


  }
}
