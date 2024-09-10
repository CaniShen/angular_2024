import { Resultado } from './../../model/Resultado';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  // una lista del resultado
  //nombre del variable, 
  completo:Resultado[]=[
    new Resultado("http://www.fnac.es/","libros","Libros y más"),
    new Resultado("http://www.mybook.com/","libros","librería de temas varios"),
    new Resultado("http://www.game.es/","juegos","Juegos variados"),
    new Resultado("http://www.music.es/","música","Lamejor música"),
    new Resultado("http://www.tech.com/","libros","Libros técnicos"),
    new Resultado("http://www.eljuego.es/","juegos","Juegos on-line")
  ];

  tematica:string;
  //guradamos los resultados de la búsqueda
  resultados:Resultado[];
 // contenido:boolean=false

  //respuesta al evento guardar, de respuesta elemento es void
  buscar():void{ // no se devuelve nada,
    /*for(let r of this.completo){  // forma tradicional
      if(r.tematica==this.tematica){
        this.resultados.push(r);
      }
    }*/                             //find solo buscar uno
      this.resultados=this.completo.filter(r=> r.tematica === this.tematica); //"1" ==1=>True"  "1"===1=>false
  }

}
