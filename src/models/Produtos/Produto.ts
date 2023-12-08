export abstract class Produto{
    private _tipo: string;
    private _id: number;
    
    constructor(id:number, tipoDeProduto:string){
        this.id = id;
        this._tipo = tipoDeProduto;
    }
    //Tipo
    public get tipoDeProduto(): string {
        return this._tipo;
    }
    public set tipoDeProduto(value: string) {
        this._tipo = value;
    }


    //ID
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}