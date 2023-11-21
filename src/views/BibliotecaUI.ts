import * as rl from 'readline-sync'
import {Livro, Produto, BancoDeEstoque, Cartao, Cliente, CartaoController, BancoDeUsuarios} from '../models/exportador'

export class BibliotecaUI{
    
    private _CardEstq = new BancoDeUsuarios();

    public registrarLivro(): void{ // está aceitando valores inválidos (controller tem que ajeitar)
        let titulo:string;
        let autor:string;
        let editora:string; 
        let info:string;
        let preco:number;
        console.log("===========Biblioteca===========");
        console.log("     Deseja criar um livro?     \n");
        //const prompt = iconv.decode(rl.question(iconv.encode("Digite sua mensagem:", "utf8")), 'utf8');
        titulo =  rl.question('Qual o titulo? ');
        editora = rl.question('Qual a sua editora? ');
        info = rl.question('Qual a sua sinopse? ');
        autor = rl.question('Qual o seu autor? ');
        preco = rl.question('Qual o seu preco? R$');
        console.log("processando dados... \n")
        

        const prod1 = new Livro("livro", titulo, autor, editora, new Date(), info, preco)
        const estoq = new BancoDeEstoque(prod1); // vou ter que criar um método para adicionar objetos

        console.log("Seu Livro foi criado e armazenado no nosso estoque: \n")

        console.log(estoq.produtos);
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
            if(ctrlCard.existeCartao(numCard, this._CardEstq.meusCartoes)){
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
        //const prompt = iconv.decode(rl.question(iconv.encode("Digite sua mensagem:", "utf8")), 'utf8');
        banco =  rl.question('Qual o banco? ');
        agencia = rl.question('Qual a sua agencia? ');
        cardNum = rl.question('Qual o seu n° do cartao? R$');
        cvv = rl.question('Qual o cvv? ');
        saldo = rl.question('Qual o saldo? ');
        console.log("processando dados... \n")

        const card1 = new Cartao(banco, agencia, cardNum, cvv, saldo);
        
        this._CardEstq.addCartao(card1);
        console.log(this._CardEstq.meusCartoes); // não possui memória (apaga os cartões toda vez que o código reinicia)

        return card1;
    }




    public menu(){

        let options = ['Registrar um livro', 'Registrar conta de cliente', 'Registrar cartão de crédito']

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
                case 'Registrar cartão de crédito':
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

/*"Game of Thrones", "J. R. R. Martin", "Viena", new Date(), "OJASNISAI", 25*/


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