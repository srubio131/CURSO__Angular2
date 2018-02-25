import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from "../../services/heroes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html'
})
export class HeroesSearchComponent implements OnInit {

  private heroes:Heroe[] = [];
  private textoABuscar:string;

  constructor( private _heroesService:HeroesService,
               private activateRoute:ActivatedRoute,
               private router:Router ) {
  }

  // Lo que se ejecuta una vez que la página está renderizada
  ngOnInit() {
    this.activateRoute.params.subscribe( params =>{
      this.textoABuscar = params['textoABuscar'];
      this.heroes = this._heroesService.buscarHeroes( this.textoABuscar );
    });
  }

  private verHeroe( idx:number ){
    this.router.navigate( ['/heroe', idx] );
  }

}

