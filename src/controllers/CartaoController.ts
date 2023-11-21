import {Cartao, BancoDeUsuarios} from "../models/exportador";

export class CartaoController{
    private _cartaoSelected: Cartao;
    


    public existeCartao(num:string, listaCard:Cartao[]): Boolean{
        
        
        let encontrado = listaCard.some((value,index) =>{
                if(value.cardNum == num){
                    this._cartaoSelected = value;
                    return true;
                } else {
                    return false;
                }
            })

        // for(let i=0; i<listaCard.length; i++){
        //     if(listaCard[i]){

        //     }
        // }
        return encontrado;
    }


    public get cartaoSelected(): Cartao {
        return this._cartaoSelected;
    }
    

}