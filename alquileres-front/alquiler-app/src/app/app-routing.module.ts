import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './Usuario/componente/lista/lista.component';
import { UsuarioFormComponent } from './Usuario/componente/usuario-form/usuario-form.component';
import {  PropiedadListaComponent } from './Propiedad/componente/propiedad-lista/propiedad-lista.component';
import { PropiedadDetalleComponent } from './Propiedad/componente/propiedad-detalle/propiedad-detalle.component';
import { PropiedadFormComponent } from './Propiedad/componente/propiedad-form/propiedad-form.component';
import { LoginComponent } from './Auth/componente/login/login.component';
import { AlquilerFormComponent } from './Alquiler/componente/alquiler-form/alquiler-form.component';
import { PropietarioAlquileresComponent } from './Propietario/componente/propietario-alquileres/propietario-alquileres.component';




const routes: Routes = [
  {path:'usuarios',component:ListaComponent},
  {path:'usuarios/form',component:UsuarioFormComponent},
  {path:'usuarios/form/:id',component:UsuarioFormComponent},
  {path:'propiedad/lista',component:PropiedadListaComponent},
  {path:'propiedad/form',component:PropiedadFormComponent},
  {path:'propiedad/form/:id',component:PropiedadFormComponent},
  {path:'propiedad/detalle/:id',component:PropiedadDetalleComponent},
  {path:'login',component:LoginComponent},
  {path:'alquiler/form', component:AlquilerFormComponent},
  {path:'alquiler/form/:id', component:AlquilerFormComponent},
  {path:'propietario', component:PropietarioAlquileresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
