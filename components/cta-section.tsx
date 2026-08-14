'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { contact } from '@/lib/site-data'

export function CtaSection() {
  return (
    <section className="bg-background pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 text-center sm:px-16 sm:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-teal/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-teal-bright/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl">
              Bereit für eine gepflegte Immobilie?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-pretty text-white/75">
              Lassen Sie uns über Ihre Immobilie sprechen. Wir erstellen Ihnen ein unverbindliches,
              individuelles Angebot.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-navy shadow-lg transition-all hover:bg-teal-bright"
              >
                Kostenloses Angebot anfragen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
              >
                <Phone className="h-4 w-4" />
                Jetzt kontaktieren
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
