import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, ExternalLink, Calendar } from 'lucide-react'
import publicationsData from '@/data/publications.json'

export default function PublicacoesPage() {
  const publications = publicationsData.academicPublications
  const materials = publicationsData.educationalMaterials

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Publicações</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Artigos, materiais didáticos e produções científicas desenvolvidas pelo BIOTEC
              </p>
            </div>
          </div>
        </section>

        {/* Academic Publications Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Artigos e Trabalhos Científicos</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Publicações em revistas e eventos acadêmicos
                </p>
              </div>
              
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          <div>
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="text-lg font-semibold leading-tight">{pub.title}</h3>
                              <Badge variant="secondary">{pub.type}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                            <p className="text-sm text-muted-foreground italic">{pub.journal}</p>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{pub.year}</span>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                Acessar publicação
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Educational Materials Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Materiais Educativos</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Guias, manuais e protocolos desenvolvidos pela equipe
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {materials.map((material, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <FileText className="h-6 w-6 text-accent" />
                      </div>
                      <Badge variant="outline" className="w-fit mb-2">{material.type}</Badge>
                      <CardTitle className="text-lg leading-tight">{material.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {material.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{material.year}</span>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Impacto Científico</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-2 text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <p className="text-muted-foreground">Publicações</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-4xl font-bold text-accent mb-2">8</div>
                    <p className="text-muted-foreground">Materiais Didáticos</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-4xl font-bold text-chart-3 mb-2">20+</div>
                    <p className="text-muted-foreground">Apresentações em Eventos</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
