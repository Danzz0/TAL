

//EM MANUTENCAO


// import { Livro, NotaFiscal, Registro, Venda } from "../../exportador";

/*
export class BancoDeRegistros{
    // listas de todos os tipos de registros que serão organizada na Biblioteca pelo seu Controller 
    // (pertence a biblioteca)

    private _listaDeRegistros: Registro[][] = [];
    private _compras: NotaFiscal[] = [];
    private _vendas: Venda[] = [];
    


    //VAI SER IGUAL AO BANCO DE ESTOQUE!!!!!
    constructor(){

        
        

        this._listaDeRegistros.push(this._compras, this._vendas)
    }

    public addCompra(compra:NotaFiscal): void{
        // aqui vai ter que ter uma verificação update
        if(this.verificaCompra(compra)){
            console.log("O livro já existe!")
            // o livro já existe
        } else {
            this._compras.push(compra)
        }

       
        
        
        
            private _precoDeCompra: number;
            private _dataDeCompra: Date
            private _qtdDoProduto: number;
            private _nomeDoFornecedor: string;
            private _cnpjDoFornecedor: string; 
         
    }
    
        
    private verificaCompra(compra:NotaFiscal): boolean{
        var encontrado: boolean = false;
        for(let i = 0; i < this._listaDeRegistros.length; i++){
            for(let j = 0; j < this._listaDeRegistros[i].length; j++){
                if(this._listaDeRegistros[i][j].id == compra.id){
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


    public get minhasCompras(): NotaFiscal[] {
        return this._compras;
    }

    public get minhasVendas(): Venda[]{
        return this._vendas;
    }
    

    public get meusRegistros(): Registro[][] {
        return this._listaDeRegistros;
    }
    public set meusRegistros(value: Registro[][]) {
        this._listaDeRegistros = value;
    }

}

*/