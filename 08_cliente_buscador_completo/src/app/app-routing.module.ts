import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './controller/buscador/buscador.component';
import { AltaComponent } from './controller/alta/alta.component';
import { BuscarporurlComponent } from './controller/buscarporurl/buscarporurl.component';

const routes: Routes = [
  {
    path:"buscar",
    component:BuscadorComponent
  },
{
    path:"nuevo",
    component:AltaComponent
},
  {
    path:"buscarPorUrl",
    component:BuscarporurlComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
