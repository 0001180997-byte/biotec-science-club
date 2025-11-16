# 📝 Guia Completo de Edição do Site BIOTEC

## 🎯 Como Adicionar e Editar Conteúdo

### 📰 **1. ADICIONAR NOVO POST NO BLOG**

**Arquivo:** `data/blog.json`

**Passo a passo:**

1. Abra o arquivo `data/blog.json`
2. Dentro do array `"posts"`, adicione um novo objeto no final (antes do `]`)
3. Não esqueça de colocar uma **vírgula** após o último post existente

**Exemplo de novo post:**

\`\`\`json
{
  "posts": [
    {
      "id": "1",
      "title": "Post existente",
      "excerpt": "...",
      "content": "...",
      "author": "...",
      "date": "2024-01-15",
      "image": "/placeholder.svg?height=400&width=600"
    },
    {
      "id": "3",
      "title": "Meu Novo Post Sobre Biologia",
      "excerpt": "Resumo curto do post que aparece na listagem",
      "content": "Aqui vai o texto completo do post. Pode ser longo, falar sobre o tema em detalhes...",
      "author": "Seu Nome",
      "date": "2024-03-20",
      "image": "https://link-da-sua-foto.jpg"
    }
  ]
}
\`\`\`

**Campos explicados:**
- `id`: Número único para cada post (use o próximo número disponível)
- `title`: Título do post
- `excerpt`: Resumo curto (aparece na listagem)
- `content`: Texto completo do post
- `author`: Nome do autor
- `date`: Data no formato AAAA-MM-DD
- `image`: Link da foto (pode usar links do Imgur, Google Drive, etc)

---

### 📚 **2. ADICIONAR PUBLICAÇÃO ACADÊMICA**

**Arquivo:** `data/publications.json`

**Passo a passo:**

1. Abra o arquivo `data/publications.json`
2. Encontre a seção `"academicPublications"`
3. Adicione um novo objeto no final do array

**Exemplo:**

\`\`\`json
{
  "academicPublications": [
    {
      "title": "Título da Nova Publicação",
      "authors": "Nome1, A.; Nome2, B.; Nome3, C.",
      "journal": "Nome da Revista ou Evento",
      "year": "2024",
      "type": "Artigo",
      "link": "https://link-para-publicacao.com"
    }
  ]
}
\`\`\`

**Tipos aceitos:** "Artigo", "Anais", "Tese", "Dissertação"

---

### 📖 **3. ADICIONAR MATERIAL EDUCATIVO**

**Arquivo:** `data/publications.json`

Na mesma arquivo, seção `"educationalMaterials"`:

\`\`\`json
{
  "educationalMaterials": [
    {
      "title": "Nome do Material",
      "description": "Descrição breve do que é o material",
      "year": "2024",
      "type": "Manual"
    }
  ]
}
\`\`\`

**Tipos aceitos:** "Manual", "Material Didático", "Protocolo", "Guia"

---

### 👥 **4. ADICIONAR MEMBRO DA EQUIPE**

**Arquivo:** `data/team.json`

\`\`\`json
{
  "members": [
    {
      "name": "Nome da Pessoa",
      "role": "Cargo ou Função",
      "bio": "Descrição sobre a pessoa e sua atuação no projeto",
      "image": "https://link-da-foto.jpg"
    }
  ]
}
\`\`\`

---

### 📁 **5. ADICIONAR PROJETO**

**Arquivo:** `data/projects.json`

\`\`\`json
{
  "projects": [
    {
      "id": "1",
      "title": "Nome do Projeto",
      "description": "Descrição completa do projeto",
      "status": "Em andamento",
      "category": "Pesquisa",
      "image": "https://link-da-foto.jpg",
      "startDate": "2024-01-01"
    }
  ]
}
\`\`\`

**Status aceitos:** "Em andamento", "Concluído", "Planejamento"
**Categorias:** "Pesquisa", "Extensão", "Ensino"

---

### 🖼️ **6. ADICIONAR FOTO NA GALERIA**

**Arquivo:** `data/gallery.json`

\`\`\`json
{
  "images": [
    {
      "id": "1",
      "url": "https://link-da-foto.jpg",
      "title": "Título da Foto",
      "description": "Descrição opcional",
      "category": "eventos"
    }
  ]
}
\`\`\`

**Categorias:** "eventos", "atividades", "equipe", "laboratorio"

---

### 🤝 **7. ADICIONAR PARCEIRO**

**Arquivo:** `data/partners.json`

\`\`\`json
{
  "partners": [
    {
      "name": "Nome da Instituição",
      "description": "Descrição da parceria",
      "logo": "https://link-do-logo.jpg",
      "website": "https://site-do-parceiro.com"
    }
  ],
  "collaborators": [
    "Nome do Colaborador"
  ]
}
\`\`\`

---

## 🖼️ **COMO ADICIONAR FOTOS**

Você tem 3 opções para adicionar fotos:

### **Opção 1: Usar Imgur (Mais Fácil)**
1. Vá em https://imgur.com
2. Faça upload da sua foto
3. Clique com botão direito na foto → "Copiar endereço da imagem"
4. Cole o link no campo `"image"` ou `"url"`

### **Opção 2: Google Drive**
1. Faça upload no Google Drive
2. Clique direito → Compartilhar → "Qualquer pessoa com o link"
3. Copie o ID do link (parte entre `/d/` e `/view`)
4. Use: `https://drive.google.com/uc?id=SEU_ID_AQUI`

### **Opção 3: Hospedar no Vercel**
1. Coloque as fotos na pasta `public/images/`
2. Use o caminho: `"/images/nome-da-foto.jpg"`

---

## ⚠️ **DICAS IMPORTANTES**

1. **Sempre use vírgulas** entre os itens do array
2. **Não esqueça das aspas** em todos os textos
3. **Datas no formato:** AAAA-MM-DD (ex: 2024-03-20)
4. **Links de fotos** devem começar com `http://` ou `https://`
5. **Teste após editar:** Salve e veja se o site carrega sem erros

---

## 📁 **LISTA DE TODOS OS ARQUIVOS EDITÁVEIS**

| Arquivo | O que edita |
|---------|-------------|
| `data/blog.json` | Posts do blog |
| `data/publications.json` | Publicações acadêmicas e materiais |
| `data/team.json` | Membros da equipe |
| `data/projects.json` | Projetos do clube |
| `data/gallery.json` | Fotos da galeria |
| `data/partners.json` | Parceiros e colaboradores |
| `data/home.json` | Conteúdo da página inicial |

---

## 🆘 **PROBLEMAS COMUNS**

**O site não carrega após editar?**
- Verifique se não faltou uma vírgula ou aspas
- Veja se todos os `{` têm um `}` correspondente
- Veja se todos os `[` têm um `]` correspondente

**Foto não aparece?**
- Verifique se o link está correto
- Teste abrir o link diretamente no navegador
- Veja se o link começa com `http://` ou `https://`

---

Pronto! Agora você pode editar todo o conteúdo do site facilmente! 🎉
