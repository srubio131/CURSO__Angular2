import { Component } from '@angular/core';

import { PendientesComponent } from "../pendientes/pendientes";
import { TerminadosComponent } from "../terminados/terminados";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;

  constructor() {

  }

}
