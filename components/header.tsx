'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AccessibilityControls } from '@/components/accessibility-controls'


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/pesquisa', label: 'Pesquisa' },
    { href: '/equipe', label: 'Equipe' },
    { href: '/projetos', label: 'Projetos' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/blog', label: 'Blog' },
    { href: '/publicacoes', label: 'Publicações' },
    { href: '/parcerias', label: 'Parcerias' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="BIOTEC Clube de Ciências - Página inicial">
            <Image 
              src="/images/logo-biotec.png" 
              alt="Logo BIOTEC Clube de Ciências" 
              width={48} 
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none text-foreground">{"BIOTEC"}</span>
              <span className="text-xs text-muted-foreground">Clube de Ciências</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <AccessibilityControls />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <AccessibilityControls />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            className="lg:hidden py-4 border-t border-border" 
            aria-label="Navegação principal mobile"
            id="mobile-navigation"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
