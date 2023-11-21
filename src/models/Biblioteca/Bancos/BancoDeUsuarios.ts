import {Cartao} from "../../exportador";
export class BancoDeUsuarios{

    private _listaDeCartoes: Cartao[];
   

    public addCartao(card:Cartao):void{
        this._listaDeCartoes.push(card);
    }


    public get meusCartoes(): Cartao[] {
        return this._listaDeCartoes;
    }

    // listas de todos os tipos de usuários (pertence a Biblioteca)
}   