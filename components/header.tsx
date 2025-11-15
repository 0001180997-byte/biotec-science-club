'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Microscope } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { UserMenu } from '@/components/user-menu'
import { useI18n } from '@/lib/i18n/context'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useI18n()

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/sobre', label: t.nav.about },
    { href: '/pesquisa', label: t.nav.research },
    { href: '/equipe', label: t.nav.team },
    { href: '/projetos', label: t.nav.projects },
    { href: '/galeria', label: t.nav.gallery },
    { href: '/blog', label: t.nav.blog },
    { href: '/publicacoes', label: t.nav.publications },
    { href: '/parcerias', label: t.nav.partnerships },
    { href: '/contato', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Microscope className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none text-foreground">{"BIOTEC"}</span>
              <span className="text-xs text-muted-foreground">Clube de Ciências</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <UserMenu />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
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
              <div className="flex items-center gap-2 px-3 py-2">
                <LanguageSwitcher />
                <UserMenu />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
