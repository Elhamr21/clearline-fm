import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { services, navLinks, contact } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/20">
                <Image
                  src="/clearline-logo.jpg"
                  alt="ClearLine F.M. Logo"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-extrabold tracking-tight">
                  ClearLine
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
                  Facility Management
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Professionelle Reinigung, Objektbetreuung und Facility Management für private und
              gewerbliche Immobilien – zuverlässig und aus einer Hand.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-teal-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Leistungen
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#leistungen"
                    className="text-sm text-white/75 transition-colors hover:text-teal-bright"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Kontakt</h4>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-white/75">{contact.name}</li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-teal-bright"
                >
                  <Phone className="h-4 w-4" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 break-all text-sm text-white/75 transition-colors hover:text-teal-bright"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

<div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
  {/* Left */}
  <p className="text-xs text-white/50">
    © {new Date().getFullYear()} ClearLine F.M. Alle Rechte vorbehalten.
  </p>

  {/* Center */}
  <p className="text-xs text-white/50">
    Developed by{" "}
    <a
      href="https://clearline-ai.tech"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/70 transition-colors hover:text-white"
    >
      ClearLine Tech
    </a>
  </p>

  {/* Right */}
  <div className="flex items-center gap-6">
    <Link
      href="/impressum"
      className="text-xs text-white/60 transition-colors hover:text-white"
    >
      Impressum
    </Link>

    <Link
      href="/datenschutz"
      className="text-xs text-white/60 transition-colors hover:text-white"
    >
      Datenschutz
    </Link>
  </div>
</div>
      </div>
    </footer>
  )
}
