import { FuncionariosService } from './funcionarios.service';
import { CargosService } from './cargos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { CargosComponent } from './components/cargos/cargos.component';
import { NavsComponent } from './components/navs/navs.component';

@NgModule({
  declarations: [AppComponent, FuncionariosComponent, CargosComponent, NavsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [HttpClientModule, FuncionariosService, CargosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
