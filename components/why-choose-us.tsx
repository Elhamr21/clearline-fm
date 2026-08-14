'use client'

import { motion } from 'framer-motion'
import { Layers, ShieldCheck, Sparkles, Settings2, Building2, HandshakeIcon } from 'lucide-react'
import { itemVariants } from '@/components/reveal'

const reasons = [
  {
    icon: Layers,
    title: 'Alles aus einer Hand',
    description:
      'Reinigung, Grünflächen und Hausmeisterservice – ein Ansprechpartner für Ihre gesamte Immobilie.',
    className: 'md:col-span-2 md:row-span-1',
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: 'Professionelle Betreuung',
    description: 'Geschultes Personal und verlässliche Abläufe.',
    className: '',
  },
  {
    icon: Sparkles,
    title: 'Gründliche Arbeit',
    description: 'Sorgfalt und Blick fürs Detail bei jedem Auftrag.',
    className: '',
  },
  {
    icon: Settings2,
    title: 'Flexible Lösungen',
    description: 'Individuell auf Ihren Bedarf und Rhythmus abgestimmt.',
    className: '',
  },
  {
    icon: Building2,
    title: 'Für Privat & Gewerbe',
    description: 'Ob Wohnung, Haus oder Bürogebäude – wir passen uns an.',
    className: '',
  },
  {
    icon: HandshakeIcon,
    title: 'Langfristige Zusammenarbeit',
    description:
      'Wir setzen auf verlässliche Partnerschaften und dauerhaft gepflegte Objekte – Jahr für Jahr.',
    className: 'md:col-span-2',
    featured: true,
  },
]

export function WhyChooseUs() {
  return (
    <section id="warum-wir" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-bright">
            Warum ClearLine
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Gute Gründe für die Zusammenarbeit
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-white/70">
            Verlässlichkeit, Qualität und ein Partner, der Ihre Immobilie so behandelt, als wäre sie
            seine eigene.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-7 transition-all duration-500 hover:border-teal/40 ${
                reason.featured ? 'bg-white/[0.07]' : 'bg-white/[0.04]'
              } ${reason.className}`}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-teal-bright ring-1 ring-inset ring-teal/20">
                <reason.icon className="h-6 w-6" />
              </span>
              <div className="mt-6">
                <h3 className="font-display text-xl font-bold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
