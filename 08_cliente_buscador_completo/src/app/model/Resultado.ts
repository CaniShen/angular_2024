export class Resultado{
  url:string;
  tematica:string;
  descripcion:string;
   //convierte paramentros opcionales//puedo mezclara pero hay que tener cuidado//los obligatorios primeros, opcionales ultimos
  constructor(url?:string,tematica?:string,descripcion?:string) {//no se puede omitir el tipo de variable en el constructor. Aquí es una declaración dle parámetro
    this.url=url;
    this.tematica=tematica
    this.descripcion=descripcion;
  }

}
