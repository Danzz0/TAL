import * as input from 'readline-sync'
// import { BancoDeRegistros } from '../models/Biblioteca/Bancos/BancoDeRegistros';
import {ClienteUI, AdminUI} from '../models/exportador'


export class BibliotecaUI{
    
    private _clienteUI: ClienteUI = new ClienteUI();
    private _adminUI: AdminUI = new AdminUI();













    public menu(){

        let options = ['Cadastro', 'Login']

        console.log("===========Biblioteca===========");
        console.log("              MENU            \n");
        let index =  input.keyInSelect(options, 'O que voce quer fazer?', {cancel: 'CANCELAR'});
        
        
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








    

    public cadastrar(){
        let nome:string;
        let email:string;
        let pass:string;
        let cep:string;
        let dataDeNascimento = new Date();
        
        
        console.log("===========Biblioteca===========");
        console.log("     Deseja criar uma conta?  \n");
        nome =  input.question('Digite o seu nome: ');
        email = input.question('Digite o seu email: ');
        pass = input.question('Crie uma senha: ', {hideEchoBack:true});
        cep = input.question('Digite seu cep: ');

        const SENHA_DE_ADM = this.verificaCadastro(pass)

        if ( SENHA_DE_ADM ){
            this._adminUI.menu();
            return
        }

        this._clienteUI.registrarConta(nome, email, pass, dataDeNascimento, cep)
        
    }






    // falta o banco de dados
    public logar(){
        // let email: string;
        let senha: string;
        let bancoDeUsuarios = this._clienteUI.clienteEstq.todosOsClientes;
        
        senha = input.question("Digite sua senha: ");
        if(this.verificaCadastro(senha)){
            // login de adm
        }
        
        // falta o early return
        (() => {
            const CLIENTE_EXISTE = this._clienteUI.clienteController.existeCliente(senha, bancoDeUsuarios)

            if( CLIENTE_EXISTE ){
                const CLIENTE_ENCONTRADO = this._clienteUI.clienteController.clienteEncontrado;
                console.log("Cliente encontrado:", JSON.stringify(CLIENTE_ENCONTRADO, null, 2));

            }

        })()

    }




    private verificaCadastro(senha:string): boolean{

        const CADASTRO_DE_ADM = /AFK$/.test(senha);

        if(CADASTRO_DE_ADM){
            // loga como admin
            return true; // early return
        }

        return false;
       

    }



    



        
}

    

/*

    public menu(){

        let options = ['Registrar um livro', 'Registrar conta de cliente', 'Registrar cartao de credito']

        console.log("===========Biblioteca===========");
        console.log("              MENU            \n");
        let index =  input.keyInSelect(options, 'O que voce quer fazer?', {cancel: 'CANCELAR'});
        
        
        
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
            var favFood = input.question('What is your favorite food? ', {
                hideEchoBack: true // The typed text on screen is hidden by `*` (default).
        });

        constructor(nome:string, email:string, senha:string, dataDeNascimento:Date, cep:string, cartao:Cartao){
        super(nome,email,senha,dataDeNascimento);

        this._cartao = cartao;
        this._cep = cep
    }
    
    */