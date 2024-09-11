import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  resultado: Resultado =new Resultado("","","");
  constructor(private buscadorService:BuscadorService){

  }
  mensaje:string;
  alta():void{ //evento es void
    console.log("llamado a alta en component")
    this.buscadorService.alta(this.resultado).subscribe(data=>{
      if(data){
        this.mensaje="Item grabado correctamente";
      }else{
        this.mensaje="El item no se ha grabado";
      }
    });// Observable<Resultado>
  }
}


