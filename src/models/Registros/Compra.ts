export class Compra {
    private _precoDeCompra: number;
    private _dataDeCompra: Date
    private _qtdDoProduto: number;
    private _nomeDoFornecedor: string;
    private _cnpjDoFornecedor: string;
    
    constructor(){

    }

    
    //Preço
    public get precoDeCompra(): number {
        return this._precoDeCompra;
    }
    public set precoDeCompra(value: number) {
        this._precoDeCompra = value;
    }

    //Data de compra
    public get data(): Date {
        return this._dataDeCompra;
    }
    public set data(value: Date) {
        this._dataDeCompra = value;
    }

    //Quantidade
    public get qtd(): number {
        return this._qtdDoProduto;
    }
    public set qtd(value: number) {
        this._qtdDoProduto = value;
    }


    
    //Nome do Fornecedor
    public get nomeFornec(): string {
        return this._nomeDoFornecedor;
    }
    public set nomeFornec(value: string) {
        this._nomeDoFornecedor = value;
    }

    //CNPJ
    public get cnpj(): string {
        return this._cnpjDoFornecedor;
    }
    public set cnpj(value: string) {
        this._cnpjDoFornecedor = value;
    }







}