import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  //                     aquí es un atributo
    constructor(private http:HttpClient){

    }

    //httpcliente
    buscar(tematica:string):Observable<Resultado[]> {
        let url:string="http://localhost:8080/buscar/"+tematica;
        return this.http.get<Resultado []>(url);

    }


}
