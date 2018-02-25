import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Sergio';
  nombre2 = 'SeRGio RuBIo AnAYa';
  array:any[] = [1,2,3,4,5,6,7,8,9,10];
  pi:number = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;
  heroe = {
    nombre: "Logan",
    clave: "Wolwerine",
    edad: 500,
    direccion: {
      calle:"Primera",
      casa:"19"
    }
  }

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout( () => resolve('Llego la data!'), 3500);
  });

  fecha = new Date();

  video = 'k3ImX6GmV44';

  activar = true;
}
