import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Microscope, Users, BookOpen, Lightbulb, FlaskConical, GraduationCap } from 'lucide-react'

export default function PesquisaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Linhas de Pesquisa</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Conheça as três principais áreas de pesquisa e atuação do BIOTEC
              </p>
            </div>
          </div>
        </section>

        {/* Main Research Lines */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Research Line 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <Microscope className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">Linha 01</span>
                      <h2 className="text-2xl md:text-3xl font-bold">Desenvolvimento de Atividades Investigativas</h2>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      Nossa primeira linha de pesquisa foca no desenvolvimento e aplicação de atividades investigativas que incentivam a curiosidade científica e a prática de investigação entre os participantes.
                    </p>
                    <p>
                      Através de experimentos práticos, projetos de pesquisa e atividades hands-on, os estudantes são encorajados a formular hipóteses, coletar dados, analisar resultados e comunicar suas descobertas, seguindo o método científico de forma autêntica.
                    </p>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <FlaskConical className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold mb-1">Experimentos</h4>
                      <p className="text-sm text-muted-foreground">Práticas laboratoriais guiadas</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <Lightbulb className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold mb-1">Projetos</h4>
                      <p className="text-sm text-muted-foreground">Investigações científicas</p>
                    </div>
                  </div>
                </div>
                
                <Card className="order-1 lg:order-2 border-2">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
                  </CardContent>
                </Card>
              </div>

              {/* Research Line 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <Card className="border-2">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-accent/20 to-chart-3/20 rounded-lg" />
                  </CardContent>
                </Card>
                
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                      <Users className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-accent">Linha 02</span>
                      <h2 className="text-2xl md:text-3xl font-bold">Formação Inicial e Continuada</h2>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      Esta linha dedica-se à formação de estudantes e professores, oferecendo oportunidades de aprendizado e desenvolvimento tanto para iniciantes quanto para aqueles que buscam aprofundar seus conhecimentos na área científica.
                    </p>
                    <p>
                      Trabalhamos com oficinas, cursos, workshops e mentorias que promovem o desenvolvimento de competências científicas, pedagógicas e de comunicação, preparando os participantes para atuar como agentes multiplicadores do conhecimento científico.
                    </p>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <GraduationCap className="h-6 w-6 text-accent mb-2" />
                      <h4 className="font-semibold mb-1">Capacitação</h4>
                      <p className="text-sm text-muted-foreground">Cursos e workshops</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <Users className="h-6 w-6 text-accent mb-2" />
                      <h4 className="font-semibold mb-1">Mentoria</h4>
                      <p className="text-sm text-muted-foreground">Acompanhamento individual</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Line 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-chart-3/10">
                      <BookOpen className="h-7 w-7 text-chart-3" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-chart-3">Linha 03</span>
                      <h2 className="text-2xl md:text-3xl font-bold">Divulgação Científica</h2>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      Nossa terceira linha de pesquisa promove o acesso ao conhecimento científico por meio de atividades e materiais que tornam a ciência mais próxima e compreensível para o público em geral.
                    </p>
                    <p>
                      Através de eventos, publicações, mídias sociais e parcerias com escolas e instituições, levamos a ciência para além dos muros da universidade, democratizando o conhecimento e estimulando o interesse científico na comunidade.
                    </p>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <h4 className="font-semibold mb-2">Eventos e Feiras de Ciências</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Participação e organização de eventos científicos abertos à comunidade
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                      <h4 className="font-semibold mb-2">Materiais Educativos</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Produção de conteúdo acessível sobre ciência e tecnologia
                      </p>
                    </div>
                  </div>
                </div>
                
                <Card className="order-1 lg:order-2 border-2">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-chart-3/20 to-primary/20 rounded-lg" />
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
