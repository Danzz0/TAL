import * as rl from 'readline-sync'
import { BancoDeRegistros } from '../models/Biblioteca/Bancos/BancoDeRegistros';
import {Livro, Produto, BancoDeEstoque, Cartao, Cliente, CartaoController, BancoDeUsuarios, NotaFiscal} from '../models/exportador'

export class BibliotecaUI{
    
    
    private _Estq = new BancoDeEstoque();
    private _EstqRegister = new BancoDeRegistros();
    

    public registrarLivro(): void{ // está aceitando valores inválidos (controller tem que ajeitar)
        let titulo:string;
        let autor:string;
        let editora:string; 
        let info:string;
        let preco:number;
        let id:number;
        console.log("===========Biblioteca===========");
        console.log("     Deseja criar um livro?     \n");
        titulo =  rl.question('Qual o titulo? ');
        editora = rl.question('Qual a sua editora? ');
        info = rl.question('Qual a sua sinopse? ');
        autor = rl.question('Qual o seu autor? ');
        preco = rl.question('Qual o seu preco? R$');
        id = rl.question('Crie um id: ');

        console.log("processando dados... \n")
        

        const book1 = new Livro(id,"livro", titulo, autor, editora, new Date(), info, preco)
        this._Estq.addLivro(book1);
        console.log("Seu Livro foi criado e armazenado no nosso estoque: \n")


        //Esse sistema deve acontecer antes de um livro ser registrado (Autor: Funcionário/ADM)
        //Antes de um livro ser registrado no sistema, ele deve ser comprado!
        const compraDeLivro = new NotaFiscal(1,book1.sale, new Date(), 1 , "BookWire", " XX. XXX. XXX/0001-XX.", book1);
        this._EstqRegister.addCompra(compraDeLivro)

        console.log(this.showProdutos(this._Estq.meusProdutos));
    }



    public showProdutos(prods:Produto[][]): string{
        let response:string = "";
        let tipo:string = "";
        let elements:string = "";
       
        for(let i=0; i < prods.length; i++){
            tipo = `${prods[i][0].constructor.name}` 
            for(let j = 0; j < prods[i].length; j++){
                for (const [key, value] of Object.entries(prods[i][j])){
                    elements += `${key}: ${value.splice()}\n` 
                }
            }
            
            response += `${tipo}s: {${elements}},\n`   
        }
        
        return response;
    }


    public registrarConta_CLI(): void{
        let nome:string;
        let email:string;
        let pass:string;
        let data:Date = new Date(); 
        let cep:string;
        let numCard:string;
        let card: Cartao;
       

        console.log("===========Biblioteca===========");
        console.log("     Deseja criar uma conta?  \n");
        nome =  rl.question('Digite o seu nome: ');
        email = rl.question('Digite o seu email: ');
        pass = rl.question('Crie uma senha: ', {hideEchoBack:true});
        // data = rl.question('Digite a sua data de nascimento:') (a ser implementado);
        cep = rl.question('Digite seu o cep: ');
        
        if(rl.keyInYN('Voce possui um cartao?')){
            card = rl.question('Digite o n° do seu cartao: ');
            let ctrlCard = new CartaoController();
            //se o cartão existe:
            if(ctrlCard.existeCartao(numCard)){
                card = ctrlCard.cartaoSelected;       // vincula esse cartao à conta do cliente
            } else {
                if(rl.keyInYN('O senhor deseja registrar um cartao?')){
                    card = this.registrarCartao();
                } else {
                    card = null;
                    console.log("Ok, conta sendo criada...")
                }
            }
        } else if(rl.keyInYN("O senhor deseja registrar um cartao?(S/N) ")){            
            card = this.registrarCartao();
        } else {
            card = null
        }
        console.log("processando dados... \n")

        let cli1 = new Cliente(nome, email, pass, data, cep, card);
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
        card1.cartaoSelected
         // não possui memória (apaga os cartões toda vez que o código reinicia)

        return card1.cartaoSelected;
    }

   




    public menu(){

        let options = ['Registrar um livro', 'Registrar conta de cliente', 'Registrar cartao de credito']

        console.log("===========Biblioteca===========");
        console.log("              MENU            \n");
        let index =  rl.keyInSelect(options, 'O que voce quer fazer?', {cancel: 'CANCELAR'});
        
        if (index == -1) {
            console.log("Encerrando processos...");
        } else {
            switch(options[index]){
                case 'Registrar um livro':
                    console.log(`ok, excecutando ${options[index]} \n`);
                    this.registrarLivro();

                    break;
                case 'Registrar conta de cliente':
                    console.log(`ok, excecutando ${options[index]} \n`);
                    this.registrarConta_CLI();
                    console.log("Finalizado CLI");

                    break;
                case 'Registrar cartao de credito':
                    console.log(`ok, excecutando ${options[index]} \n`);
                    this.registrarCartao();
                    console.log("Finalizando CRD");

                    break;
                default:

                    break;
                
            }    
        }
        
    }

    
}




  /* testes da readlineSync

        // Handle the secret text (e.g. password).
            var favFood = rl.question('What is your favorite food? ', {
                hideEchoBack: true // The typed text on screen is hidden by `*` (default).
        });

        constructor(nome:string, email:string, senha:string, dataDeNascimento:Date, cep:string, cartao:Cartao){
        super(nome,email,senha,dataDeNascimento);

        this._cartao = cartao;
        this._cep = cep
    }
    
    */