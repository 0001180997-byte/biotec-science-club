/**
 * ARQUIVO DE DADOS DO BLOG
 * 
 * Como adicionar um novo post:
 * 1. Adicione um novo objeto no array 'posts' seguindo a estrutura existente
 * 2. Use uma das categorias existentes ou adicione uma nova em 'categories'
 * 3. Para um post completo, crie um arquivo em 'data/blog-posts/nome-do-post.ts'
 */

export const categories = [
  'Todos',
  'Divulgação Científica',
  'Educação',
  'Metodologia',
  'Pesquisa',
  'Meio Ambiente',
  'Relatos',
]

export const posts = [
  {
    id: 'divulgacao-cientifica-escolas',
    title: 'A Importância da Divulgação Científica nas Escolas',
    excerpt: 'Descubra como a divulgação científica pode transformar o ensino e despertar o interesse dos estudantes pela ciência.',
    author: 'Profa. Maria Silva',
    date: '15 de Janeiro, 2024',
    readTime: '5 min',
    category: 'Divulgação Científica',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'atividades-investigativas',
    title: 'Atividades Investigativas: Aprendendo Fazendo Ciência',
    excerpt: 'Como as atividades práticas e investigativas contribuem para o desenvolvimento do pensamento científico dos estudantes.',
    author: 'Prof. João Santos',
    date: '10 de Janeiro, 2024',
    readTime: '7 min',
    category: 'Educação',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'microscopia-acessivel',
    title: 'Microscopia Acessível: Ferramentas de Baixo Custo',
    excerpt: 'Conheça alternativas acessíveis para ensinar microscopia em escolas com recursos limitados.',
    author: 'Ana Costa',
    date: '5 de Janeiro, 2024',
    readTime: '6 min',
    category: 'Metodologia',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'clubes-ciencias-formacao',
    title: 'O Papel dos Clubes de Ciências na Formação Científica',
    excerpt: 'Exploramos como os clubes de ciências contribuem para a formação de jovens cientistas e pesquisadores.',
    author: 'Carlos Oliveira',
    date: '28 de Dezembro, 2023',
    readTime: '8 min',
    category: 'Pesquisa',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'biodiversidade-local',
    title: 'Biodiversidade Local: Conhecer para Preservar',
    excerpt: 'A importância de estudar e catalogar a biodiversidade local para conscientização ambiental.',
    author: 'Beatriz Lima',
    date: '20 de Dezembro, 2023',
    readTime: '5 min',
    category: 'Meio Ambiente',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 'clube-virtual-pandemia',
    title: 'Experiências do Clube Virtual Durante a Pandemia',
    excerpt: 'Relatos e aprendizados das atividades remotas realizadas durante o período de isolamento social.',
    author: 'Rafael Souza',
    date: '15 de Dezembro, 2023',
    readTime: '6 min',
    category: 'Relatos',
    image: '/placeholder.svg?height=400&width=600',
  },
]
