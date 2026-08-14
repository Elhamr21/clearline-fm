'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { contact } from '@/lib/site-data'

const points = [
  'Ein Ansprechpartner für alle Leistungen',
  'Zuverlässige und termingerechte Ausführung',
  'Sorgfalt und Qualität bei jedem Detail',
]

export function AboutSection() {
  return (
    <section id="ueber-uns" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-last lg:order-first"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_80px_-30px_rgba(15,36,56,0.4)]">
            <Image
              src="/about-team.png"
              alt="Das Team von ClearLine F.M."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border bg-card p-5 shadow-xl sm:left-8 sm:right-auto sm:w-64">
            <p className="font-display text-2xl font-extrabold text-navy">Aus einer Hand</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Alle Leistungen rund um Ihre Immobilie – koordiniert und zuverlässig.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-teal"
          >
            Über uns
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-navy sm:text-5xl"
          >
            Ihr zuverlässiger Partner für gepflegte Immobilien.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground"
          >
            ClearLine F.M. steht für professionelles Facility Management mit Anspruch. Wir betreuen
            private und gewerbliche Immobilien mit der Sorgfalt und Verlässlichkeit, die eine
            langfristige Zusammenarbeit verdient – von der Reinigung bis zur Pflege Ihrer
            Außenanlagen.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-8 space-y-3"
          >
            {points.map((point) => (
              <motion.li
                key={point}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-medium text-foreground">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-primary-foreground">
              SS
            </div>
            <div>
              <p className="font-display text-lg font-bold italic text-navy">{contact.name}</p>
              <p className="text-sm text-muted-foreground">{contact.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
