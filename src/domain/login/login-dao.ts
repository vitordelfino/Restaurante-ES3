import { Garcom } from './../garcom/garcom';
import { Inject, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LoginDao {

    private _garcomLogado: Garcom;

    constructor(
        @Inject('loginStorage') private _loginStorage: Storage,
        @Inject('garcomStorage') private _garcomStorage: Storage
    ){}


    public cadastraLogin(garcom: Garcom, senha:string){
        console.log('iniciando cadastra login');
        return this._loginStorage
            .set(garcom.cpf, {senha: senha})
            .then(() => {
                console.log('login cadastrado');
                return true;
            })
            .catch(err => {
                console.log('erro ao cadastrar login');
                return false;
            });
    }

    public realizaLogin(usuario: string, senha: string){
       return this._loginStorage
            .get(usuario)
            .then(dado => {
                if(dado.senha != senha){
                    return false;
                }else{
                    return this._garcomStorage
                        .get(usuario)
                        .then(dado => {
                            let garcom: Garcom = new Garcom(dado.cpf, dado.nome);
                            this._garcomLogado = garcom;

                            return true;
                        });                    
                }
                    
                
            });
    }

    obtemGarcomLogado(){
       return this._garcomLogado;
    }
}