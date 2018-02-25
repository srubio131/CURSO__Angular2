import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private _heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router,
               private activatedRoute:ActivatedRoute) {
  }

  // Lo que se ejecuta una vez que la página está renderizada
  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this._heroes = this._heroesService.getHeroes( params['textoABuscar'] );
    });
  }

  private verHeroe( idx:number ){
    this.router.navigate( ['/heroe', idx] );
  }
}
