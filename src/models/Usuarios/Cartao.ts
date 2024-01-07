export class Cartao {

    private _nomeBanco: string;
    private _agencia: string;
    private _numeroDoCartao: string; // ID 
    private _cvv: string;
    private _saldo: number;



    constructor(nomeDoBanco: string, nomeAgencia: string, numDoCartao: string, cvv: string, saldo: number) {

        
        this._numeroDoCartao = numDoCartao;
        this._cvv = cvv;
        this._nomeBanco = nomeDoBanco;
        this._agencia = nomeAgencia;
        this._saldo = saldo;
        

    }


    //Nome do banco
    public get nomeBanco(): string {
        return this._nomeBanco;
    }
    public set nomeBanco(value: string) {
        this._nomeBanco = value;
    }

    //Nome da agência
    public get agencia(): string {
        return this._agencia;
    }
    public set agencia(value: string) {
        this._agencia = value;
    }

    // N° do cartão
    public get numeroDoCartao(): string {
        return this._numeroDoCartao;
    }
    public set numeroDoCartao(value: string) {
        this._numeroDoCartao = value;
    }

    //CVV / CVC
    public get cvv(): string {
        return this._cvv;
    }
    public set cvv(value: string) {
        this._cvv = value;
    }


    //Saldo do cliente
    public get saldo(): number {
        return this._saldo;
    }
    public set saldo(value: number) {
        this._saldo = value;
    }










    // Banco (referente ao ojeto cartão)
    // Bandeira do cartão (depende do banco) (referente ao ojeto cartão) master/visa/elo
    /*
        padrões de n° de cartão 
            master: xxxx xxxx xxxx xxxx
            visa: xxxx xxxx xxxx xxxx
            elo: xxxx xxxx xxxx xxxx
            

    */
    // N° do cartão (16 digitos, atr..) (depende da bandeira do cartão) (referente ao ojeto cartão)
    // Código de segurança CVV (4 dígitos, atr..) (referente ao ojeto cartão)

}