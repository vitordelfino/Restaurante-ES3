import { Comida } from './comida';
import { Injectable, Inject } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ComidaDao {

    private _comidas: Comida[] = [];

    constructor(
        @Inject('comidaStorage') private _comidaStorage: Storage
    ){
        this.carregaBd();
    }


    private carregaBd(){
        let comidas: Comida[] = [
            new Comida('Frango aparmegiana','Arroz, Feijão e Fritas', 24.50),
            new Comida('Contra-filé aparmegiana','Arroz, Feijão e Fritas', 24.50),
            new Comida('Contra-filé acebolado','Arroz, Feijão e Fritas', 28.30),
            new Comida('Feijoada','Arroz, Feijão preto, farofa e couve', 26.50)
        ]
        comidas.forEach(comida => {
            this._comidaStorage
                .set(comida.nome, comida);
        });

        this._comidas = comidas;
    }

    public getListaComida(){
        if(this._comidas.length == 0)
            this.carregaBd();
        return this._comidas;
    }
}