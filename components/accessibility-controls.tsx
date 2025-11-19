'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Type, Minus, Plus } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function AccessibilityControls() {
  const [fontSize, setFontSize] = useState(100)

  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize')
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize))
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--accessible-font-size',
      `${fontSize}%`
    )
    localStorage.setItem('fontSize', fontSize.toString())
  }, [fontSize])

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 10, 150))
  }

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 10, 80))
  }

  const resetFontSize = () => {
    setFontSize(100)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Controles de acessibilidade"
          className="h-9 w-9"
        >
          <Type className="h-5 w-5" />
          <span className="sr-only">Controles de acessibilidade</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-2">
          <p className="text-sm font-semibold mb-2">Tamanho da Fonte</p>
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={decreaseFontSize}
              disabled={fontSize <= 80}
              aria-label="Diminuir fonte"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium min-w-[3ch] text-center">
              {fontSize}%
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={increaseFontSize}
              disabled={fontSize >= 150}
              aria-label="Aumentar fonte"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFontSize}
            className="w-full mt-2"
            aria-label="Resetar tamanho da fonte"
          >
            Resetar
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
