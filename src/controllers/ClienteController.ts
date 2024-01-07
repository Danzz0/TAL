
import {Cartao, Cliente, BancoDeUsuarios} from "../models/exportador"
export class ClienteController{
    private _clienteSelected: Cliente;
    private _clienteEncontrado: Cliente;

    constructor(id?:number,nome?:string, email?:string, senha?:string, data?:Date, cep?: string, card?:Cartao, listaDeClientes?: Cliente[]){
        if(this.existeCliente(id, listaDeClientes)){
            throw new Error("Cliente já cadastrado :/")
        }

        this._clienteSelected = new Cliente(id, nome, email, senha, data, cep, card)
        console.log(this._clienteSelected)
    }


    public existeCliente(num: number, listaDeClientes: Cliente[]): Boolean {

        let encontrado = listaDeClientes.some((value, index) => {
            if (value.id == num) {
                this._clienteEncontrado = value;
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