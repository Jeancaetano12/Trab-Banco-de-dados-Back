# 📌 DB CRUD — Backend

Este é o backend do projeto de gerenciamento de Funcionários, Projetos e Alocações, desenvolvido com NestJS, Prisma ORM e PostgreSQL.
A API fornece os endpoints utilizados pelo frontend para operações de cadastro e relacionamentos entre entidades.

## 🚀 Tecnologias Utilizadas

Node.js 20+

NestJS 11

TypeScript

Prisma ORM 7

PostgreSQL


```
📁 Estrutura do Projeto
src/
│
├── funcionarios/              # CRUD de funcionários
│   ├── dto/
│   ├── funcionarios.controller.ts
│   ├── funcionarios.module.ts
│   └── funcionarios.service.ts
│
├── projetos/                  # CRUD de projetos
│   ├── projetos.controller.ts
│   ├── projetos.module.ts
│   └── projetos.service.ts
│
├── alocacoes/                 # Relacionamento entre funcionário e projeto
│   ├── dto/
│   ├── alocacoes.controller.ts
│   ├── alocacoes.module.ts
│   └── alocacoes.service.ts
│
├── generated/prisma/          # Arquivos gerados automaticamente pelo Prisma
│
├── app.module.ts              # Módulo raiz
├── app.controller.ts
├── app.service.ts
└── main.ts                    # Ponto de entrada da aplicação

    📚 Endpoints da API
      👤 Funcionários
        Método	Rota	Descrição
        GET	/funcionarios	Lista todos
        POST	/funcionarios	Cria funcionário
        GET	/funcionarios/:id	Busca por ID
        PATCH	/funcionarios/:id	Atualiza
        DELETE	/funcionarios/:id	Remove
      
      
      📁 Projetos
        Método	Rota	Descrição
        GET	/projetos	Lista todos
        POST	/projetos	Cria projeto
        GET	/projetos/:id	Busca por ID
        PATCH	/projetos/:id	Atualiza
        DELETE	/projetos/:id	Remove


      🔗 Alocações
        Método	Rota	Descrição
        GET	/alocacoes	Lista todas
        POST	/alocacoes	Cria alocação
        GET	/alocacoes/projeto/:id	Lista alocações de um projeto
        GET	/alocacoes/funcionario/:fid/projeto/:pid	Busca alocação específica
        PATCH	/alocacoes/...	Atualiza
        DELETE	/alocacoes/...	Remove
        ```

      🧩 Modelagem do Banco

        A modelagem está definida no arquivo prisma/schema.prisma, contendo as entidades:

        Funcionario

        Projeto

        Alocacao

        O Prisma gera automaticamente os tipos e o cliente utilizados nos serviços para acesso ao banco de dados.