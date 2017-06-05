import { LoginDao } from './../login/login-dao';
import { Garcom } from './garcom';
import { Storage } from '@ionic/storage';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class GarcomDao {

    constructor(
        @Inject('garcomStorage') private _garcomStorage: Storage,
        private _dao: LoginDao
    ){}


    public cadastrarGarcom(garcom: Garcom, senha: string){
        console.log('chamando cadastra login');
        return this._dao.cadastraLogin(garcom, senha)
            .then(() => {

                console.log('cadastrando garçom');

                return this._garcomStorage
                    .set(garcom.cpf, garcom)
                    .then(() => {

                        console.log('Garçom cadastrado');
                        return true;

                    })
                    .catch(() => {

                        console.log('Erro ao cadastrar Garçom');
                        return false;
                    })
            }).catch(err => {

                console.log(err);
                return false;

            });
    }
    
    public getGarcom(cpf: string){  
        let garcom: Garcom;
        this._garcomStorage
            .get(cpf)
            .then(dado => garcom = new Garcom(dado.cpf, dado.nome)).catch(err => {
                console.log(err);
                return null;
            });

            return garcom;
    }
   
}