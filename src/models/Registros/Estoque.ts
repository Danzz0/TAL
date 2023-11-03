import { Produto, Compra } from "../exportador";

export class Estoque {
   
    

    private _listaDeProdutos: Produto[] = [];
    private _produtosOrganizados: { [key: string]: Produto[] } = {}; // minha key vai servir como índice
    // private _listaDeCompras:Compra[][] = []


    
    constructor(meuProduto:Produto){

        this._listaDeProdutos.push(meuProduto)
        

        for (let produto of this._listaDeProdutos) { // for of serve para iterar entre os valores dos elementos
            //produto = Produto[i]
            const tipo = produto.constructor.name;
            // tipo = "Livro, Caderno...."
            if (!this._produtosOrganizados[tipo]) {
                this._produtosOrganizados[tipo] = [];
            }
            this._produtosOrganizados[tipo].push(produto);
        }

    }



    get produtos(){
        let response:string;

        for (const tipo in this._produtosOrganizados) { // for in serve para iterar entre os valores dos índices dos elementos
            response +=`    ${tipo}: ${JSON.stringify(this._produtosOrganizados[tipo])}`;
        }

        return response
    }



    /*
    
        const produtosOrganizados: { [key: string]: any[] } = {};

        for (const produto of listaDeProdutos) {
            const tipo = produto.constructor.name;
            if (!produtosOrganizados[tipo]) {
                produtosOrganizados[tipo] = [];
            }
            produtosOrganizados[tipo].push(produto);
        }

        console.log("_listaDeProdutos:");
        for (const tipo in produtosOrganizados) {
            console.log(`    ${tipo}: ${JSON.stringify(produtosOrganizados[tipo])}`);
        }
            
            
    */
    



    
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