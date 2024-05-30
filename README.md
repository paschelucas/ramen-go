# Ramen-go API

API construída para o case técnico da empresa Red Ventures.


# Instalação

Acesse a pasta raíz do projeto e execute o comando
`npm i`

# Execução

Acesse a pasta raíz do projeto e execute o comando
`npm run dev`

# Sobre o projeto e decisões

Um projeto simples, com apenas três requisições HTTP:
- Listagem de caldos;
- Listagem de proteínas;
- Criação de pedidos.

Optei pelo framework [Hono](https://hono.dev/) por ser leve, moderno, prático e com ferramentas já incluídas como suporte a Typescript. Para o banco de dados, optei por MongoDB por razões similares à adoção do Hono; é mais prático configurar a conexão e fazer o deploy deste banco utilizando o Atlas do que de bancos SQL tradicionais. Além disso, imagino que a maior parte das requisições vá ser de leitura, que é onde os bancos não relacionais brilham.



# Documentação da API
- Listar todos os caldos
	- [ramen-go.onrender.com/broth/get-all/](https://ramen-go.onrender.com/broth/get-all/)
- Listar todas as proteínas
	- [ramen-go.onrender.com/protein/get-all/](https://ramen-go.onrender.com/protein/get-all/)
- Criar um pedido
	- [ramen-go.onrender.com/order/create/](https://ramen-go.onrender.com/order/create/)
	-Body da requisição: 
	`{"brothId": String, "proteinId": String}`
