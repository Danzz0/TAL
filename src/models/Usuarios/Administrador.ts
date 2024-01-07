import { Usuario } from "../exportador";

export class Administrador extends Usuario{
    private _id:string;

    constructor(nome:string, email:string, senha:string, dataDeNascimento:Date, id:string){
        super(nome,email,senha,dataDeNascimento)

        this._id = id;
    }


}