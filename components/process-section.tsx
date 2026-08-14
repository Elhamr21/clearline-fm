'use client'

import { motion } from 'framer-motion'
import { Phone, FileText, Sparkles } from 'lucide-react'
import { itemVariants } from '@/components/reveal'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Kontakt aufnehmen',
    description:
      'Sie melden sich unkompliziert per Telefon oder über das Formular. Wir besprechen Ihren Bedarf.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Individuelles Angebot',
    description:
      'Sie erhalten ein transparentes, auf Ihre Immobilie zugeschnittenes Angebot – ohne versteckte Kosten.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Professionelle Betreuung',
    description:
      'Wir übernehmen zuverlässig die Ausführung und kümmern uns dauerhaft um Ihre Immobilie.',
  },
]

export function ProcessSection() {
  return (
    <section id="ablauf" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Ablauf</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance text-navy sm:text-5xl">
            In drei Schritten zur gepflegten Immobilie
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Einfach, transparent und ohne Umwege – so starten wir unsere Zusammenarbeit.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.15 }}
          className="relative mt-16 grid gap-8 md:grid-cols-3"
        >
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          {steps.map((step) => (
            <motion.div key={step.number} variants={itemVariants} className="relative flex flex-col">
              <div className="relative z-10 flex items-center gap-4">
                <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl bg-navy text-primary-foreground shadow-lg">
                  <step.icon className="h-7 w-7 text-teal-bright" />
                </span>
                <span className="font-display text-5xl font-extrabold text-border">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
