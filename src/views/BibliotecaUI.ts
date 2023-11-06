import * as readlineSync from 'readline-sync'
import {Livro, Produto, Estoque} from '../models/exportador'
export class BibliotecaUI{
    


    public registrarLivro(): void{
        let titulo:string;
        let autor:string;
        let editora:string; 
        let info:string;
        let preco:number;
        console.log("===========Biblioteca===========");
        console.log("     Deseja criar um livro?     ");
        titulo = readlineSync.question('Qual é o seu título? ');
        editora = readlineSync.question('Qual é a sua editora? ');
        info = readlineSync.question('Qual é o a sua sinópse? ');
        autor = readlineSync.question('Qual é o seu autor? ');
        preco = readlineSync.question('Qual é o seu preço? ');
        console.log("processando dados... \n")
        

        const prod1 = new Livro("livro", titulo, autor, editora, new Date(), info, preco)
        const estoq = new Estoque(prod1);

        console.log("Seu Livro foi criado e armazenado no nosso estoque: \n")

        console.log(estoq.produtos);
    }
}

/*"Game of Thrones", "J. R. R. Martin", "Viena", new Date(), "OJASNISAI", 25*/