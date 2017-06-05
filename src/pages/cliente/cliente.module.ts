import { ClienteDao } from './../../domain/cliente/cliente-dao';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientePage } from './cliente';

@NgModule({
  declarations: [
    ClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ClientePage)
  ],
  exports: [
    ClientePage
  ],
  providers: [
    ClienteDao
  ]
})
export class ClientePageModule {}
