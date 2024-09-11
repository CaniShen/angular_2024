export class Resultado{
  url:string;
  tematica:string;
  descripcion:string;
  constructor(url:string,tematica:string,descripcion:string) {//no se puede omitir el tipo de variable en el constructor. Aquí es una declaración dle parámetro
    this.url=url;
    this.tematica=tematica
    this.descripcion=descripcion;
  }
}
