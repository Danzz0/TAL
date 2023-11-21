import {Cartao, BancoDeUsuarios} from "../models/exportador";

export class CartaoController{
    private _numCard:string;



    public existeCartao(num:string, listaCard:Cartao[]): boolean{
        
        
        let encontrado = listaCard.some((value,index) =>{
                if(value.cardNum == num){
                    return true
                } else {
                    return false;
                }
            })

        // for(let i=0; i<listaCard.length; i++){
        //     if(listaCard[i]){

        //     }
        // }
        return encontrado
    }
}