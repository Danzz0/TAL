Projeto Biblioteca

Módulos:
	- Módulo de Registros;
		inclui (Compra e Venda)
		- Manter compra(inclui cadastrar, buscar, remover e atualizar o compra, distribuidora e etc..)
		- Manter Venda(inclui cadastrar, buscar, remover e atualizar o compra, Comprador(Cliente) e etc..)

			Ator responsável: Dono



		
	- Módulo de Produtos;
		(Inclui Livro)

			Ator responsável:  Funcionário(comprador)




	- Módulo  Usuários;
		inclui (Cliente)
		inclui (Dono)
		inclui (Funcionario) 
		- Manter Cliente (inclui cadastrar, buscar, remover e atualizar o usuário)
		- Manter Donoi (inclui cadastrar, buscar, remover e atualizar o usuário)
		- Manter Funcionario (inclui cadastrar, buscar, remover e atualizar o usuário)

		Quais informações eu preciso ter sobre o usuário?
		Nome, cpf, telefone, endereço, email, senha de acesso

			Ator responsável: Cliente, Funcionário(comprador),  Dono




	- Módulo Biblioteca 
		inclui(Biblioteca)
		inclui(Bancos)
			-Estoque De Produtos
			-Banco de Produtos
			-Banco de Usuarios
		
		- Manter biblioteca (inclui CNPJ, Quantidade e local de lojas)
		- Manter Bancos(inclui cadastrar, buscar, remover e atualizar o Banco, etc..)
		
			Ator responsável: Dono




	- Módulo Venda / Compra
		inclui(venda / compra)
		inclui(Nota fiscal),
			inclui(forma de pagamento)
				- Cartao
						Ator responsável: Cliente
			Ator responsável:  Funcionário



Controllers:
	-RegistroCtrl
		inclui(CompraController)
		inclui(ProdutoController)
		inclui(VendaController)

	inclui(RegistroController)




- Views:
	inclui(BibliotecaUI)


