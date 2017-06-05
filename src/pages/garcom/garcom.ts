import { GarcomDao } from './../../domain/garcom/garcom-dao';
import { Garcom } from './../../domain/garcom/garcom';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'garcom.html',
})
export class GarcomPage {

  public garcom: Garcom;
  public senha: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _dao: GarcomDao,
    private _alertCtrl: AlertController) {

      this.garcom = new Garcom();

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GarcomPage');
  }

  public cadastrarGarcom(){
    this._dao
      .cadastrarGarcom(this.garcom, this.senha)
      .then(confirmado => {

        console.log('cadastrou: ' + confirmado)

        confirmado
          ? this._alertCtrl.create({
            title: 'Aviso',
            subTitle: 'Garçom cadastro, utilize seu CPF realizar login',
            buttons: [{ text: 'OK' }]
          }).present() 
          
          : this._alertCtrl.create({
            title: 'Aviso',
            subTitle: 'Não foi possível realizar o cadastro. Tente novamente depois!',
            buttons: [{ text: 'OK' }]
          }).present();

      })
      
  }

}
