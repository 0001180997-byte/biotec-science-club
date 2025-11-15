# 📝 Como Editar o Site do BIOTEC

## Método Simples - Sem Complicação!

Agora o site é **SUPER SIMPLES** de editar. Você não precisa de login, banco de dados ou nada complicado. Basta editar os arquivos JSON na pasta `data/`.

---

## 📂 Arquivos para Editar

Todos os arquivos de conteúdo estão na pasta **`data/`**:

### 1. **`data/home.json`** - Página Inicial
\`\`\`json
{
  "hero": {
    "badge": "UEMG",
    "title": "Clube de Ciências BIOTEC",
    "subtitle": "Pesquisa e Extensão em Ciências Biológicas"
  },
  "about": {
    "title": "Sobre o Projeto",
    "paragraphs": [
      "Primeiro parágrafo aqui...",
      "Segundo parágrafo aqui..."
    ]
  }
}
\`\`\`

**Como editar:**
- Troque os textos entre aspas
- Adicione mais parágrafos se quiser

---

### 2. **`data/team.json`** - Equipe
\`\`\`json
{
  "members": [
    {
      "name": "Nome da Pessoa",
      "role": "Cargo",
      "bio": "Descrição curta",
      "image": "COLE O LINK DA FOTO AQUI"
    }
  ]
}
\`\`\`

**Como adicionar pessoas:**
1. Copie o bloco entre `{ }` 
2. Cole no final, separando com vírgula
3. Preencha os dados

**Como adicionar foto:**
- Cole o link direto da imagem no campo `"image"`
- Exemplo: `"image": "https://i.imgur.com/abc123.jpg"`

---

### 3. **`data/projects.json`** - Projetos
\`\`\`json
{
  "active": [
    {
      "title": "Nome do Projeto",
      "description": "Descrição",
      "category": "Categoria",
      "image": "LINK DA FOTO",
      "startDate": "2024-01-15"
    }
  ],
  "completed": []
}
\`\`\`

**Como adicionar projeto:**
1. Decida se é ativo (`"active"`) ou concluído (`"completed"`)
2. Copie o bloco `{ }`
3. Cole e edite as informações

---

### 4. **`data/blog.json`** - Blog
\`\`\`json
{
  "posts": [
    {
      "id": "1",
      "title": "Título do Post",
      "excerpt": "Resumo curto",
      "content": "Texto completo aqui...",
      "author": "Nome do Autor",
      "date": "2024-01-15",
      "image": "LINK DA FOTO"
    }
  ]
}
\`\`\`

**Como adicionar post:**
1. Copie o bloco `{ }`
2. Cole no final
3. Mude o `"id"` para o próximo número
4. Preencha título, texto, autor e data

---

### 5. **`data/gallery.json`** - Galeria de Fotos
\`\`\`json
{
  "images": [
    {
      "title": "Título da Foto",
      "description": "Descrição",
      "image": "LINK DA FOTO AQUI"
    }
  ]
}
\`\`\`

**Como adicionar fotos:**
1. Faça upload da foto em um site (Imgur, Google Drive público, etc.)
2. Copie o link direto da imagem
3. Adicione um novo bloco com o link

---

## 🖼️ Como Conseguir Links de Fotos

### Opção 1: Imgur (Recomendado)
1. Vá em https://imgur.com
2. Faça upload da foto
3. Clique com botão direito na foto
4. "Copiar endereço da imagem"
5. Cole no JSON

### Opção 2: Google Drive
1. Faça upload no Drive
2. Clique com botão direito > "Obter link"
3. Mude para "Qualquer pessoa com o link"
4. Use um conversor de link do Drive para link direto

### Opção 3: Hospedagem própria
- Coloque as fotos na pasta `public/images/` do projeto
- Use: `"/images/nome-da-foto.jpg"`

---

## ✅ Dicas Importantes

1. **Não esqueça as vírgulas** entre os blocos `{ }` dentro do array `[ ]`
2. **Use aspas duplas** `"` sempre
3. **Datas no formato**: `"AAAA-MM-DD"` (ex: `"2024-01-15"`)
4. **Teste depois de editar**: salve e recarregue o site

---

## 🆘 Problemas Comuns

**"Site não carrega"**
→ Verifique se não faltou vírgula ou aspas nos arquivos JSON

**"Foto não aparece"**
→ Certifique-se de que o link é direto para a imagem (termina com .jpg, .png, etc.)

**"Texto cortado"**
→ Use `\n` para quebra de linha ou separe em vários parágrafos

---

**Pronto! Agora é só editar os arquivos JSON e o site atualiza automaticamente! 🎉**
