import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './Usuario/componente/lista/lista.component';
import { UsuarioFormComponent } from './Usuario/componente/usuario-form/usuario-form.component';
import {  PropiedadListaComponent } from './Propiedad/componente/propiedad-lista/propiedad-lista.component';

const routes: Routes = [
  {path:'usuarios',component:ListaComponent},
  {path:'usuarios/form',component:UsuarioFormComponent},
  {path:'usuarios/form/:id',component:UsuarioFormComponent},
  {path:'propiedad/lista',component:PropiedadListaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
