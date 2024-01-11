
import {Cartao, Cliente, Livro} from "../models/exportador"
export class ClienteController{
    private _clienteSelected: Cliente;
    private _clienteEncontrado: Cliente;
    private _livrosComprados: Livro[];

    constructor(id?:number,nome?:string, email?:string, senha?:string, data?:Date, cep?: string, card?:Cartao, listaDeClientes?: Cliente[]){
        if(id){

            if(this.existeCliente(id, listaDeClientes)){
                throw new Error("Cliente já cadastrado :/")
            }

            this._clienteSelected = new Cliente(id, nome, email, senha, data, cep, card)
        }
    }




    // Vou aplicar polimorfismo método irá funcionar com senha e id
    public existeCliente(chaveExistente: any, listaDeClientes: Cliente[]): Boolean {
        let encontrado:boolean;
        let chaveProcurada:any;
        let chaveNumerica =  typeof chaveExistente == 'number';
        
            
            encontrado = listaDeClientes.some((cliente, index) => {
                
                if( chaveNumerica ){
                    chaveProcurada = cliente.id
                } else {
                    chaveProcurada = cliente.senha
                }

                
                if (chaveProcurada == chaveExistente) {
                    this._clienteEncontrado = cliente;
                    return true;
                } 
                return false;
                
            })
        

        return encontrado;
    }


    public get clienteEncontrado(): Cliente {
        let clienteDiscovered = this._clienteEncontrado;
        this._clienteEncontrado = null; // limpa o último cliente encontrado

        return clienteDiscovered;
    }

    public get clienteSelected(): Cliente {
        return this._clienteSelected;
    }
    

}