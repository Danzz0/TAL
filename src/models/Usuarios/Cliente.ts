import { Cartao } from "./Cartao";
import { Usuario } from "./Usuario";

export class Cliente extends Usuario{
    
    // aquisicoes (atr..) => Lista de livros comprados 
    
    private _cartao: Cartao;
    private _cep: string;
    
     

    constructor(nome:string, email:string, senha:string, dataDeNascimento:Date, cep:string, cartao:Cartao){
        super(nome,email,senha,dataDeNascimento);

        this._cartao = cartao;
        this._cep = cep
    }


    // Cartão
    public get card() : Cartao {
        return this._cartao
    }
    public set card(v:Cartao){
        this._cartao = v;
    }

    //CEP
    public get cep(): string {
        return this._cep;
    }
    public set cep(value: string) {
        this._cep = value;
    }



    
    
    // CEP
    // Banco (referente ao ojeto cartão)
    // Bandeira do cartão (depende do banco) (referente ao ojeto cartão)
    // N° do cartão (16 digitos, atr..) (depende da bandeira do cartão) (referente ao ojeto cartão)
    // Código de segurança CVV (4 dígitos, atr..) (referente ao ojeto cartão)

}