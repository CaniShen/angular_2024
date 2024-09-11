
import { Component } from '@angular/core';
import { PaisesService } from '../../service/paises.service';
import { Pais } from '../../model/Pais';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
continentes:string[];
paises:Pais[];
continenteSel:string="-";


constructor(private paisesService:PaisesService){
 //para que la lista de continentes esté rellenada desde el principio
    this.cargarContinentes();
}

cargarContinentes():void{
  this.paisesService.continentes().subscribe(data=>this.continentes=data);
}

cargarPaises():void{
  this.paisesService.paises(this.continenteSel).subscribe(data=>this.paises=data);
}

}
