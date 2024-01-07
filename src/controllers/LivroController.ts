import { Livro, BancoDeEstoque } from "../models/exportador";

export class LivroController{
    private _livroSelected: Livro;
    private _Estq = new BancoDeEstoque();
    
    constructor(id?:number, tipoDeProduto?:string, titulo?:string, autor?:string, editora?:string, dataDeLancamento?:Date, info?:string, preco?:number  ){

        if(this.existeLivro(id, this._Estq.meusLivros)){
            throw new Error("Este livro já foi cadastrado"); 
        }

        const book = new Livro(id, tipoDeProduto, titulo, autor, editora, dataDeLancamento, info, preco)
        this._livroSelected = book;
        this._Estq.addLivro = this._livroSelected
        

    }




    public existeLivro(id:number, listaLivros:Livro[]): Boolean{
        
        
        let encontrado = listaLivros.some((value,index) =>{
                if(value.id == id){
                    this._livroSelected = value;
                    return true;
                } else {
                    return false;
                }
            })

        return encontrado;
    }










    public get livroSelected(): Livro {
        return this._livroSelected;
    }

    public get Estq() {
        return this._Estq;
    }
    




}





/*

    console.log("===========Biblioteca===========");
        console.log("     Deseja criar um livro?     \n");
        titulo =  rl.question('Qual o titulo? ');
        editora = rl.question('Qual a sua editora? ');
        info = rl.question('Qual a sua sinopse? ');
        autor = rl.question('Qual o seu autor? ');
        preco = rl.question('Qual o seu preco? R$');
        id = rl.question('Crie um id?: ');

        console.log("processando dados... \n")
        

        const book1 = new Livro(id,"livro", titulo, autor, editora, new Date(), info, preco)
        this._Estq.addLivro(book1);
        console.log("Seu Livro foi criado e armazenado no nosso estoque?: \n")
*/