import { Produto, Compra } from "../exportador";

export class Estoque {
   
    

    private _listaDeProdutos: Produto[] = [];

    // private _listaDeCompras:Compra[][] = []


    
    constructor(meuProduto:Produto){

      this._listaDeProdutos.push(meuProduto)

    }

    



    
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