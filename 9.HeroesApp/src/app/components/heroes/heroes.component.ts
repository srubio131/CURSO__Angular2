import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  loading: boolean = true;

  constructor( private _heroesService: HeroesService ) {
    this._heroesService.getHeroes().subscribe( data => {
      this.heroes = data;
      this.loading = false;
    });
  }

  ngOnInit() {

  }

  eliminarHeroe( key: string ) {

    this._heroesService.eliminarHeroe(key)
        .subscribe( respuesta => {
          if( respuesta ) {
            console.error(respuesta);
          } else {
            // Se ha eliminado bien.. entonces borro de heroes
            delete this.heroes[key];
          }
        });

  }

}
