'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Für welche Immobilien bietet ClearLine F.M. seine Leistungen an?',
    a: 'Wir betreuen sowohl private als auch gewerbliche Immobilien – von Wohnungen und Einfamilienhäusern bis hin zu Bürogebäuden und größeren Objekten.',
  },
  {
    q: 'Kann ich mehrere Leistungen kombinieren?',
    a: 'Ja. Ein großer Vorteil von ClearLine F.M. ist, dass Sie alle Leistungen aus einer Hand erhalten – von der Reinigung über die Grünflächenpflege bis zum Hausmeisterservice, koordiniert von einem Ansprechpartner.',
  },
  {
    q: 'Wie erhalte ich ein Angebot?',
    a: 'Nehmen Sie einfach über das Kontaktformular oder telefonisch Kontakt auf. Nach einem kurzen Gespräch über Ihren Bedarf erstellen wir Ihnen ein individuelles und transparentes Angebot.',
  },
  {
    q: 'Sind auch regelmäßige Betreuungen möglich?',
    a: 'Selbstverständlich. Wir bieten sowohl einmalige Einsätze als auch regelmäßige, langfristige Betreuung Ihrer Immobilie an – ganz nach Ihrem Bedarf.',
  },
  {
    q: 'Arbeiten Sie flexibel nach meinen Wünschen?',
    a: 'Ja, unsere Lösungen werden individuell auf Ihre Immobilie, Ihren Rhythmus und Ihre Anforderungen abgestimmt.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-background pb-24 sm:pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">FAQ</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance text-navy sm:text-5xl">
            Häufige Fragen
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-navy sm:text-lg">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-navy"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
