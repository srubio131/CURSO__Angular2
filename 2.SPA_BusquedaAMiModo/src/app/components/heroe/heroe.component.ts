import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  private _heroe:any = {};

  constructor( private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) {
    this._activatedRoute.params.subscribe( params => {
      this._heroe = this._heroesService.getHeroe( params['id'] );
    })
  }

  // Es de marvel?
  public esMarvel( ):boolean {
    return this._heroe.casa == 'Marvel';
  }

}
