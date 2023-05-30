import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './Usuario/componente/lista/lista.component';
import { UsuarioFormComponent } from './Usuario/componente/usuario-form/usuario-form.component';
import {  PropiedadListaComponent } from './Propiedad/componente/propiedad-lista/propiedad-lista.component';
<<<<<<< HEAD
import { PropiedadFormComponent } from './Propiedad/componente/propiedad-form/propiedad-form.component';
=======
import { PropiedadDetalleComponent } from './Propiedad/componente/propiedad-detalle/propiedad-detalle.component';
>>>>>>> ulises

const routes: Routes = [
  {path:'usuarios',component:ListaComponent},
  {path:'usuarios/form',component:UsuarioFormComponent},
  {path:'usuarios/form/:id',component:UsuarioFormComponent},
  {path:'propiedad/lista',component:PropiedadListaComponent},
<<<<<<< HEAD
  {path:'propiedad/form',component:PropiedadFormComponent},
  {path:'propiedad/form/:id',component:PropiedadFormComponent},

=======
  {path:'propiedad/detalle/:id',component:PropiedadDetalleComponent}
  
>>>>>>> ulises
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
