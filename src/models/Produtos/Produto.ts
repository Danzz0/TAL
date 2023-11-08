export abstract class Produto{
    private _tipo: string;

    constructor(tipoDeProduto:string){
        this._tipo = tipoDeProduto;
    }
    //Tipo
    public get tipoDeProduto(): string {
        return this._tipo;
    }
    public set tipoDeProduto(value: string) {
        this._tipo = value;
    }
}