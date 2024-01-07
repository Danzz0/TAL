import { Produto,Livro,} from "../../exportador";

export class BancoDeEstoque {
   
    // listas de todos os tipos de produtos (pertence a biblioteca)

    private _estoqueDeProdutos: Produto[][] = [];
    private _estoqueDeLivros: Livro[] = [];
    
    
    
    constructor(){
        this._estoqueDeProdutos.push(this._estoqueDeLivros)
    }



    public get meusLivros(): Livro[] {
        return this._estoqueDeLivros;
    }

    public set addLivro(book:Livro){
        this._estoqueDeLivros.push(book)
    }
    


    public get meusProdutos(): Produto[][] {
        return this._estoqueDeProdutos;
    }

    
}



