# Guia de Edição do Site BIOTEC

Este guia explica como editar o conteúdo do site de forma simples e organizada.

## 📁 Estrutura dos Arquivos de Dados

Todos os conteúdos editáveis estão na pasta `/data`:

- `home-data.ts` - Textos da página inicial
- `team-data.ts` - Informações da equipe
- `projects-data.ts` - Projetos ativos e concluídos
- `gallery-data.ts` - Fotos e vídeos da galeria
- `blog-data.ts` - Posts do blog

## 🖼️ Como Adicionar Fotos

### 1. Colocando as Fotos no Projeto

Coloque suas fotos na pasta `public/images/` seguindo esta estrutura:

\`\`\`
public/
  images/
    equipe/
      coordenador1.jpg
      pesquisador1.jpg
    projetos/
      projeto1-capa.jpg
      projeto2-capa.jpg
    galeria/
      atividades-2024/
        foto1.jpg
        foto2.jpg
    blog/
      post1-capa.jpg
\`\`\`

### 2. Referenciando as Fotos no Código

Depois de adicionar a foto, edite o arquivo de dados correspondente:

**Exemplo - Adicionar foto de um coordenador:**

Abra `data/team-data.ts` e edite:

\`\`\`typescript
{
  name: 'Profa. Dra. Maria Silva',
  role: 'Coordenadora',
  // ... outros campos
  image: '/images/equipe/maria-silva.jpg', // ← Altere esta linha
}
\`\`\`

## ✏️ Como Editar Textos

### Página Inicial

Abra `data/home-data.ts` e edite os campos:

\`\`\`typescript
export const heroSection = {
  badge: 'Desde 2019 promovendo ciência', // ← Edite aqui
  title: 'Clube de Ciências BIOTEC',
  subtitle: 'Sua nova descrição aqui...',
}
\`\`\`

### Equipe

Abra `data/team-data.ts`:

**Adicionar novo membro:**

\`\`\`typescript
export const coordinators = [
  // ... membros existentes
  {
    name: 'Novo Membro',
    role: 'Cargo',
    description: 'Descrição do membro',
    email: 'email@uemg.br',
    linkedin: 'https://linkedin.com/in/usuario',
    image: '/images/equipe/novo-membro.jpg',
  },
]
\`\`\`

### Projetos

Abra `data/projects-data.ts`:

**Adicionar novo projeto:**

\`\`\`typescript
export const activeProjects = [
  // ... projetos existentes
  {
    title: 'Título do Novo Projeto',
    description: 'Descrição completa do projeto...',
    status: 'Em andamento',
    year: '2024',
    participants: 10,
    area: 'Divulgação Científica',
    image: '/images/projetos/novo-projeto.jpg',
    detailsUrl: '#',
  },
]
\`\`\`

### Galeria

Abra `data/gallery-data.ts`:

**Adicionar novo álbum:**

\`\`\`typescript
export const galleries = [
  // ... álbuns existentes
  {
    title: 'Nome do Evento 2024',
    year: '2024',
    coverImage: '/images/galeria/evento-2024/capa.jpg',
    images: [
      '/images/galeria/evento-2024/foto1.jpg',
      '/images/galeria/evento-2024/foto2.jpg',
      '/images/galeria/evento-2024/foto3.jpg',
    ],
  },
]
\`\`\`

### Blog

Abra `data/blog-data.ts`:

**Adicionar novo post:**

\`\`\`typescript
export const posts = [
  // ... posts existentes
  {
    id: 'titulo-do-post',
    title: 'Título do Novo Post',
    excerpt: 'Resumo breve do post...',
    author: 'Nome do Autor',
    date: '20 de Janeiro, 2024',
    readTime: '5 min',
    category: 'Divulgação Científica',
    image: '/images/blog/novo-post.jpg',
  },
]
\`\`\`

## 📝 Dicas Importantes

1. **Sempre use aspas simples** (`'`) ao invés de aspas duplas (`"`)
2. **Mantenha as vírgulas** no final de cada objeto (exceto o último)
3. **Não remova propriedades** - se não tiver o valor, deixe vazio: `''` ou `'#'`
4. **Caminhos de imagens** sempre começam com `/` (exemplo: `/images/foto.jpg`)
5. **Formato de imagens** recomendado: JPG ou PNG
6. **Tamanho das fotos:**
   - Coordenadores: 300x300px
   - Pesquisadores: 200x200px
   - Estudantes: 150x150px
   - Capas de projetos: 800x600px
   - Fotos de galeria: 1200x800px
   - Capas de blog: 1000x600px

## 🚀 Após Fazer as Alterações

1. Salve o arquivo editado
2. O site será atualizado automaticamente
3. Verifique se tudo está funcionando corretamente

## ❓ Precisa de Ajuda?

Se tiver dúvidas ou problemas:
1. Verifique se não esqueceu nenhuma vírgula ou aspas
2. Confirme se os caminhos das imagens estão corretos
3. Certifique-se de que as fotos foram colocadas na pasta `public/images/`
