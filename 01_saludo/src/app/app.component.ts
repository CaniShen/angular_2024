import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' //hoja de estilo
})
export class AppComponent { // public de JAVA

  title:String = "typescript!!"; // es un variable,  // no es obligatorio de poner el tipo de variable, pero si lo quiere hacer es eso.
}
