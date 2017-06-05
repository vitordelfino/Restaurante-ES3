import { MesasPage } from './../mesas/mesas';
import { LoginDao } from './../../domain/login/login-dao';
import { GarcomPage } from './../garcom/garcom';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'login.html',
})
export class LoginPage {

  public usuario: string;
  public senha: string;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private _dao: LoginDao,
     private _alertCtrl: AlertController) {}

  public efetuarLogin(){
    this._dao
      .realizaLogin(this.usuario, this.senha)
      .then(confirmado => {

          confirmado ?
            this.navCtrl.setRoot(MesasPage)
            : this._alertCtrl.create({
              title: 'Aviso',
              subTitle: 'Usuário ou senha inválidos!',
              buttons: [{ text: 'OK' }]
            }).present();

      })
  }

  public cadastrar(){
    this.navCtrl.push(GarcomPage);
  }


}
