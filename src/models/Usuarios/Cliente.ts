import { Usuario } from "../mothers/Usuario";

export class Cliente extends Usuario{
    
    // aquisicoes (atr..) => Lista de livros comprados 
    private _cep:string;
    private _banco:string;

    // CEP
    // Banco
    // Bandeira do cartão (depende do banco)
    // N° do cartão (16 digitos, atr..) (depende da bandeira do cartão)
    // Código de segurança CVV (4 dígitos, atr..)

}