
import {Cartao} from "../../exportador";

export class BancoDeCartoes{
    private _listaDeCartoes: Cartao[] = [];


    public set addCartao(card:Cartao){
        this._listaDeCartoes.push(card);
    }


    public get meusCartoes(): Cartao[] {
        return this._listaDeCartoes;
    }

}