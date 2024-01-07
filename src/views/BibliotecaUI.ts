import * as rl from 'readline-sync'
// import { BancoDeRegistros } from '../models/Biblioteca/Bancos/BancoDeRegistros';
import {ClienteUI, AdminUI} from '../models/exportador'


export class BibliotecaUI{
    
    private _clienteUI: ClienteUI = new ClienteUI();
    private _adminUI: AdminUI = new AdminUI();

    public cadastrar(){
        let nome:string;
        let email:string;
        let pass:string;
        let cep:string;
        let dataDeNascimento = new Date();
        
        
        console.log("===========Biblioteca===========");
        console.log("     Deseja criar uma conta?  \n");
        nome =  rl.question('Digite o seu nome: ');
        email = rl.question('Digite o seu email: ');
        pass = rl.question('Crie uma senha: ', {hideEchoBack:true});
        cep = rl.question('Digite seu cep: ');

        const SENHA_DE_ADM = this.verificaCadastro(pass)

        if ( SENHA_DE_ADM ){
            this._adminUI.menu();
            return
        }

        this._clienteUI.registrarConta(nome, email, pass, dataDeNascimento, cep)

        
    }



    // falta o banco de dados
    public logar(){

    }

    private verificaCadastro(senha:string): boolean{

        const CADASTRO_DE_ADM = /AFK$/.test(senha);

        if(CADASTRO_DE_ADM){
            // loga como admin
            return true; // early return
        }

        return false;
       

    }



    public menu(){

        let options = ['Cadastro', 'Login']

        console.log("===========Biblioteca===========");
        console.log("              MENU            \n");
        let index =  rl.keyInSelect(options, 'O que voce quer fazer?', {cancel: 'CANCELAR'});
        
        
        
        switch(options[index]){
            case 'Cadastro':
                console.log(`ok, excecutando ${options[index]} \n`);
                this.cadastrar();
                break;
            case 'Login':
                console.log(`ok, excecutando ${options[index]} \n`);
                this.logar();

                break;
            default:
                console.log("Finalizado CLI");
                break;
                
        }    
    }



        
}

    

/*

    public menu(){

        let options = ['Registrar um livro', 'Registrar conta de cliente', 'Registrar cartao de credito']

        console.log("===========Biblioteca===========");
        console.log("              MENU            \n");
        let index =  rl.keyInSelect(options, 'O que voce quer fazer?', {cancel: 'CANCELAR'});
        
        
        
        switch(options[index]){
            case 'Registrar um livro':
                console.log(`ok, excecutando ${options[index]} \n`);
                this.registrarLivro();

                break;
            case 'Registrar conta de cliente':
                console.log(`ok, excecutando ${options[index]} \n`);
                this.registrarConta();
                console.log("Finalizado CLI");

                break;
            case 'Registrar cartao de credito':
                console.log(`ok, excecutando ${options[index]} \n`);
                this.registrarCartao();
                console.log("Finalizando CRD");

                break;
            default:

                break;
                
        }    
    }


*/



  /* testes da readlineSync

        // Handle the secret text (e.g. password).
            var favFood = rl.question('What is your favorite food? ', {
                hideEchoBack: true // The typed text on screen is hidden by `*` (default).
        });

        constructor(nome:string, email:string, senha:string, dataDeNascimento:Date, cep:string, cartao:Cartao){
        super(nome,email,senha,dataDeNascimento);

        this._cartao = cartao;
        this._cep = cep
    }
    
    */