import { Cliente } from './../cliente/cliente';
import { Inject, Injectable } from '@angular/core';
import { Garcom } from './../garcom/garcom';
import { Mesa } from './../mesas/mesa';
import { Storage } from '@ionic/storage';

@Injectable()
export class PedidoDao {

    private _pedidos = [];

    constructor(
        @Inject('mesaStorage') private _mesaStorage: Storage
    ){}


    public armazenaPedido(pedido, mesa: Mesa, garcom: Garcom, cliente: Cliente){
        this._pedidos.push({
            "pedido": pedido,
            "mesa": mesa,
            "garcom": garcom
        });
        mesa.garcom = garcom;
        mesa.ocupada = true;
        mesa.cliente = cliente;
        this._mesaStorage.set(mesa.numero.toString(), mesa);
    }

    public getPedido(mesa: Mesa){
        let pedidosMesa = [];
        this._pedidos
            .forEach(pedido => {
                if(pedido.mesa.numero == mesa.numero){
                    pedidosMesa.push(pedido);
                }
            });
        return pedidosMesa;
    }

    public fechaPedido(mesa: Mesa){
        let pedidos = [];
        this._pedidos
            .forEach(pedido => {
                if(pedido.mesa.numero != mesa.numero){
                    pedidos.push(pedido);
                }
            });
        this._pedidos = pedidos;
    }
}