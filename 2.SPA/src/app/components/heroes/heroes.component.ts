import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private _heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService, private router:Router ) {

  }

  // Lo que se ejecuta una vez que la página está renderizada
  ngOnInit() {
    this._heroes = this._heroesService.getHeroes();
  }

  private verHeroe( idx:number ){
    this.router.navigate( ['/heroe', idx] );
  }
}
