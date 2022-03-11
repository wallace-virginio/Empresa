import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaCargoComponent } from './componentes/lista-cargo/lista-cargo.component';
import { CadastroCargoComponent } from './componentes/cadastro-cargo/cadastro-cargo.component';
import { EdicaoCargoComponent } from './componentes/edicao-cargo/edicao-cargo.component';
import { ExclusaoCargoComponent } from './componentes/exclusao-cargo/exclusao-cargo.component';
import { ExclusaoFuncionarioComponent } from './componentes/exclusao-funcionario/exclusao-funcionario.component';
import { CadastroFuncionarioComponent } from './componentes/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionarioComponent } from './componentes/lista-funcionario/lista-funcionario.component';

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
    ListaFuncionarioComponent
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
