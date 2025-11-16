import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, GraduationCap, School, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import partnersData from '@/data/partners.json'

export default function ParceriasPage() {
  const iconMap = {
    GraduationCap,
    Building2,
    School,
  }

  const partners = partnersData.mainPartners.map(partner => ({
    ...partner,
    icon: iconMap[partner.icon as keyof typeof iconMap] || Users
  }))

  const collaborators = partnersData.collaborators

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Parcerias</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Colaborações que fortalecem o BIOTEC e ampliam nosso alcance
              </p>
            </div>
          </div>
        </section>

        {/* Main Partners Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Parceiros Principais</h2>
                <p className="text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Instituições que colaboram diretamente com o desenvolvimento do projeto
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {partners.map((partner, index) => {
                  const Icon = partner.icon
                  return (
                    <Card key={index} className="border-2 hover:border-primary transition-colors">
                      <CardContent className="pt-8 pb-6 space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-1">{partner.name}</h3>
                            <span className="text-sm text-primary font-medium">{partner.type}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {partner.description}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Collaborators Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Colaboradores</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Instituições e organizações que apoiam nossas atividades
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {collaborators.map((collaborator, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-accent" />
                        </div>
                        <p className="font-semibold">{collaborator}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefícios da Parceria</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <School className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Para Escolas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acesso a atividades investigativas, formação de professores e materiais didáticos
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Para Universidades</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Oportunidades de pesquisa, extensão e formação inicial de professores
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-chart-3/10 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-chart-3" />
                  </div>
                  <h3 className="text-xl font-semibold">Para Instituições</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Visibilidade, impacto social e contribuição para a divulgação científica
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                Seja Nosso Parceiro
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Interessado em estabelecer uma parceria com o BIOTEC? Entre em contato e vamos trabalhar juntos pela educação científica!
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contato">
                  Falar Conosco
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
