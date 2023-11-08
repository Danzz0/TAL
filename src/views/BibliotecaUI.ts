import * as rl from 'readline-sync'
import {Livro, Produto, BancoDeEstoque, Cartao, Cliente} from '../models/exportador'

export class BibliotecaUI{
    


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


    public RegistrarConta_CLI(): void{

    }


    public registrarCartao(): void{
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
        console.log(card1);
        // const estoq2 = new Estoque(card1) vai ser implementado 
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
                    console.log(`ok, excecutando ${options[index]} \n`)
                    this.registrarLivro();

                    break;
                case 'Registrar conta de cliente':
                    console.log(`ok, excecutando ${options[index]} \n`)
                    console.log("Finalizado CLI");

                    break;
                case 'Registrar cartão de crédito':
                    console.log("Finalizando CRD");
                    console.log(`ok, excecutando ${options[index]} \n`)

                    break;
                default:

                    break;
                
            }    
        }
        
    }

    
}

/*"Game of Thrones", "J. R. R. Martin", "Viena", new Date(), "OJASNISAI", 25*/