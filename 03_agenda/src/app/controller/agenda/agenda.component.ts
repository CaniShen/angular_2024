import { Component } from '@angular/core';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { Contacto } from '../../model/Contacto';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  //almacena los contactos creados
  agenda:Contacto[]=[]; // una lista del contacto

  //estas variables se vinculan con los cambpos de text_format
  //para recoger la entrada de usuario
  nombre:string;
  edad:number;
  telefono:string;
 // contenido:boolean=false

  //respuesta al evento guardar
  guardar():void{
    this.agenda.push(new Contacto(this.nombre,this.edad,this.telefono));
   // this.contenido=true;
  }
}
