# 📚 Guia do Painel Administrativo - Clube de Ciências BIOTEC

## 🔐 Como Acessar o Painel Admin

### Passo 1: Criar sua Conta de Administrador

1. **Execute os scripts do banco de dados** (isso já foi feito automaticamente)
2. **Crie sua primeira conta de admin:**
   - Vá para: `https://seu-site.com/admin/login`
   - Como ainda não tem conta, você precisa criar uma no Supabase:
     - Abra o painel lateral direito do v0
     - Clique em **"Connect"** (Conectar)
     - Encontre **Supabase** e clique nele
     - Isso abrirá o painel do Supabase
     - Vá em **Authentication** → **Users** 
     - Clique em **"Add user"** → **"Create new user"**
     - Digite seu email e senha
     - Clique em **"Create user"**

### Passo 2: Tornar-se Administrador

Depois de criar o usuário no Supabase, você precisa torná-lo administrador:

1. No Supabase, vá em **Table Editor** → **admins**
2. Clique em **"Insert"** → **"Insert row"**
3. Cole o **user_id** do usuário que você acabou de criar
4. Clique em **"Save"**

### Passo 3: Fazer Login

1. Volte para `https://seu-site.com/admin/login`
2. Digite o email e senha que você criou
3. Clique em **"Entrar"**
4. Você será redirecionado para o painel administrativo!

---

## 🎨 Como Editar o Conteúdo do Site

### 📄 Página Inicial

**Caminho:** `/admin/home`

Aqui você pode editar:
- **Título do Hero:** O título grande da página inicial
- **Subtítulo do Hero:** O texto descritivo abaixo do título
- **Seção Sobre - Título:** Título da seção "Sobre o Projeto"
- **Seção Sobre - Conteúdo:** Descrição detalhada do projeto

**Como editar:**
1. No menu lateral, clique em **"Página Inicial"**
2. Edite os campos de texto
3. Clique em **"Salvar Alterações"**
4. As mudanças aparecerão imediatamente no site público

---

### 👥 Equipe

**Caminho:** `/admin/team`

Gerencie os membros da equipe do projeto.

**Como adicionar um membro:**
1. No menu lateral, clique em **"Equipe"**
2. Clique no botão **"+ Adicionar Membro"**
3. Preencha:
   - **Nome:** Nome completo do membro
   - **Cargo:** Ex: "Coordenador", "Pesquisador", "Bolsista"
   - **Bio:** Breve descrição sobre o membro
   - **Email:** Email de contato (opcional)
   - **Foto (URL):** Link da foto (pode usar `/placeholder.svg` temporariamente)
4. Clique em **"Salvar"**

**Como editar um membro:**
1. Na lista de membros, clique no botão **"Editar"** (ícone de lápis)
2. Faça as alterações necessárias
3. Clique em **"Salvar Alterações"**

**Como remover um membro:**
1. Na lista de membros, clique no botão **"Excluir"** (ícone de lixeira)
2. Confirme a exclusão

---

### 📝 Blog

**Caminho:** `/admin/blog`

Crie e gerencie posts do blog interno.

**Como criar um post:**
1. No menu lateral, clique em **"Blog"**
2. Clique em **"+ Novo Post"**
3. Preencha:
   - **Título:** Título do post
   - **Slug:** URL amigável (ex: "primeiro-post")
   - **Resumo:** Breve descrição que aparece na lista
   - **Conteúdo:** Texto completo do post
   - **Autor:** Nome do autor
   - **Imagem de Capa (URL):** Link da imagem principal
   - **Status:** "Publicado" ou "Rascunho"
4. Clique em **"Criar Post"**

**Dica:** Posts com status "Rascunho" não aparecem no site público.

---

### 🔬 Projetos

**Caminho:** `/admin/projects`

Adicione projetos de pesquisa e extensão.

**Como adicionar um projeto:**
1. No menu lateral, clique em **"Projetos"**
2. Clique em **"+ Adicionar Projeto"**
3. Preencha:
   - **Título:** Nome do projeto
   - **Descrição:** Descrição detalhada
   - **Status:** "Em Andamento", "Concluído" ou "Planejado"
   - **Data de Início:** Quando começou
   - **Data de Término:** Quando terminou (opcional)
   - **Imagem (URL):** Imagem representativa
4. Clique em **"Salvar"**

---

### 🖼️ Galeria

**Caminho:** `/admin/gallery`

Gerencie as fotos da galeria.

**Como adicionar uma foto:**
1. No menu lateral, clique em **"Galeria"**
2. Clique em **"+ Adicionar Imagem"**
3. Preencha:
   - **Título:** Título/descrição da foto
   - **URL da Imagem:** Link da imagem
   - **Categoria:** Ex: "Eventos", "Laboratório", "Atividades"
4. Clique em **"Salvar"**

---

## 📸 Como Adicionar Imagens

### Opção 1: Usar Placeholders (temporário)
\`\`\`
/placeholder.svg?height=400&width=600&query=laboratorio+de+biologia
\`\`\`

### Opção 2: Usar Vercel Blob (recomendado)
1. Faça upload das imagens no Vercel Blob
2. Copie a URL gerada
3. Cole no campo "URL da Imagem"

### Opção 3: Usar URLs externas
Cole o link direto da imagem hospedada em outro lugar.

---

## 🚪 Como Sair

No canto superior direito do painel admin, clique em **"Sair"** para fazer logout.

---

## ❓ Problemas Comuns

### "Não consigo fazer login"
- Verifique se você criou o usuário no Supabase
- Verifique se adicionou o user_id na tabela `admins`
- Certifique-se de estar usando o email e senha corretos

### "As alterações não aparecem no site"
- Aguarde alguns segundos e recarregue a página
- Verifique se você clicou em "Salvar"
- Para posts de blog, certifique-se de que o status está como "Publicado"

### "Erro ao salvar"
- Verifique se todos os campos obrigatórios estão preenchidos
- Verifique sua conexão com a internet
- Tente fazer logout e login novamente

---

## 🛠️ Suporte

Se precisar de ajuda, entre em contato com o desenvolvedor do sistema.
