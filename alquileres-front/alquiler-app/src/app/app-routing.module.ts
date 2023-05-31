import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './Usuario/componente/lista/lista.component';
import { UsuarioFormComponent } from './Usuario/componente/usuario-form/usuario-form.component';
import {  PropiedadListaComponent } from './Propiedad/componente/propiedad-lista/propiedad-lista.component';
<<<<<<< HEAD
import { PropiedadDetalleComponent } from './Propiedad/componente/propiedad-detalle/propiedad-detalle.component';
import { PropiedadFormComponent } from './Propiedad/componente/propiedad-form/propiedad-form.component';
=======


import { PropiedadFormComponent } from './Propiedad/componente/propiedad-form/propiedad-form.component';

import { PropiedadDetalleComponent } from './Propiedad/componente/propiedad-detalle/propiedad-detalle.component';


>>>>>>> c4cf5f08addfadfe135797225ff9fc1611f0e887
import { LoginComponent } from './Auth/componente/login/login.component';



const routes: Routes = [
  {path:'usuarios',component:ListaComponent},
  {path:'usuarios/form',component:UsuarioFormComponent},
  {path:'usuarios/form/:id',component:UsuarioFormComponent},
  {path:'propiedad/lista',component:PropiedadListaComponent},
<<<<<<< HEAD
  {path:'propiedad/form',component:PropiedadFormComponent},
  {path:'propiedad/form/:id',component:PropiedadFormComponent},
  {path:'propiedad/detalle/:id',component:PropiedadDetalleComponent},
=======


  {path:'propiedad/form',component:PropiedadFormComponent},
  {path:'propiedad/form/:id',component:PropiedadFormComponent},


  {path:'propiedad/detalle/:id',component:PropiedadDetalleComponent},



>>>>>>> c4cf5f08addfadfe135797225ff9fc1611f0e887
  {path:'propiedad/form',component:PropiedadFormComponent},
  {path:'propiedad/form/:id',component:PropiedadFormComponent},
  {path:'propiedad/detalle/:id',component:PropiedadDetalleComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
