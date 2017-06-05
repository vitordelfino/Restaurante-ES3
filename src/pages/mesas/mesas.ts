import { FecharPedidoPage } from './../fechar-pedido/fechar-pedido';
import { MesaDao } from './../../domain/mesas/mesa-dao';
import { PedidoPage } from './../pedido/pedido';
import { LoginDao } from './../../domain/login/login-dao';
import { Mesa } from './../../domain/mesas/mesa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'mesas.html',
})
export class MesasPage {

  public mesas: Mesa[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _loginDao: LoginDao,
    private _mesaDao: MesaDao,
    private _alertCtrl: AlertController) {

      this.mesas = _mesaDao.listaMesas();
  }

  public anotarPedido(mesa: Mesa){

    if(mesa.garcom.nome == this._loginDao.obtemGarcomLogado().nome || !mesa.ocupada){

      this.navCtrl.push(PedidoPage,{
        mesaSelecionada: mesa
      });

    }else{
      this._alertCtrl.create({
        title: 'Aviso',
        subTitle: 'Esta mesa está sendo atendida por outro garçom.',
        buttons: [{ text: 'OK' }]
      }).present();
    }

        
  }
  public fecharPedido(mesa: Mesa){

    if(mesa.garcom.nome == this._loginDao.obtemGarcomLogado().nome || !mesa.ocupada){

      this.navCtrl.push(FecharPedidoPage,{
        mesaSelecionada: mesa
      });

    }else{
      this._alertCtrl.create({
        title: 'Aviso',
        subTitle: 'Esta mesa está sendo atendida por outro garçom.',
        buttons: [{ text: 'OK' }]
      }).present();
    }
    
  }


}
