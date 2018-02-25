import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar Works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor( private _router:ActivatedRoute ) {

    this._router.parent.params.subscribe( params => {
      console.log("Ruta hija");
      console.log(params);
    });

  }

  ngOnInit() {
  }

}
