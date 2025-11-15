/**
 * ARQUIVO DE DADOS DA GALERIA
 * 
 * Como adicionar fotos:
 * 1. Coloque suas fotos na pasta 'public/images/galeria/'
 * 2. Adicione um novo objeto no array 'galleries' com o título e imagens
 * 3. Para adicionar uma imagem individual, adicione o caminho no array 'images'
 * 
 * Exemplo de estrutura de pasta:
 * public/images/galeria/atividades-2024/foto1.jpg
 * public/images/galeria/atividades-2024/foto2.jpg
 */

export const galleries = [
  {
    title: 'Atividades de Campo 2024',
    year: '2024',
    coverImage: '/field-activities-science-students.jpg',
    images: [
      // Adicione os caminhos das fotos aqui
      // '/images/galeria/atividades-2024/foto1.jpg',
      // '/images/galeria/atividades-2024/foto2.jpg',
    ],
  },
  {
    title: 'Feira de Ciências 2023',
    year: '2023',
    coverImage: '/science-fair-students-projects.jpg',
    images: [],
  },
  {
    title: 'Oficinas de Microscopia',
    year: '2024',
    coverImage: '/microscopy-workshop-laboratory.jpg',
    images: [],
  },
  {
    title: 'Laboratórios UEMG',
    year: '2023',
    coverImage: '/biology-laboratory-university.jpg',
    images: [],
  },
  {
    title: 'Eventos e Workshops',
    year: '2023-2024',
    coverImage: '/scientific-workshop-event.jpg',
    images: [],
  },
  {
    title: 'Equipe BIOTEC',
    year: '2024',
    coverImage: '/science-team-university.jpg',
    images: [],
  },
]

export const featuredPhotos = [
  // Adicione aqui as fotos em destaque (até 8 fotos)
  '/science-students-laboratory.jpg',
  '/microscope-research.jpg',
  '/field-work-biodiversity.jpg',
  '/science-fair-presentation.jpg',
  '/workshop-teaching.jpg',
  '/team-collaboration-science.jpg',
  '/placeholder.svg?height=400&width=400',
  '/placeholder.svg?height=400&width=400',
]

export const videos = [
  {
    title: 'Feira de Ciências 2023',
    description: 'Resumo do evento anual',
    thumbnail: '/placeholder.svg?height=300&width=500',
    videoUrl: '#', // Link do YouTube ou caminho do vídeo
  },
  {
    title: 'Conhecendo o BIOTEC',
    description: 'Apresentação do projeto',
    thumbnail: '/placeholder.svg?height=300&width=500',
    videoUrl: '#',
  },
]
