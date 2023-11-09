export class Cartao {

    private _nomeBanco: string;
    private _agencia: string;
    private _cardNum: string;
    private _cvv: string;
    private _saldo: number;



    constructor(nomeDoBanco: string, nomeAgencia: string, numDoCartao: string, cvv: string, saldo: number) {

        if (this.verificaCartao(numDoCartao, cvv)) {
            this._cardNum = numDoCartao;
            this._cvv = cvv;
            this._nomeBanco = nomeDoBanco;
            this._agencia = nomeAgencia;
            this._saldo = saldo;
        } else {
            throw new Error("Erro nos dados do cartão ou no CVV")
        }

    }

    // Controller
    private verificaCartao(cardNum: string, cvv: string): boolean {


        let verify: boolean;
        const VerificaQTD_Card = /^\d{16}$/.test(cardNum.replace(/\s/g, ''));
        const VerificaNUM_Card = /^\d+$/.test(cardNum.replace(/\s/g, ''))
        const VerificaQTD_Cvv = /^\d{3}$/.test(cvv.replace(/\s/g, ''))
        const VerificaNUM_Cvv = /^\d+$/.test(cvv.replace(/\s/g, ''));


        if ((VerificaQTD_Card && VerificaNUM_Card) && (VerificaQTD_Cvv && VerificaNUM_Cvv)) {
            return true
        } else {
            return false
        }

        // Verifica se a string contém apenas dígitos numéricos e tem o formato correto


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
    public get cardNum(): string {
        return this._cardNum;
    }
    public set cardNum(value: string) {
        this._cardNum = value;
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


    // public getCard() : void{
    //     console.log([
    //         this._nomeBanco,
    //         this._cardNum
    //     ])
    // }








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