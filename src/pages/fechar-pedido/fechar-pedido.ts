import { MesasPage } from './../mesas/mesas';
import { MesaDao } from './../../domain/mesas/mesa-dao';
import { PedidoDao } from './../../domain/pedido/pedido-dao';
import { Mesa } from './../../domain/mesas/mesa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fechar-pedido',
  templateUrl: 'fechar-pedido.html',
})
export class FecharPedidoPage {

  public mesa: Mesa;
  public pedidos = [];
  public data: string = new Date().toString();//.toISOString();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _pedidoDao: PedidoDao,
    private _mesaDao: MesaDao
    ) {

      this.mesa = navParams.get('mesaSelecionada');
      console.log(this.mesa);
      
      let pedidos = _pedidoDao.getPedido(this.mesa);
      pedidos.forEach(pedidos => {
        pedidos.pedido.forEach(item => {
          this.pedidos.push(item);
        });
      });
  }


  getTotal(){
    let total: number = 0.00;
    this.pedidos
      .forEach(pedido => {
        total += pedido.preco * pedido.quantidade;
      })
      return total;
  }

  FecharConta(){
    this._pedidoDao.fechaPedido(this.mesa);
    this._mesaDao.atualizaMesa(new Mesa(this.mesa.numero, false, null, null));

    this.navCtrl.setRoot(MesasPage);

  }
}
