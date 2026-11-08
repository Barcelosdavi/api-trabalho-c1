# API REST - Trabalho C1 (Node.js, Prisma & JWT)

Bem-vindo ao repositório do **Trabalho C1** do curso de Análise e Desenvolvimento de Sistemas (FAESA). Esta aplicação é uma API RESTful segura e estruturada, desenvolvida para gerir o registo, autenticação e proteção de rotas de utilizadores.

## 🛠️ Tecnologias Utilizadas

* **Node.js** & **Express**: Criação do servidor e gestão de rotas (endpoints).
* **Prisma ORM**: Mapeamento objeto-relacional para comunicação com a base de dados.
* **SQLite**: Base de dados relacional (ideal para o ambiente de desenvolvimento local).
* **Bcrypt.js**: Encriptação (hashing) de palavras-passe para garantir a segurança dos dados.
* **JWT (JSON Web Token)**: Geração e validação de tokens para acesso a rotas privadas.
* **Helmet** & **CORS**: Middlewares para proteção avançada contra vulnerabilidades web e controlo de partilha de recursos.

## Funcionalidades e Rotas

A API disponibiliza três rotas principais:

1. **Registo (`POST /api/registrar`)**
   * Cria um novo utilizador. 
   * Recebe: `nome`, `email` e `senha`. 
   * A palavra-passe é automaticamente encriptada antes de ser guardada na base de dados.

2. **Login (`POST /api/login`)**
   * Autentica o utilizador.
   * Recebe: `email` e `senha`.
   * Se as credenciais estiverem corretas, devolve um **Token JWT**.

3. **Perfil (`GET /api/perfil`)**
   * Rota **protegida**.
   * Exige o envio do token no cabeçalho da requisição (`Authorization: Bearer <teu_token>`).
   * Valida a identidade do utilizador através de um middleware antes de conceder acesso.

## ⚙️ Como Executar Localmente

**1. Clonar o repositório**
```bash
git clone https://github.com/Barcelosdavi/api-trabalho-c1.git
cd api-trabalho-c1
```

**2. Instalar as dependências**
```bash
npm install
```

**3. Configurar o ambiente**
Cria um ficheiro chamado `.env` na raiz do projeto e adiciona as seguintes variáveis:
```env
PORT=3000
JWT_SECRET=a_tua_chave_secreta_super_segura
```

**4. Configurar a Base de Dados**
Gera as tabelas no SQLite através do Prisma:
```bash
npx prisma db push
```

**5. Iniciar a API**
```bash
node src/server.js
```
*O servidor estará disponível em `http://localhost:3000`.*

---
Desenvolvido por **Davi Mendes Barcelos**.
