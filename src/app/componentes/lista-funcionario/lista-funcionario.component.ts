import { ActivatedRoute, Router} from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from './../../funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  id_cargo:string = ''
  funcionario: Funcionario[] = []

  constructor(private FuncionarioService: FuncionarioService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!;
    this.buscarFuncionarioCargo();
  }

    buscarFuncionarioCargo(){
      this.FuncionarioService.buscarFuncionariosCargo(this.id_cargo).subscribe((resultado) =>{
        this.funcionario = resultado;
      })
    }
}
