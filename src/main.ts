// import { Cartao, Cliente } from "./models/exportador"


// const card1 = new Cartao("Nubank", "AJHHKJHB", "5502 0992 0993 7998", "123", 1200);
// console.log(card1)

class Livro {
    constructor(private _titulo: string, private _editora: string) {}
}

class Gibi {
    constructor(private _titulo: string, private _editora: string) {}
}

class Caderno {
    constructor(private _marca: string) {}
}

const listaDeProdutos: any[] = [
    new Livro("Game of Thrones", "Darkside"),
    new Livro("Game of Thrones", "Darkside"),
    new Gibi("Turma da Mônica", "Viena"),
    new Gibi("Turma da Mônica", "Viena"),
    new Caderno("Tilibra"),
    new Caderno("Tilibra"),
];

const produtosOrganizados: { [key: string]: any[] } = {};

for (const produto of listaDeProdutos) {
    const tipo = produto.constructor.name;
    if (!produtosOrganizados[tipo]) {
        produtosOrganizados[tipo] = [];
    }
    produtosOrganizados[tipo].push(produto);
}

console.log("_listaDeProdutos:");
for (const tipo in produtosOrganizados) {
    console.log(`    ${tipo}: ${JSON.stringify(produtosOrganizados[tipo])}`);
}