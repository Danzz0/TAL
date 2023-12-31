import { Produto } from "./Produto";

export class Livro extends Produto{
    private _titulo: string;
    private _anoDeLanc: Date;
    private _editora: string;
    private _autor: string;
    private _sinopse: string;
    private _precoDeVenda: number;

    constructor(id:number,tipoDeProduto:string, titulo: string, autor: string, editora: string, anoDeLancamento: Date, sinopse: string, preco:number) {
        super(id, tipoDeProduto)

        this._titulo = titulo;
        this._autor = autor;
        this._editora = editora;
        this._anoDeLanc = anoDeLancamento;
        this._sinopse = sinopse;
        this._precoDeVenda = preco;
    }


    //Titulo
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    //Autor
    public get autor(): string {
        return this._autor;
    }
    public set autor(value: string) {
        this._autor = value;
    }


    //Editora
    public get editora(): string {
        return this._editora;
    }
    public set editora(value: string) {
        this._editora = value;
    }

    //Lancamento
    public get lancamento(): Date {
        return this._anoDeLanc;
    }
    public set lancamento(value: Date) {
        this._anoDeLanc = value;
    }

    //Sinopse
    public get sinopse(): string {
        return this._sinopse;
    }
    public set sinopse(value: string) {
        this._sinopse = value;
    }

    //Preço do livro
    public get sale(): number {
        return this._precoDeVenda;
    }
    public set sale(value: number) {
        this._precoDeVenda = value;
    }



}