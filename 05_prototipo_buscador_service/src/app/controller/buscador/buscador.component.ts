import { BuscadorService } from './../../service/buscador.service';
import { Resultado } from './../../model/Resultado';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  constructor(private buscadorService: BuscadorService){

  }


  tematica:string;
  //guradamos los resultados de la búsqueda
  resultados:Resultado[];
 // contenido:boolean=false

  //respuesta al evento guardar, de respuesta elemento es void
  buscar():void{
    this.resultados=this.buscadorService.buscar(this.tematica);
  }

}
