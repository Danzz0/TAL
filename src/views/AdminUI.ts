
import * as rl from 'readline-sync';
import {LivroController, Produto} from '../models/exportador'

export class AdminUI{


    public menu(){
        let options = ['Registrar livro', 'Atualizar Produto', 'Deletar Produto', 'Exibir Estoque' ]

        console.log("===========Biblioteca===========");
        console.log("              MENU            \n");
        let index =  rl.keyInSelect(options, 'O que voce quer fazer?', {cancel: 'CANCELAR'});
        
        
        
        switch(options[index]){
            case 'Registrar livro':
                console.log(`ok, excecutando ${options[index]} \n`);
                this.registrarLivro()
                break;
            case 'Atualizar Produto':
                console.log(`ok, excecutando ${options[index]} \n`);
                
                // método que atualiza

                break;
            case 'Deletar Produto':
                console.log(`ok, excecutando ${options[index]} \n`);

                // método que deleta

                break;
            case 'Exibir Estoque':
                console.log(`ok, excecutando ${options[index]} \n`);

                // this.showProdutos();
                
                break;
            default:
                console.log("Finalizado ADM");
                break;
                
        }
    }


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
        

        const bookCTRL = new LivroController(id,"livro", titulo, autor, editora, new Date(), info, preco)
        console.log("Seu Livro foi criado e armazenado no nosso estoque: \n")


        //Esse sistema deve acontecer antes de um livro ser registrado (Autor: Funcionário/ADM)
        //Antes de um livro ser registrado no sistema, ele deve ser comprado!
        // const compraDeLivro = new NotaFiscal(1,bookCTRL.livroSelected.sale, new Date(), 1 , "BookWire", " XX. XXX. XXX/0001-XX.", bookCTRL.livroSelected);
        // this._EstqRegister.addCompra(compraDeLivro)

        // console.log(this.showProdutos(bookCTRL.Estq.meusProdutos));
    }



    public showProdutos(prods:Produto[][]): string{
        let response:string = "";
        let tipo:string = "";
        let elements:string = "";
       
        for(let i=0; i < prods.length; i++){
            tipo = `${prods[i][0].constructor.name}` 

            for(let j = 0; j < prods[i].length; j++){
                for (const [key, value] of Object.entries(prods[i][j])){
                    elements += `${key}: ${value}\n` 
                }
            }
            
            response += `${tipo}s: {${elements}},\n`   
        }
        
        return response;
    }


}