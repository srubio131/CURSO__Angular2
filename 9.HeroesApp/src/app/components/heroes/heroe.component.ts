import { Component, OnInit } from '@angular/core';
import { Heroe } from 'app/interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  esNuevo: boolean = false;
  key: string;

  constructor( private _heroeService: HeroesService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute ) {

    this._activatedRoute.params.subscribe( params => {
      this.key = params['id'];
    });

  }

  ngOnInit() {

    // Cargar datos
    if( this.key !== 'nuevo' ) {
      this._heroeService.getHeroe( this.key )
        .subscribe( data => this.heroe = data );
    }

  }

  guardar() {

    if( this.key === 'nuevo' ) { // Nuevo

      this._heroeService.nuevoHeroe( this.heroe )
        .subscribe( data => {
            this._router.navigate(['/heroe', data.name]);
          },
          error => console.error(error));

    } else { // Actualización

      this._heroeService.actualizarHeroe( this.heroe, this.key )
        .subscribe( data => { },
                    error => console.error(error));
    }

  }

  agregarNuevo( form: NgForm) {

    this._router.navigate(['/heroe', 'nuevo']);

    // Resetea los campos de los formularios y pone por defecto casa en 'Marvel'
    form.reset({
      casa: 'Marvel'
    });

  }

}
