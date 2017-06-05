import { MesasPage } from './../mesas/mesas';
import { LoginDao } from './../../domain/login/login-dao';
import { PedidoDao } from './../../domain/pedido/pedido-dao';
import { Mesa } from './../../domain/mesas/mesa';
import { BebidaDao } from './../../domain/cardapio/bebida/bebida-dao';
import { Bebida } from './../../domain/cardapio/bebida/bebida';
import { ComidaDao } from './../../domain/cardapio/comida/comida-dao';
import { Comida } from './../../domain/cardapio/comida/comida';
import { ClientePage } from './../cliente/cliente';
import { ClienteDao } from './../../domain/cliente/cliente-dao';
import { Cliente } from './../../domain/cliente/cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  public cpf: string;
  public mesa: Mesa;

  public cliente: Cliente;

  public comidas: Comida[] = [];
  public bebidas: Bebida[] = [];

  public total: number = 0.00;

  public pedido = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _clienteDao: ClienteDao,
    private _alertCtrl: AlertController,
    private _comidaDao: ComidaDao,
    private _bebidaDao: BebidaDao,
    private _pedidoDao: PedidoDao,
    private _loginDao: LoginDao
    ) {
      this.mesa = navParams.get('mesaSelecionada');
      let cliente: Cliente = this.mesa.cliente;
      if(cliente.nome != '')
        this.cliente = cliente;

      this.comidas = _comidaDao.getListaComida();
      this.bebidas = _bebidaDao.getListaBebida();

  }

  buscarCliente(){
    this._clienteDao
      .getCliente(this.cpf)
      .then(dado => {
        if(dado){

          this.cliente = new Cliente(dado.cpf, dado.nome, dado.telefone);

        }else{
          this._alertCtrl.create({
            title: 'Aviso',
            subTitle: 'Cliente não encontrado, deseja realizar cadastro ?',
            buttons: [
              { text: 'Sim', handler: () => { this.navCtrl.push(ClientePage) } },
              { text: 'Não'}
            ]
          }).present();
              
        }
      })
  }
  
  adicionaItem(ligado: boolean, item){
    if(ligado){
      this._alertCtrl
        .create({
          title: 'Quantidade',
          subTitle: 'Digite a quantidade de ' + item.nome,
          inputs: [{
              name: 'quantidade',
              placeholder: 'Quantidade'
            }],
          buttons:[ { text: 'OK', handler: data => { this.atualizaTotal(item, data.quantidade) }} ]
        }).present();
    }else{
      let pedido = [];
      let total: number = 0.00;
      this.pedido
        .forEach(itemPedido => {
          if(itemPedido.item != item.nome){
            pedido.push(itemPedido);
            total += itemPedido.preco * itemPedido.quantidade;        
          }
        });
        this.pedido = pedido;
        this.total = total;
    }

  }

  atualizaTotal(item, quantidade: number){
    this.pedido
      .push({
        "item": item.nome,
        "preco": item.preco,
        "quantidade": quantidade
      });
    this.total += item.preco * quantidade;
  }

  confirmarPedido(){
    this._pedidoDao
      .armazenaPedido(this.pedido, this.mesa, this._loginDao.obtemGarcomLogado(), this.cliente);
      this.navCtrl.setRoot(MesasPage);
  }

}
