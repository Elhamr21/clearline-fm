import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/site-footer'

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Zur Startseite">
            <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-border">
              <Image src="/clearline-logo.jpg" alt="ClearLine F.M. Logo" fill sizes="36px" className="object-cover" />
            </span>
            <span className="font-display text-base font-extrabold tracking-tight text-navy">
              ClearLine
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück
          </Link>
        </div>
      </header>

      <main className="mx-auto min-h-[60vh] max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <div className="prose prose-neutral mt-8 max-w-none text-muted-foreground [&_a]:text-teal [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_p]:leading-relaxed">
          {children}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
