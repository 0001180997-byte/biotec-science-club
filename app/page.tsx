import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Microscope, Users, BookOpen, AsteriskSquareIcon } from 'lucide-react'
import Link from 'next/link'
import homeData from '@/data/home.json'

export default function HomePage() {
  const researchLines = {
    title: 'Nossas Linhas de Pesquisa',
    subtitle: 'Exploramos diferentes áreas da ciência para promover a educação científica',
    lines: [
      {
        icon: 'Microscope',
        title: 'Pesquisa Científica',
        description: 'Desenvolvimento de projetos de pesquisa em ciências biológicas',
      },
      {
        icon: 'Users',
        title: 'Extensão Universitária',
        description: 'Atividades práticas e teóricas com a comunidade',
      },
      {
        icon: 'BookOpen',
        title: 'Divulgação Científica',
        description: 'Compartilhamento de conhecimento científico de forma acessível',
      },
    ],
  }

  const iconMap = {
    Microscope: Microscope,
    Users: Users,
    BookOpen: BookOpen,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <AsteriskSquareIcon className="h-4 w-4" />
                <span>{homeData.hero.badge}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                {homeData.hero.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">
                {homeData.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/sobre">
                    Conheça o Projeto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{homeData.about.title}</h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
                {homeData.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Lines Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{researchLines.title}</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                {researchLines.subtitle}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {researchLines.lines.map((line, index) => {
                  const Icon = iconMap[line.icon as keyof typeof iconMap]
                  const colorClasses = [
                    'bg-primary/10 text-primary',
                    'bg-accent/10 text-accent',
                    'bg-chart-3/10 text-chart-3',
                  ]
                  
                  return (
                    <Card key={index} className="border-2 hover:border-primary transition-colors">
                      <CardContent className="pt-8 pb-6 space-y-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses[index]}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold">{line.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {line.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                Participe do BIOTEC
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Faça parte de nossa comunidade científica e ajude a transformar a educação
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contato">
                  Entre em Contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
