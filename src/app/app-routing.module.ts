import { ExclusaoBonificacaoComponent } from './views/Bonificacao/exclusao-bonificacao/exclusao-bonificacao.component';
import { EdicaoBonificacaoComponent } from './views/Bonificacao/edicao-bonificacao/edicao-bonificacao.component';
import { ListaFuncionariosDoCargoComponent } from './views/Funcionario/lista-funcionarios-do-cargo/lista-funcionarios-do-cargo.component';
import { AtribuirCargoSupervisorComponent } from './views/Supervisor/atribuir-cargo-supervisor/atribuir-cargo-supervisor.component';
import { CadastroSupervisorComponent } from './views/Supervisor/cadastro-supervisor/cadastro-supervisor.component';
import { ListaSupervisorComponent } from './views/Supervisor/lista-supervisor/lista-supervisor.component';
import { SupervisorCargoComponent } from './views/Supervisor/supervisor-cargo/supervisor-cargo.component';
import { ListaFuncionarioComCargoComponent } from './views/Funcionario/lista-funcionario-com-cargo/lista-funcionario-com-cargo.component';
import { EdicaoFuncionarioComponent } from './views/Funcionario/edicao-funcionario/edicao-funcionario.component';
import { CadastroFuncionarioComponent } from './views/Funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionarioComponent } from './views/Funcionario/lista-funcionario/lista-funcionario.component';
import { ExclusaoCargoComponent } from './views/Cargo/exclusao-cargo/exclusao-cargo.component';
import { EdicaoCargoComponent } from './views/Cargo/edicao-cargo/edicao-cargo.component';
import { CadastroCargoComponent } from './views/Cargo//cadastro-cargo/cadastro-cargo.component';
import { ListaCargoComponent } from './views/Cargo/lista-cargo/lista-cargo.component';
import { HomeComponent } from './templates/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarBonificacaoComponent } from './views/Bonificacao/cadastrar-bonificacao/cadastrar-bonificacao.component';
import { ListaBonificacaoFuncionarioComponent } from './views/Bonificacao/lista-bonificacao-funcionario/lista-bonificacao-funcionario.component';
import { AtribuirCargoComponent } from './views/Funcionario/atribuir-cargo/atribuir-cargo.component';
import { ExclusaoFuncionarioComponent } from './views/Funcionario/exclusao-funcionario/exclusao-funcionario.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},

  //CARGO
  {path: "cargo", component:ListaCargoComponent},
  {path: "cadastroCargo", component:CadastroCargoComponent},
  {path: "exclusaoCargo/:id", component:ExclusaoCargoComponent},
  {path: "edicaoCargo/:id", component:EdicaoCargoComponent},
  {path:"cargo/funcionario/:id", component: ListaFuncionarioComponent},
  {path:"cargo/:id_cargo/funcionario/cadastro", component:CadastroFuncionarioComponent},

  //FUNCIONARIO
  {path: "funcionarioCargo/:id_cargo", component:ListaFuncionariosDoCargoComponent},
  {path: "funcionarioComCargo", component:ListaFuncionarioComCargoComponent},
  {path: "funcionario/bonificacao/:id_Funcionario", component:ListaBonificacaoFuncionarioComponent},
  {path: "funcionario/bonificacao/cadastro/:id_Funcionario", component:CadastrarBonificacaoComponent},
  {path: "cadastrarFuncionario/", component:CadastroFuncionarioComponent},
  {path: "edicaoFuncionario/", component:EdicaoFuncionarioComponent},
  {path:"funcionario/atribuirCargo/:id_Funcionario/:id_cargo", component:AtribuirCargoComponent},
  {path: "exclusaoFuncionario/", component:ExclusaoFuncionarioComponent},




  //SUPERVISOR
  {path: "supervisorDoCargo/:id_cargo", component:SupervisorCargoComponent},
  {path: "supervisor/listaSupervisores", component:ListaSupervisorComponent},
  {path:"supervisor/atribuirCargo/:id_supervisor", component:AtribuirCargoSupervisorComponent},
  {path: "cadastrarSupervisor", component:CadastroSupervisorComponent},

  //BONIFICACAO
  {path:"bonificacao/cadastro/:id_Funcionario", component:CadastrarBonificacaoComponent},
  {path:"bonificacao/listaPorFuncionario/", component:ListaBonificacaoFuncionarioComponent},
  {path:"bonificacao/edicao/:codigo/:id_Funcionario", component:EdicaoBonificacaoComponent},
  {path:"bonificacao/exclusao/:codigo/:id_Funcionario", component:ExclusaoBonificacaoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
