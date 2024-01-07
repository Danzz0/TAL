import { BancoDeCartoes, Cartao, BancoDeUsuarios, } from "../models/exportador";

export class CartaoController {
    private _cartaoSelected: Cartao;
    private _cartaoEncontrado: Cartao;


    constructor(nomeDoBanco?: string, agencia?: string, numeroDoCartao?: string, cvv?: string, saldoDoCartao?: number, meusCartoes?:Cartao[]) {
        if (numeroDoCartao && cvv) {

            let cartaoValido = this.validaCartao(numeroDoCartao, cvv);
            if (!cartaoValido) {
                throw new Error("Erro nos dados do cartão ou no CVV");
            }

            let cartaoJaExiste = this.existeCartao(numeroDoCartao, meusCartoes)
            if (cartaoJaExiste){
                throw new Error("Cartao já existe!");
            }

            this._cartaoSelected = new Cartao(nomeDoBanco, agencia, numeroDoCartao, cvv, saldoDoCartao);

        }

    }



    // Verifica se a string contém apenas dígitos numéricos e tem o formato correto
    private validaCartao(cardNum: string, cvv: string): boolean {

        const QUANTIDADE_CARD = /^\d{16}$/.test(cardNum.replace(/\s/g, ''));
        const TEM_NUMEROS_CARD = /^\d+$/.test(cardNum.replace(/\s/g, ''));
        const QUANTIDADE_CVV = /^\d{3}$/.test(cvv.replace(/\s/g, ''));
        const TEM_NUMEROS_CVV = /^\d+$/.test(cvv.replace(/\s/g, ''));



        if ((QUANTIDADE_CARD && TEM_NUMEROS_CARD) && (QUANTIDADE_CVV && TEM_NUMEROS_CVV)) {
            return true;
        }
        
        return false;
        

    }





    // se esse cartão já existir, retorna true 
    public existeCartao(num: string, listaCard: Cartao[]): Boolean {

        let encontrado = listaCard.some((value, index) => {
            if (value.numeroDoCartao == num) {
                this._cartaoEncontrado = value;
                return true;
            } else {
                return false;
            }
        })

        return encontrado;
    }


    public get cartaoSelected(): Cartao {
        return this._cartaoSelected;
    }

    
    public get cartaoEncontrado(): Cartao {
        let cardDiscovered = this._cartaoEncontrado;
        this._cartaoEncontrado = null; // limpa o último cartão encontrado

        return cardDiscovered;
    }




}