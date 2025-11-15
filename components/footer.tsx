import Link from 'next/link'
import { Microscope, Mail, MapPin, InstagramIcon } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Microscope className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none text-foreground">BIOTEC</span>
                <span className="text-xs text-muted-foreground">Clube de Ciências</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Promovendo a ciência de forma acessível e colaborativa desde 2019.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link href="/equipe" className="text-sm text-muted-foreground hover:text-primary transition-colors">Equipe</Link></li>
              <li><Link href="/projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projetos</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Pesquisa */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Pesquisa</h3>
            <ul className="space-y-2">
              <li><Link href="/pesquisa" className="text-sm text-muted-foreground hover:text-primary transition-colors">Linhas de Pesquisa</Link></li>
              <li><Link href="/publicacoes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Publicações</Link></li>
              <li><Link href="/galeria" className="text-sm text-muted-foreground hover:text-primary transition-colors">Galeria</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">UEMG - Unidade Ibirité<br />Ibirité, MG</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">clubedecienciascontato@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">@clubd.ciencias</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Clube de Ciências BIOTEC - UEMG. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
              <Link href="/parcerias" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Parcerias
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
