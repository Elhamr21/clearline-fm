'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, contact } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6 lg:px-8',
          scrolled ? 'mt-2 sm:mt-3' : 'mt-0',
        )}
      >
        <div
          className={cn(
            'flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500',
            scrolled
              ? 'glass border border-border/70 shadow-[0_8px_30px_rgba(15,36,56,0.08)]'
              : 'border border-transparent',
          )}
        >
          <a href="#top" className="flex items-center gap-2.5" aria-label="ClearLine F.M. Startseite">
            <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-border">
              <Image
                src="/clearline-logo.jpg"
                alt="ClearLine F.M. Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  'font-display text-base font-extrabold tracking-tight transition-colors',
                  scrolled ? 'text-navy' : 'text-white',
                )}
              >
                ClearLine
              </span>
              <span
                className={cn(
                  'text-[10px] font-medium uppercase tracking-[0.22em] transition-colors',
                  scrolled ? 'text-muted-foreground' : 'text-white/70',
                )}
              >
                Facility Management
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  scrolled
                    ? 'text-foreground/70 hover:bg-secondary hover:text-foreground'
                    : 'text-white/85 hover:bg-white/10 hover:text-white',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={contact.phoneHref}
              className={cn(
                'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/85 hover:text-white',
              )}
            >
              <Phone className="h-4 w-4" />
              {contact.phone}
            </a>
            <a
              href="#kontakt"
              className={cn(
                'rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm transition-all hover:shadow-md',
                scrolled
                  ? 'bg-navy text-primary-foreground hover:bg-navy-soft'
                  : 'bg-white text-navy hover:bg-white/90',
              )}
            >
              Angebot anfragen
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              'rounded-lg p-2 transition-colors lg:hidden',
              scrolled ? 'text-foreground' : 'text-white',
            )}
            aria-label="Menü öffnen"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-background p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-extrabold text-navy">ClearLine</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-foreground"
                  aria-label="Menü schließen"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-lg font-medium text-foreground/80 transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium"
                >
                  <Phone className="h-4 w-4 text-teal" />
                  {contact.phone}
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-navy px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  Kostenloses Angebot anfragen
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
