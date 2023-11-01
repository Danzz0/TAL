export abstract class Usuario{
    private _nome: string;
    private _email: string;
    private _senha:string;
    private _nasc:Date;


    constructor(nome:string, email:string, senha:string, dataDeNascimento:Date){
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._nasc = dataDeNascimento
    } 


    //Nome
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }


    //Email
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    //Senha
    public get senha(): string {
        return this._senha;
    }
    public set senha(value: string) {
        this._senha = value;
    }

    //Data de Nascimento
    public get nasc(): Date {
        return this._nasc;
    }
    public set nasc(value: Date) {
        this._nasc = value;
    }
}