import { LoginDao } from './../../domain/login/login-dao';
import { GarcomDao } from './../../domain/garcom/garcom-dao';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GarcomPage } from './garcom';

@NgModule({
  declarations: [
    GarcomPage,
  ],
  imports: [
    IonicPageModule.forChild(GarcomPage),
  ],
  exports: [
    GarcomPage
  ],
  providers: [
    GarcomDao,
    LoginDao
  ]
})
export class GarcomPageModule {}
