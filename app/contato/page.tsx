import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Instagram, Send } from 'lucide-react'

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Contato</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Entre em contato conosco. Estamos prontos para responder suas dúvidas!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Envie uma Mensagem</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                  </p>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="seu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefone (opcional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(31) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option>Informações sobre o projeto</option>
                        <option>Parceria</option>
                        <option>Participação em atividades</option>
                        <option>Proposta de projeto</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Escreva sua mensagem aqui..."
                      />
                    </div>
                    
                    <Button size="lg" className="w-full text-base">
                      Enviar Mensagem
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Você também pode entrar em contato diretamente através dos canais abaixo.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <Card className="border-2">
                      <CardContent className="pt-6 pb-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Endereço</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              Av. São Paulo Rod MG 040,n°3996- Vila Rosário<br />
                              UEMG Unidade Ibirité<br />
                              Ibirité, Minas Gerais, Brasil<br />
                              CEP: 32412-190
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-2">
                      <CardContent className="pt-6 pb-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                            <Mail className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <a href="mailto:biotec@uemg.br" className="text-primary hover:underline">
                              {"clubedecienciascontato@gmail.com"}
                            </a>
                            <p className="text-sm text-muted-foreground mt-1">
                              Respondemos em ate um mês   
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-2">
                      <CardContent className="pt-6 pb-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10 flex-shrink-0">
                            <Instagram className="h-6 w-6 text-chart-3" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Instagram</h3>
                            <a 
                              href="https://instagram.com/clubd.ciencias" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-primary hover:underline"
                            >
                              @clubd.ciencias
                            </a>
                            <p className="text-sm text-muted-foreground mt-1">
                              Siga-nos no Instagram
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Real Google Maps iframe */}
                  <Card className="border-2">
                    <CardContent className="p-0 overflow-hidden rounded-lg">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8234662424943!2d-44.08750878927894!3d-20.015922540912097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bf4c8c48590d%3A0x237b1f210f21a6d0!2sUniversidade%20do%20Estado%20de%20Minas%20Gerais%20-%20Unidade%20Ibirit%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1763299435743!5m2!1spt-BR!2sbr" 
                        className="w-full h-[300px] md:h-[400px] border-0"
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização UEMG Unidade Ibirité"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <Card className="border-2">
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-lg font-semibold mb-3">Como posso participar das atividades do BIOTEC?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Entre em contato conosco através do formulário acima ou por email. Aceitamos estudantes da UEMG e de escolas parceiras para participar das atividades.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2">
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-lg font-semibold mb-3">Vocês realizam atividades em outras cidades?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Atualmente, nossas atividades presenciais estão concentradas em Ibirité e região metropolitana de Belo Horizonte. No entanto, oferecemos também atividades virtuais que podem alcançar outras localidades.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2">
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-lg font-semibold mb-3">É possível propor um projeto para o BIOTEC?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sim! Estamos sempre abertos a novas propostas de projetos e parcerias. Entre em contato descrevendo sua ideia e avaliaremos as possibilidades de colaboração.
                    </p>
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
