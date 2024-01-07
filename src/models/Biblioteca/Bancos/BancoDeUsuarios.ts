import { Cliente } from "../../exportador";
export class BancoDeUsuarios{

    private _listaDeClientes: Cliente[] = [];

    

    public set addCliente(cliente:Cliente){
        this._listaDeClientes.push(cliente)
    }

    public get todosOsClientes(): Cliente[]{
        return this._listaDeClientes;
    }

    // listas de todos os tipos de usuários (pertence a Biblioteca)
}   