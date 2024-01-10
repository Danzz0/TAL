import * as input from 'readline-sync'
import { Cartao, CartaoController,  ClienteController, BancoDeCartoes, BancoDeUsuarios} from "../models/exportador"
import { UI } from "../main"
export class ClienteUI{

    private _cardController: CartaoController = new CartaoController();
    private _CardEstq: BancoDeCartoes = new BancoDeCartoes();
    private _clienteEstq: BancoDeUsuarios = new BancoDeUsuarios();
    private _clienteController: ClienteController = new ClienteController();


    public menu(){
            // Futuras Opções:
        // 'Exibir Catálogo', 'Comprar Livro', 'Adicionar ao carrinho',

        let options = ['Registrar cartao de credito', 'Voltar ao menu principal'];

        console.log("===========Biblioteca===========");
        console.log("              MENU            \n");
        let index =  input.keyInSelect(options, 'O que voce quer fazer?', {cancel: 'CANCELAR'});
        
        
        
        switch(options[index]){
            case 'Registrar cartao de credito':
                this.registrarCartao();
                break;

            case 'Voltar ao menu principal':
                UI.menu();
                break;

            default:
                break;
        }
    }

   
    public registrarConta(nome:string, email:string, senha:string, data:Date, cep:string): void{
        
        let numCard:string; 
        let card: Cartao; 
        let id = input.question('Digite um id: ');
        
        
        if(input.keyInYN('Voce possui um cartao?')){

            numCard = input.question('Digite o n° do seu cartao: ');
            let cartaoExiste = this._cardController.existeCartao(numCard, this._CardEstq.meusCartoes);

            if(!cartaoExiste){
                throw new Error("Cartão não encontrado :/");
            } 
            card = this._cardController.cartaoEncontrado  // vincula esse cartao à conta do cliente

        } else if(input.keyInYN("O senhor deseja registrar um cartao?(S/N) ")){            
            card = this.registrarCartao();
        } else {
            card = null;
        }
        console.log("processando dados... \n");

        this._clienteController = new ClienteController(Number(id), nome, email, senha, data, cep, card, this._clienteEstq.todosOsClientes);
        this._clienteEstq.addCliente = this._clienteController.clienteSelected;
        this.menu();


    }



    public registrarCartao(): Cartao{
        let banco:string;
        let agencia:string; 
        let cardNum:string;
        let cvv:string;
        let saldo:number;
        console.log("===========Biblioteca===========");
        console.log(" Insira dos dados do seu cartão? \n");
        banco =  input.question('Qual o banco? ');
        agencia = input.question('Qual a sua agencia? ');
        cardNum = input.question('Qual o seu numero do cartao?(16 digitos) ');
        cvv = input.question('Qual o cvv?(3 digitos) ');
        saldo = input.question('Qual o saldo? R$');
        console.log("processando dados... \n");

        this._cardController = new CartaoController(banco, agencia, cardNum, cvv, saldo, this._CardEstq.meusCartoes);
        this._CardEstq.addCartao = this._cardController.cartaoSelected;
        
         // não possui memória (apaga os cartões toda vez que o código reinicia)

        return this._cardController.cartaoSelected;
    }


  

}