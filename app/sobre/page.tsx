import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { History, Target, Eye } from 'lucide-react'

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Sobre o BIOTEC</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Conheça mais sobre nossa história, missão e visão
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Nossa História</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  O Clube de Ciências BIOTEC nasceu em 2019 na Universidade do Estado de Minas Gerais (UEMG – Unidade Ibirité), fruto da colaboração entre uma professora e um acadêmico do curso de Licenciatura em Ciências Biológicas. O projeto surgiu com o objetivo de investigar as percepções de estudantes de escolas públicas do município de Ibirité sobre o conceito de um clube de ciências e promover atividades investigativas que despertassem o interesse pela ciência.
                </p>
                
                <p className="text-lg">
                  Com a chegada da pandemia de COVID-19 em 2020, o projeto demonstrou sua capacidade de adaptação e resiliência. Durante os anos de 2020 e 2021, todas as atividades foram mantidas de forma virtual, garantindo a continuidade do aprendizado científico mesmo diante dos desafios impostos pelo isolamento social. Essa experiência fortaleceu o uso de tecnologias digitais e ampliou o alcance do projeto.
                </p>
                
                <p className="text-lg">
                  Em 2022, com o avanço da imunização, o Clube retornou de forma híbrida, combinando o melhor dos dois mundos: encontros presenciais realizados nos laboratórios da UEMG e atividades virtuais síncronas. Essa abordagem híbrida permitiu maior flexibilidade e acessibilidade, alcançando estudantes de diferentes localidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2">
                  <CardContent className="pt-8 pb-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Missão</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Engajar e formar novos cientistas, promovendo a ciência de forma acessível e colaborativa, integrando a comunidade acadêmica e escolar na construção do saber científico através de atividades investigativas, formação continuada e divulgação científica.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-8 pb-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <Eye className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold">Visão</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Ser referência em divulgação científica e formação de jovens cientistas na região metropolitana de Belo Horizonte, contribuindo para o desenvolvimento do pensamento científico e crítico nas escolas públicas e na comunidade em geral.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossos Valores</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-secondary/30 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Acessibilidade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tornar a ciência acessível a todos, independente de origem ou condição social.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg bg-secondary/30 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Colaboração</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trabalhar em conjunto com a comunidade acadêmica e escolar.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg bg-secondary/30 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Curiosidade Científica</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Estimular o questionamento e a investigação como base do conhecimento.
                  </p>
                </div>
                
                <div className="p-6 rounded-lg bg-secondary/30 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Inovação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Adaptar-se às mudanças e buscar novas formas de ensinar e aprender.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
