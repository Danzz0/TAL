export abstract class Produto {
    private _tipoDeProduto: string;
    private _nomeDoFornecedor: string;
    private _cnpjDoFornecedor: string;
    private _preco: number;
    private _dataDeCompra: Date
    private _qtdDoProduto: number;


    //Tipo
    public get tipo(): string {
        return this._tipoDeProduto;
    }
    public set tipo(value: string) {
        this._tipoDeProduto = value;
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

    //Preço
    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        this._preco = value;
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



}