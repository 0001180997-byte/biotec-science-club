import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import projectsData from '@/data/projects.json'

export default function ProjetosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Nossos Projetos</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Conheça os projetos desenvolvidos pelo BIOTEC e seu impacto na comunidade
              </p>
            </div>
          </div>
        </section>

        {/* Active Projects Section */}
        {projectsData.active.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos Ativos</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Iniciativas em desenvolvimento que estão transformando a educação científica
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsData.active.map((project, index) => (
                    <Card key={index} className="border-2 hover:border-primary transition-colors flex flex-col">
                      <CardHeader>
                        <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-start justify-between mb-3">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Ativo</Badge>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(project.startDate).getFullYear()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Completed Projects Section */}
        {projectsData.completed.length > 0 && (
          <section className="py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos Concluídos</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Iniciativas que já foram finalizadas com sucesso
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {projectsData.completed.map((project, index) => (
                    <Card key={index} className="border-2">
                      <CardHeader>
                        <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Badge variant="secondary" className="w-fit mb-3">Concluído</Badge>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(project.startDate).getFullYear()}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Submit Project CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                Tem uma Ideia de Projeto?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Estamos sempre abertos a novas propostas de projetos científicos. Entre em contato e compartilhe sua ideia conosco!
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contato">
                  Propor Projeto
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
