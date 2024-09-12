import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PASS, USER } from '../custom_properties';

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

    alta(resultado:Resultado):Observable<string>{
      console.log("llamado a alta en service");
      let url:string="http://localhost:8080/alta";
      let codificado=btoa(USER+":"+PASS);//codifica un texto en base64
      //creación de encabezados
      let heads=new HttpHeaders();
      heads=heads.set("Authorization","Basic "+codificado);
      //supongamos que el recurso está secuizado y solo un usuario autorizado puede acceder
      return this.http.post<string>(url,resultado,{headers:heads});//

    }

    buscarPorUrl(urlIntro:string):Observable<Resultado> {
      let pars=new HttpParams()
      pars=pars.set("url",urlIntro);

      let url:string="http://localhost:8080/buscar?url="+urlIntro;
      return this.http.get<Resultado>(url,{params:pars});
    }


}
