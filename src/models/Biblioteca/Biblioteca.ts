export class Biblioteca{
    private _nome: string;
    private _cnpj: string;
    private _local: string;
    private _dono: string;


    public get nome(): string {
        return this._nome;
    }

    public set nome(_nome: string) {
        this._nome = _nome;
    }

    public get cnpj(): string {
        return this._cnpj;
    }

    public set cnpj(_cnpj: string) {
        this._cnpj = _cnpj;
    }

    public get local(): string {
        return this._local;
    }

    public set local(_local: string) {
        this._local = _local;
    }

    public get dono(): string {
        return this._dono;
    }

    public set dono(_dono: string) {
        this._dono = _dono;
    }

   
}