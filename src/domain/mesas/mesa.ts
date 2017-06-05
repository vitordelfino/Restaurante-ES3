import { Cliente } from './../cliente/cliente';
import { Garcom } from './../garcom/garcom';
export class Mesa {
    
    constructor(public numero: number, public ocupada: boolean, public garcom: Garcom, public cliente: Cliente){
        if(garcom == null)
            this.garcom = new Garcom('','');
        

        if(cliente == null)
            this.cliente = new Cliente('','','');
    }

}