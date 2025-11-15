import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import teamData from '@/data/team.json'

export default function EquipePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Nossa Equipe</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Conheça as pessoas que fazem o Clube acontecer
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Equipe</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.members.map((member, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-32 h-32 rounded-full object-cover"
                        />
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                          <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                          <p className="text-muted-foreground leading-relaxed">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Faça Parte da Nossa Equipe</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estamos sempre em busca de estudantes, pesquisadores e voluntários apaixonados por ciência. Entre em contato para saber como participar!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
