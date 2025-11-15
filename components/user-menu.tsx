'use client'

import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'

export function UserMenu() {
  const { t } = useI18n()

  return (
    <Button asChild variant="default" size="sm">
      <Link href="/auth/login">{t.auth.login}</Link>
    </Button>
  )
}
