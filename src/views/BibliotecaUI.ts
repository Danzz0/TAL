import * as rl from 'readline-sync'
import {Livro, Produto, Estoque} from '../models/exportador'

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
        const estoq = new Estoque(prod1);

        console.log("Seu Livro foi criado e armazenado no nosso estoque: \n")

        console.log(estoq.produtos);
    }

    public menu(){

        let options = ['Registrar um livro', 'Registrar conta de cliente', 'Registrar cartão de crédito']

        console.log("===========Biblioteca===========");
        console.log("              MENU            \n");

        let index =  rl.keyInSelect(options, 'Which animal?');
        /*
            animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
            index = readlineSync.keyInSelect(animals, 'Which animal?');
            console.log('Ok, ' + animals[index] + ' goes to your room.');
        */
        console.log("Criar livro: ")
    }

    
}

/*"Game of Thrones", "J. R. R. Martin", "Viena", new Date(), "OJASNISAI", 25*/