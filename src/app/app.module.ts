import { ListaFuncionariosDoCargoComponent } from './views/Funcionario/lista-funcionarios-do-cargo/lista-funcionarios-do-cargo.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HomeComponent } from './templates/home/home.component';
import { ListaCargoComponent } from './views/Cargo/lista-cargo/lista-cargo.component';
import { CadastroCargoComponent } from './views/Cargo/cadastro-cargo/cadastro-cargo.component';
import { EdicaoCargoComponent } from './views/Cargo/edicao-cargo/edicao-cargo.component';
import { ExclusaoCargoComponent } from './views/Cargo/exclusao-cargo/exclusao-cargo.component';
import { ExclusaoFuncionarioComponent } from './views/Funcionario/exclusao-funcionario/exclusao-funcionario.component';
import { CadastroFuncionarioComponent } from './views/Funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionarioComponent } from './views/Funcionario/lista-funcionario/lista-funcionario.component';
import { EdicaoFuncionarioComponent } from './views/Funcionario/edicao-funcionario/edicao-funcionario.component';
import { ListaFuncionarioComCargoComponent } from './views/Funcionario/lista-funcionario-com-cargo/lista-funcionario-com-cargo.component';
import { ListaSupervisorComponent } from './views/Supervisor/lista-supervisor/lista-supervisor.component';
import { SupervisorCargoComponent } from './views/Supervisor/supervisor-cargo/supervisor-cargo.component';
import { CadastroSupervisorComponent } from './views/Supervisor/cadastro-supervisor/cadastro-supervisor.component';
import { ListaBonificacaoFuncionarioComponent } from './views/Bonificacao/lista-bonificacao-funcionario/lista-bonificacao-funcionario.component';
import { CadastrarBonificacaoComponent } from './views/Bonificacao/cadastrar-bonificacao/cadastrar-bonificacao.component';
import { AtribuirCargoComponent } from './views/Funcionario/atribuir-cargo/atribuir-cargo.component';
import { AtribuirCargoSupervisorComponent } from './views/Supervisor/atribuir-cargo-supervisor/atribuir-cargo-supervisor.component';
import { EdicaoBonificacaoComponent } from './views/Bonificacao/edicao-bonificacao/edicao-bonificacao.component';
import { ExclusaoBonificacaoComponent } from './views/Bonificacao/exclusao-bonificacao/exclusao-bonificacao.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListaCargoComponent,
    CadastroCargoComponent,
    EdicaoCargoComponent,
    ExclusaoCargoComponent,
    ExclusaoFuncionarioComponent,
    CadastroFuncionarioComponent,
    ListaFuncionarioComponent,
    EdicaoFuncionarioComponent,
    ListaFuncionarioComCargoComponent,
    ListaSupervisorComponent,
    SupervisorCargoComponent,
    CadastroSupervisorComponent,
    ListaBonificacaoFuncionarioComponent,
    CadastrarBonificacaoComponent,
    AtribuirCargoComponent,
    AtribuirCargoSupervisorComponent,
    ListaFuncionariosDoCargoComponent,
    EdicaoBonificacaoComponent,
    ExclusaoBonificacaoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
