import { ActivatedRoute, Router} from '@angular/router';
import { FuncionarioService } from './../../../services/funcionario.service';
import { Funcionario } from '../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {


  funcionarios: Funcionario[] = []

  constructor(private FuncionarioService: FuncionarioService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.buscarFuncionarios();
  }

    buscarFuncionarios(){
      this.FuncionarioService.buscarTodosFuncionarios().subscribe((resultado) =>{
        this.funcionarios = resultado;
        console.log(this.funcionarios)
      })
    }

    chamarFormularioCadastro(){
      this.router.navigate(['/cadastrarFuncionario/'])
    }
}
