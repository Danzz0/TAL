export class ProdutoController {
    private _tipo: string;
    private _meusProdutos:[] = []
    constructor(tipo, _meusProdutos){
        
    }

    //Tipo
    public get tipoDeProduto(): string {
        return this._tipo;
    }
    public set tipoDeProduto(value: string) {
        this._tipo = value;
    }
}