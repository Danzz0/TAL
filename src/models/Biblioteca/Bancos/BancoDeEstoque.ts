import { Produto,Livro,} from "../../exportador";

export class BancoDeEstoque {
   
    // listas de todos os tipos de produtos (pertence a biblioteca)

    private _estoqueDeProdutos: Produto[][] = [];
    private _estoqueDeLivros: Livro[] = [];
    
    
    
    constructor(){
        this._estoqueDeProdutos.push(this._estoqueDeLivros)
    }

    public addLivro(book:Livro): void{
        // aqui vai ter que ter uma verificação update
        if(this.verificaProd(book)){
            console.log("O livro já existe!")
            // o livro já existe
        } else {
            this._estoqueDeLivros.push(book)
        }

       
        
        
        /*
            private _precoDeCompra: number;
            private _dataDeCompra: Date
            private _qtdDoProduto: number;
            private _nomeDoFornecedor: string;
            private _cnpjDoFornecedor: string; 
         */
    }
    
        
    private verificaProd(prod:Produto): boolean{
        var encontrado: boolean = false;
        for(let i = 0; i < this._estoqueDeProdutos.length; i++){
            for(let j = 0; j < this._estoqueDeProdutos[i].length; j++){
                if(this._estoqueDeProdutos[i][j].id == prod.id){
                    // o produto ja existe
                    encontrado = true;
                    break;
                } else {
                    encontrado = false;
                    break;
                }
            }
            if(encontrado){
                break;
            }
            
        }

        return encontrado;
    }


    public get meusLivros(): Livro[] {
        return this._estoqueDeLivros;
    }
    

    public get meusProdutos(): Produto[][] {
        return this._estoqueDeProdutos;
    }
    public set meusProdutos(value: Produto[][]) {
        this._estoqueDeProdutos = value;
    }

    
}



