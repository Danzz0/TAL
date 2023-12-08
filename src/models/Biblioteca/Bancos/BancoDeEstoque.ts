import { Produto,Livro,} from "../../exportador";

export class BancoDeEstoque {
   
    // listas de todos os tipos de produtos (pertence a biblioteca)

    private _listaDeProdutos: Produto[][] = [];
    private _livros: Livro[] = [];
    
    
    
    constructor(){

        
        /*
       
        */

        this._listaDeProdutos.push(this._livros)
    }

    public addLivro(book:Livro): void{
        // aqui vai ter que ter uma verificação update
        if(this.verificaProd(book)){
            console.log("O livro já existe!")
            // o livro já existe
        } else {
            this._livros.push(book)
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
        for(let i = 0; i < this._listaDeProdutos.length; i++){
            for(let j = 0; j < this._listaDeProdutos[i].length; j++){
                if(this._listaDeProdutos[i][j].id == prod.id){
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
        return this._livros;
    }
    

    public get meusProdutos(): Produto[][] {
        return this._listaDeProdutos;
    }
    public set meusProdutos(value: Produto[][]) {
        this._listaDeProdutos = value;
    }

    /*
        [ [livro,livro],
          [livro,livro],
          [livro,livro],
                         ]

    */



    // get produtos(){
    //     let response:string ="";

   

    //     return response
    // }



    
}



/*
    - Produtos - (Produtos que possuo e suas informações /Se refere ao produto em si/) 
    Estoque{
        
        _listaDeProdutos:[
            Livro: [{_titulo: "Game of thrones", _editora: "Darkside"}, {_titulo: "Game of thrones", _editora: "Darkside"}],
            Gibi: [{_titulo: "Turma da mônica", _editora: "viena"}, {_titulo: "Turma da mônica", _editora: "viena"}],
            Caderno: [ {_marca: "tilibra"},{_marca: "tilibra"}]
        ],
    }

    - Compras - (Compras que realizei e suas informações  /Se refere as informações sobre a compra do produto/ )
    [
        Livro[{},{},{}],
        Gibi[{},{},{}],
        Caderno[{},{},{}]
    ]



*/