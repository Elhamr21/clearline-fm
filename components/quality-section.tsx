'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, ShieldCheck, Search, CalendarClock } from 'lucide-react'
import { itemVariants } from '@/components/reveal'

const highlights = [
  {
    icon: Users,
    title: 'Professionelle Teams',
    description: 'Geschultes Personal mit Erfahrung und Verantwortungsbewusstsein.',
  },
  {
    icon: ShieldCheck,
    title: 'Zuverlässiger Service',
    description: 'Termintreue und verlässliche Abläufe, auf die Sie sich verlassen können.',
  },
  {
    icon: Search,
    title: 'Blick fürs Detail',
    description: 'Sorgfältige Ausführung – auch dort, wo andere aufhören.',
  },
  {
    icon: CalendarClock,
    title: 'Langfristige Pflege',
    description: 'Kontinuierliche Betreuung für dauerhaft gepflegte Immobilien.',
  },
]

export function QualitySection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Qualität
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-navy sm:text-5xl">
            Qualität, die man sieht – und der man vertraut.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            Wir verbinden professionelle Abläufe mit echtem Anspruch an Sauberkeit und Pflege. Das
            Ergebnis: Immobilien, die dauerhaft einen erstklassigen Eindruck hinterlassen.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/12 text-teal">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_80px_-30px_rgba(15,36,56,0.4)]">
            <Image
              src="/quality-detail.png"
              alt="Sorgfältige Reinigung mit Blick fürs Detail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            className="glass absolute -left-4 top-10 rounded-2xl border border-border p-4 shadow-xl sm:-left-8"
          >
            <p className="font-display text-sm font-bold text-navy">Gründlich.</p>
            <p className="text-xs text-muted-foreground">Bis ins letzte Detail.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
