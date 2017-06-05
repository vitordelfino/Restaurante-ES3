import { ClienteDao } from './../../domain/cliente/cliente-dao';
import { Cliente } from './../../domain/cliente/cliente'
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ClientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

  public cpf: string;
  public nome: string;
  public telefone: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _dao: ClienteDao,
    private _alertCtrl: AlertController) {
  }

  public cadastrarCliente(){
    this._dao
      .cadastrar(new Cliente(this.cpf, this.nome, this.telefone))
      .then(() => {
        this._alertCtrl
          .create({
            title: 'Aviso',
            subTitle: 'Cliente Cadastrado com sucesso !!!',
            buttons: [{ text: 'OK', handler: () => { this.navCtrl.pop() }}]
          }).present();
      }).catch(err => {        
        console.log(err);

         this._alertCtrl
          .create({
            title: 'Aviso',
            subTitle: 'Erro ao cadastrar cliente, tente novemente mais tarde !!!',
            buttons: [{ text: 'OK' }]
          }).present();

      })
  }

}
