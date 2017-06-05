import { MesaDao } from './../../domain/mesas/mesa-dao';
import { PedidoDao } from './../../domain/pedido/pedido-dao';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FecharPedidoPage } from './fechar-pedido';

@NgModule({
  declarations: [
    FecharPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(FecharPedidoPage),
  ],
  exports: [
    FecharPedidoPage
  ],
  providers: [
    PedidoDao,
    MesaDao
  ]
})
export class FecharPedidoPageModule {}
