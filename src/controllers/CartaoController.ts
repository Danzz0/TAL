import { Cartao, BancoDeUsuarios, } from "../models/exportador";

export class CartaoController {
    private _cartaoSelected: Cartao;
    private _CardEstq = new BancoDeUsuarios();
    private _cartaoEncontrado: Cartao;


    constructor(nomeDoBanco?: string, agencia?: string, numeroDoCartao?: string, cvv?: string, saldoDoCartao?: number) {
        if (numeroDoCartao && cvv) {
            
            if (!this.verificaCartao(numeroDoCartao, cvv)) {
                throw new Error("Erro nos dados do cartão ou no CVV")
            }

            const cardVerificado = new Cartao(nomeDoBanco, agencia, numeroDoCartao, cvv, saldoDoCartao);
            this._CardEstq.addCartao(cardVerificado);
            this._cartaoSelected = cardVerificado;

            console.log(this._CardEstq.meusCartoes);

        } 

    }



    // Verifica se a string contém apenas dígitos numéricos e tem o formato correto
    private verificaCartao(cardNum: string, cvv: string): boolean {

        const QUANTIDADE_CARD = /^\d{16}$/.test(cardNum.replace(/\s/g, ''));
        const TEM_NUMEROS_CARD = /^\d+$/.test(cardNum.replace(/\s/g, ''));
        const QUANTIDADE_CVV = /^\d{3}$/.test(cvv.replace(/\s/g, ''));
        const TEM_NUMEROS_CVV = /^\d+$/.test(cvv.replace(/\s/g, ''));



        if ((QUANTIDADE_CARD && TEM_NUMEROS_CARD) && (QUANTIDADE_CVV && TEM_NUMEROS_CVV)) {
            return true;
        } else {
            return false;
        }

    }





    // se esse cartão já existir, retorna true 
    public existeCartao(num: string, listaCard: Cartao[] = this._CardEstq.meusCartoes): Boolean {


        let encontrado = listaCard.some((value, index) => {
            if (value.cardNum == num) {
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

    public get cartoes() {
        return this._CardEstq;
    }

    public get cartaoEncontrado(): Cartao {
        let cardDiscovered = this._cartaoEncontrado;
        this._cartaoEncontrado = null
        return cardDiscovered;
    }




}