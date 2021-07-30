import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { CargosComponent } from './components/cargos/cargos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'cargos', component: CargosComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

