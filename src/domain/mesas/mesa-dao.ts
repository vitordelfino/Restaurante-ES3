import { Cliente } from './../cliente/cliente';
import { Garcom } from './../garcom/garcom';
import { Mesa } from './mesa';
import { Injectable, Inject } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class MesaDao {

    private _carregado: number = 0;
    private _mesas: Mesa[] = [];

    constructor(
        @Inject('mesaStorage') private _mesaStorage: Storage
    ){
        this.carregaBd();
    }

    private carregaBd(){
        if(this._carregado == 0){
            console.log('carregando bd com mesas');
            let mesas = [
                new Mesa(1, false, null, null),
                new Mesa(2, false, null, null),
                new Mesa(3, false, null, null),
                new Mesa(4, false, null, null),
                new Mesa(5, true, new Garcom('12345678910','Garcom Teste'), new Cliente('12345678910','Cliente Teste','11912345678')),
                new Mesa(6, false, null, null)
            ]

            mesas.forEach(mesa => {
                this._mesaStorage.set(mesa.numero.toString(), mesa);
            });
            this._mesas = mesas;
            this._carregado = 1;
        }        
    }

    atualizaMesa(mesa: Mesa){
        this._mesaStorage
            .set(mesa.numero.toString(), mesa);
    }

    listaMesas(){
        let mesas = [];
        this._mesaStorage
            .forEach(mesa => {
                mesas.push(mesa);
        });
        this._mesas = mesas;
        return this._mesas;
    }

}