import { LoginDao } from './../../domain/login/login-dao';
import { PedidoDao } from './../../domain/pedido/pedido-dao';
import { BebidaDao } from './../../domain/cardapio/bebida/bebida-dao';
import { ComidaDao } from './../../domain/cardapio/comida/comida-dao';
import { ClientePageModule } from './../cliente/cliente.module';
import { ClienteDao } from './../../domain/cliente/cliente-dao';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoPage } from './pedido';

@NgModule({
  declarations: [
    PedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoPage),
    ClientePageModule
  ],
  exports: [
    PedidoPage
  ],
  providers: [
    ClienteDao,
    ComidaDao,
    BebidaDao,
    PedidoDao,
    LoginDao
  ]
})
export class PedidoPageModule {}
