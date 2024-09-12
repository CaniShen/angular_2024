import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscarporurl',
  templateUrl: './buscarporurl.component.html',
  styleUrl: './buscarporurl.component.css'
})
export class BuscarporurlComponent {
constructor(private buscadorService: BuscadorService) {

}

url:string;
resultadoPorUrl:Resultado;// atributos de la clase con lo cual no pasaria nada donde se crea sigue siendo los atributos de la clase

buscarPorUrl():void{
  this.buscadorService.buscarPorUrl(this.url)///Observable<Resultado>
   .subscribe(data=>this.resultadoPorUrl=data);//indicamos lo que hay que hacer cuando los resultados estén disponibles
  }


}
