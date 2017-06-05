import { FecharPedidoPageModule } from './../fechar-pedido/fechar-pedido.module';
import { MesaDao } from './../../domain/mesas/mesa-dao';
import { PedidoPageModule } from './../pedido/pedido.module';
import { GarcomDao } from './../../domain/garcom/garcom-dao';
import { LoginDao } from './../../domain/login/login-dao';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesasPage } from './mesas';

@NgModule({
  declarations: [
    MesasPage,
  ],
  imports: [
    IonicPageModule.forChild(MesasPage),
    PedidoPageModule,
    FecharPedidoPageModule
  ],
  exports: [
    MesasPage
  ],
  providers: [
    GarcomDao,
    LoginDao,
    MesaDao
  ]
})
export class MesasPageModule {}
