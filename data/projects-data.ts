/**
 * ARQUIVO DE DADOS DOS PROJETOS
 * 
 * Como editar:
 * 1. Para adicionar um novo projeto ativo, adicione um objeto no array 'activeProjects'
 * 2. Para mover um projeto de ativo para concluído, mova-o para 'completedProjects' e mude status para 'Concluído'
 * 3. Você pode adicionar uma propriedade 'detailsUrl' para linkar a uma página específica do projeto
 */

export const activeProjects = [
  {
    title: 'Investigando a Biodiversidade Local',
    description: 'Projeto de mapeamento e catalogação da fauna e flora da região de Ibirité, envolvendo estudantes do ensino médio em atividades de campo.',
    status: 'Em andamento',
    year: '2024',
    participants: 15,
    area: 'Atividades Investigativas',
    image: '/biodiversity-field-work.jpg',
    detailsUrl: '#', // Link para página detalhada do projeto (opcional)
  },
  {
    title: 'Oficinas de Microscopia',
    description: 'Série de oficinas práticas sobre técnicas de microscopia para professores da rede pública, com foco em materiais acessíveis.',
    status: 'Em andamento',
    year: '2024',
    participants: 20,
    area: 'Formação Continuada',
    image: '/microscope-workshop.jpg',
    detailsUrl: '#',
  },
  {
    title: 'Ciência nas Escolas',
    description: 'Programa de visitas às escolas públicas de Ibirité com apresentações interativas e experimentos científicos demonstrativos.',
    status: 'Em andamento',
    year: '2024',
    participants: 8,
    area: 'Divulgação Científica',
    image: '/science-demonstration-school.jpg',
    detailsUrl: '#',
  },
]

export const completedProjects = [
  {
    title: 'Feira de Ciências 2023',
    description: 'Organização e realização da feira de ciências anual com participação de 10 escolas da região.',
    year: '2023',
    participants: 50,
    image: '/science-fair.png',
  },
  {
    title: 'Clube Virtual de Ciências',
    description: 'Atividades remotas durante a pandemia que mantiveram o engajamento científico de estudantes.',
    year: '2020-2021',
    participants: 30,
    image: '/virtual-science-class.jpg',
  },
  {
    title: 'Workshop de Educação Ambiental',
    description: 'Capacitação de professores em metodologias de ensino de educação ambiental.',
    year: '2023',
    participants: 25,
    image: '/environmental-education-workshop.png',
  },
]
