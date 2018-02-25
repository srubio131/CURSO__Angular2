import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsComponent } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PendientesComponent } from "../pages/pendientes/pendientes";
import { TerminadosComponent } from "../pages/terminados/terminados";
import { ListaDeseosService } from "./services/lista-deseos.service";
import { AgregarComponent } from "../pages/agregar/agregar";
import { PlaceHolderPipe } from "./pipes/placeholder.pipe";
import { DetalleComponent } from "../pages/detalle/detalle";
import { PendientesPipe } from "./pipes/pendientes.pipe";
import { MensajeVacioComponent } from "./components/shared/mensaje-vacio.component";

@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    PendientesPipe,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent,
    MensajeVacioComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent,
    MensajeVacioComponent,
    TabsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
