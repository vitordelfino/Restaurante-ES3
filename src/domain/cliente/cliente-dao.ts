import { Cliente } from './cliente';
import { Injectable, Inject } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ClienteDao {

    constructor(
        @Inject('clienteStorage') private _clienteStorage: Storage
    ){}

    getCliente(cpf: string){
        return this._clienteStorage
            .get(cpf);         
    }

    cadastrar(cliente: Cliente){
        return this._clienteStorage
            .set(cliente.cpf, cliente);
    }

}