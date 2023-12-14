import {Cartao, BancoDeUsuarios,} from "../models/exportador";

export class CartaoController{
    private _cartaoSelected: Cartao;
    private _CardEstq = new BancoDeUsuarios();
    
   

    constructor(nomeDoBanco?:string, agencia?:string, numeroDoCartao?:string, cvv?:string, saldoDoCartao?:number){
        if(this.verificaCartao(numeroDoCartao, cvv)){
            const cardVerificado = new Cartao(nomeDoBanco, agencia, numeroDoCartao, cvv, saldoDoCartao);
            this._CardEstq.addCartao(cardVerificado);
            this._cartaoSelected = cardVerificado;
            
            console.log(this._CardEstq.meusCartoes);
        } else {
            throw new Error("Erro nos dados do cartão ou no CVV")
        }
    }
    


    // Verifica se a string contém apenas dígitos numéricos e tem o formato correto
    private verificaCartao(cardNum: string, cvv: string): boolean {

      
        const VerificaQTD_Card = /^\d{16}$/.test(cardNum.replace(/\s/g, ''));
        const VerificaNUM_Card = /^\d+$/.test(cardNum.replace(/\s/g, ''));
        const VerificaQTD_Cvv = /^\d{3}$/.test(cvv.replace(/\s/g, ''));
        const VerificaNUM_Cvv = /^\d+$/.test(cvv.replace(/\s/g, ''));


        if ((VerificaQTD_Card && VerificaNUM_Card) && (VerificaQTD_Cvv && VerificaNUM_Cvv)) {
            return true;
        } else {
            return false;
        }

    }
    
    
    
    
    
    // se esse cartão já existir, retorna true 
    public existeCartao(num:string, listaCard:Cartao[] = this._CardEstq.meusCartoes): Boolean{
        
        
        let encontrado = listaCard.some((value,index) =>{
                if(value.cardNum == num){
                    this._cartaoSelected = value;
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
    

}