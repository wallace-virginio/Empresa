import { CadastroFuncionarioComponent } from './componentes/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionarioComponent } from './componentes/lista-funcionario/lista-funcionario.component';
import { ExclusaoCargoComponent } from './componentes/exclusao-cargo/exclusao-cargo.component';
import { EdicaoCargoComponent } from './componentes/edicao-cargo/edicao-cargo.component';
import { CadastroCargoComponent } from './componentes/cadastro-cargo/cadastro-cargo.component';
import { ListaCargoComponent } from './componentes/lista-cargo/lista-cargo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "cargo", component:ListaCargoComponent},
  {path: "cadastroCargo", component:CadastroCargoComponent},
  {path: "edicaoCargo/:id", component:EdicaoCargoComponent},
  {path: "exclusaoCargo/:id", component:ExclusaoCargoComponent},
  {path: "funcionarioCargo/:id_cargo", component:ListaFuncionarioComponent},
  {path: "cadastroFuncionario/:id", component:CadastroFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
