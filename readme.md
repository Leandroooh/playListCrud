
---

### 💡 **Fase 1: Estrutura Inicial da API**

**Objetivo:** configurar um servidor Express funcional com rotas básicas.

1. Crie uma estrutura de projeto com separação clara (pasta `routes`, `controllers`, `models`, etc.).
2. Configure o Express para responder com uma mensagem de boas-vindas na raiz (`GET /`).
3. Crie rotas básicas para `GET /playlists` e `GET /playlists/:id`.

---

### 🎶 **Fase 2: Modelagem das Entidades**

**Objetivo:** representar os dados de forma organizada e com estrutura reutilizável.

1. Defina o que uma playlist deve conter: `nome`, `tags` (array de strings), `músicas` (array de objetos).
2. Cada música deve ter: `título`, `ano` e `artista`.
3. Crie as estruturas de dados para armazenar playlists em memória (simulando um banco de dados).

---

### 📥 **Fase 3: Operações CRUD de Playlists**

**Objetivo:** implementar as ações principais para gerenciar playlists.

1. Criar uma nova playlist (`POST /playlists`)
   - Com ou sem músicas inicialmente.
2. Atualizar nome e tags de uma playlist (`PUT /playlists/:id`)
3. Excluir uma playlist (`DELETE /playlists/:id`)

---

### 🎵 **Fase 4: Manipulação de Músicas dentro de Playlists**

**Objetivo:** adicionar e remover músicas individualmente.

1. Adicionar uma música a uma playlist (`POST /playlists/:id/musicas`)
2. Remover uma música de uma playlist (`DELETE /playlists/:id/musicas/:musicaId`)

---

### 🔄 **Fase 5: Refino e Boas Práticas**

**Objetivo:** tornar o projeto mais sólido e reutilizável.

1. Separar as responsabilidades (controllers, rotas, middlewares).
2. Criar IDs únicos para playlists e músicas (gerados dinamicamente).
3. Validar entradas com lógica própria ou bibliotecas (ex: Joi, mas opcional).
4. Pensar no que pode ser reaproveitado com classes ou módulos.

---

### 🔄 **Fase 5: Refino e Boas Práticas**

**Rotas Disponíveis:** Todas as Rotas disponíveis para uso.

1. /playlists/ - Exibe todas as playlists disponíveis.
2. /playlists/:id - Exibe a Playlist com base no ID fornecido.
3. /playlists/create - Cria a playlist com as informações fornecidas.
4. /playlists/update/:id - Atualiza a playlist do respectivo ID fornecido.
5. /playlists/delete/:id - Deleta a playlist do respectivo ID fornecido.

6. /playlists/musics/create - Cria uma nova Música na Playlist informada.
7. /playlists/musics/delete - Deleta uma música da Playlist especificada
8. /playlists/musics/update - Atualiza o nome da Música especificada
