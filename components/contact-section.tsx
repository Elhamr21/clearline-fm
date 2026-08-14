'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, User, CheckCircle2, ArrowRight } from 'lucide-react'
import { contact, services } from '@/lib/site-data'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [agree, setAgree] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!agree) return
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(
      `Anfrage: ${(data.get('leistung') as string) || 'Facility Management'}`,
    )
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nE-Mail: ${data.get('email')}\nTelefon: ${data.get('telefon')}\nGewünschte Leistung: ${data.get('leistung')}\n\nNachricht:\n${data.get('nachricht')}`,
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-teal focus:ring-2 focus:ring-teal/20'

  return (
    <section id="kontakt" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Kontakt</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance text-navy sm:text-5xl">
            Lassen Sie uns sprechen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Stellen Sie Ihre Anfrage – wir melden uns zeitnah mit einem individuellen Angebot.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-navy p-8 text-white lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold">{contact.company}</h3>
              <p className="mt-2 text-sm text-white/70">
                Ihr Partner für professionelles Facility Management.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-bright">
                    <User className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{contact.name}</p>
                    <p className="text-xs text-white/60">{contact.role}</p>
                  </div>
                </div>
                <a href={contact.phoneHref} className="flex items-center gap-4 group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-bright">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-white/60">Telefon</p>
                    <p className="text-sm font-semibold transition-colors group-hover:text-teal-bright">
                      {contact.phone}
                    </p>
                  </div>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-bright">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-white/60">E-Mail</p>
                    <p className="break-all text-sm font-semibold transition-colors group-hover:text-teal-bright">
                      {contact.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm lg:col-span-3"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy">Vielen Dank!</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Ihre Anfrage wird in Ihrem E-Mail-Programm geöffnet. Wir melden uns
                  schnellstmöglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input id="name" name="name" required placeholder="Ihr Name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@beispiel.de"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefon" className="mb-1.5 block text-sm font-medium text-foreground">
                      Telefon
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      placeholder="Ihre Telefonnummer"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="leistung" className="mb-1.5 block text-sm font-medium text-foreground">
                      Gewünschte Leistung
                    </label>
                    <select id="leistung" name="leistung" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Bitte wählen
                      </option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="nachricht" className="mb-1.5 block text-sm font-medium text-foreground">
                    Nachricht
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={4}
                    required
                    placeholder="Beschreiben Sie kurz Ihr Anliegen"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    required
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-teal accent-teal"
                  />
                  <span>
                    Ich habe die <a href="/datenschutz" className="font-medium text-teal underline underline-offset-2">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.
                  </span>
                </label>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-navy-soft disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Anfrage senden
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
