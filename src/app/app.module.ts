import { MesasPageModule } from './../pages/mesas/mesas.module';
import { GarcomPageModule } from './../pages/garcom/garcom.module';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


function provideStorage1() {
  return new Storage({ 
    name: 'restauranteEngenharia3',
    storeName: 'garcom'
  });
}

function provideStorage2() {
  return new Storage({ 
    name: 'restauranteEngenharia3',
    storeName: 'cliente'
  });
}

function provideStorage3() {
  return new Storage({ 
    name: 'restauranteEngenharia3',
    storeName: 'pedido'
  });
}

function provideStorage4() {
  return new Storage({ 
    name: 'restauranteEngenharia3',
    storeName: 'cardapio'
  });
}

function provideStorage5() {
  return new Storage({ 
    name: 'restauranteEngenharia3',
    storeName: 'comida'
  });
}

function provideStorage6() {
  return new Storage({ 
    name: 'restauranteEngenharia3',
    storeName: 'bebida'
  });
}

function provideStorage7() {
  return new Storage({ 
    name: 'restauranteEngenharia3',
    storeName: 'login'
  });
}

function provideStorage8() {
  return new Storage({ 
    name: 'restauranteEngenharia3',
    storeName: 'mesa'
  });
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GarcomPageModule,
    MesasPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'garcomStorage', useFactory: provideStorage1},
    {provide: 'clienteStorage', useFactory: provideStorage2},
    {provide: 'pedidoStorage', useFactory: provideStorage3},
    {provide: 'cardapioStorage', useFactory: provideStorage4},
    {provide: 'comidaStorage', useFactory: provideStorage5},
    {provide: 'bebidaStorage', useFactory: provideStorage6},
    {provide: 'loginStorage', useFactory: provideStorage7},
    {provide: 'mesaStorage', useFactory: provideStorage8}
  ]
})
export class AppModule {}
