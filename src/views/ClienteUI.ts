import * as rl from 'readline-sync'
import {Cartao, CartaoController, Cliente} from "../models/exportador"
export class ClienteUI{


    private _cardController: CartaoController = new CartaoController();

    public registrarConta(nome:string, email:string, senha:string, data:Date, cep:string): void{
        
        let numCard:string; // ?? eu declarei essa variável mas eu n dei valor nenhum à ela
        let card: Cartao; // ?? card é declarado com o tipo Cartao, mas dps recebe uma string(linha 85)
       
        
        
        
        if(rl.keyInYN('Voce possui um cartao?')){

            numCard = rl.question('Digite o n° do seu cartao: ');
            let cartaoExiste = this._cardController.existeCartao(numCard)

            if(!cartaoExiste){
                throw new Error("Cartão não encontrado :/")
            } 
            card = this._cardController.cartaoEncontrado  // vincula esse cartao à conta do cliente

        } else if(rl.keyInYN("O senhor deseja registrar um cartao?(S/N) ")){            
            card = this.registrarCartao();
        } else {
            card = null
        }
        console.log("processando dados... \n")

        let cli1 = new Cliente(nome, email, senha, data, cep, card);
        console.log(cli1);


    }



    public registrarCartao(): Cartao{
        let banco:string;
        let agencia:string; 
        let cardNum:string;
        let cvv:string;
        let saldo:number;
        console.log("===========Biblioteca===========");
        console.log(" Insira dos dados do seu cartão? \n");
        banco =  rl.question('Qual o banco? ');
        agencia = rl.question('Qual a sua agencia? ');
        cardNum = rl.question('Qual o seu numero do cartao?(16 digitos) ');
        cvv = rl.question('Qual o cvv?(3 digitos) ');
        saldo = rl.question('Qual o saldo? R$');
        console.log("processando dados... \n")

        const card1 = new CartaoController(banco, agencia, cardNum, cvv, saldo);
        
         // não possui memória (apaga os cartões toda vez que o código reinicia)

        return card1.cartaoSelected;
    }
}