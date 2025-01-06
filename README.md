# Projeto X-Solutions - Backend  
Este projeto é o backend do sistema de gerenciamento de produtos, desenvolvido com **NestJS**, que fornece uma API para operações de CRUD (Criar, Ler, Atualizar, Deletar) de produtos.  

A aplicação utiliza **Prisma ORM** para comunicação com o banco de dados PostgreSQL, garantindo alta performance e facilidade de manutenção. Além disso, foram implementadas boas práticas de arquitetura para escalabilidade e clareza do código.  

---

## Passo 1: Clonar o Repositório  
Primeiro, você precisa clonar o repositório do projeto na sua máquina local:  

```bash
git clone https://github.com/matheusLdev/xsolutions-backend.git
```

## Passo 2: Instalar Dependências  
Acesse o diretório do projeto e instale as dependências com o seguinte comando:

```bash
# Yarn
yarn 
```

## Passo 3: Configurar o Banco de Dados
Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

```bash
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
```

## Passo 4: Iniciar o Servidor
Com o banco configurado, inicie o servidor do backend:

```bash
# Yarn
yarn start
```

O backend estará disponível em: http://localhost:8080/api

## Pronto! :tada:
O backend está configurado e pronto para uso.
