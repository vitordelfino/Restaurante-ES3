import { Bebida } from './bebida';
import { Injectable, Inject } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class BebidaDao {

    private _bebidas: Bebida[] = [];

    constructor(
        @Inject('bebidaStorage') private _bebidaStorage: Storage
    ){
        this.carregaBd();
    }

    private carregaBd(){
        let bebibas: Bebida[] = [
            new Bebida('Coca-Cola - 600ml', 4.50),
            new Bebida('Suco de laranja - 500ml', 4.00),
            new Bebida('Skol', 8.00),
            new Bebida('Brahma', 8.00),
            new Bebida('Original', 9.00)
        ]
        bebibas.forEach(bebida => {
            this._bebidaStorage
                .set(bebida.nome, bebida);
        });

        this._bebidas = bebibas;
    }

    public getListaBebida(){
        if(this._bebidas.length == 0)
            this.carregaBd();
        return this._bebidas;
    }

}