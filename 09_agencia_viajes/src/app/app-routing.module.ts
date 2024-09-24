import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './components/acceso/acceso.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { MisReservasComponent } from './components/mis-reservas/mis-reservas.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: 'acceso', component: AccesoComponent },
  { path: 'reservar', component: ReservarComponent },
  { path: 'mis-reservas', component: MisReservasComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: '/acceso', pathMatch: 'full' },
  { path: '**', redirectTo: '/acceso' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
