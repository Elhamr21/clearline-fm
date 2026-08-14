'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Sparkles, Layers, Building } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const trustCards = [
  { icon: ShieldCheck, label: 'Professionell' },
  { icon: Sparkles, label: 'Zuverlässig' },
  { icon: Layers, label: 'Alles aus einer Hand' },
  { icon: Building, label: 'Privat & Gewerbe' },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const start = () => {
      video.play().catch(() => {})
    }
    if (video.readyState >= 3) {
      setVideoReady(true)
      start()
    }
    video.addEventListener('playing', () => setVideoReady(true))
    video.addEventListener('canplay', start)
    return () => {
      video.removeEventListener('playing', () => setVideoReady(true))
      video.removeEventListener('canplay', start)
    }
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden bg-navy"
    >
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* overlays — light neutral darkening keeps the video visible, focused gradients only where text sits */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-bright" />
            Professionelles Facility Management
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl"
          >
            Ihre Immobilie.
            <br />
            <span className="text-teal-bright">Unser Anspruch.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg font-medium text-pretty text-white/85 sm:text-xl"
          >
            Professionelle Reinigung, Objektbetreuung und Facility Management – zuverlässig,
            gründlich und aus einer Hand.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-white/70"
          >
            ClearLine F.M. bietet professionelle Lösungen für private und gewerbliche Immobilien.
            Von der Reinigung bis zur Pflege Ihrer Außenanlagen kümmern wir uns zuverlässig um jedes
            Detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.45 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-navy shadow-lg shadow-teal/20 transition-all hover:bg-teal-bright hover:shadow-xl"
            >
              Kostenloses Angebot anfragen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
            >
              Unsere Leistungen
            </a>
          </motion.div>
        </div>

        {/* floating trust cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:max-w-3xl md:grid-cols-4"
        >
          {trustCards.map((card, i) => (
            <motion.div
              key={card.label}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
              className="glass-dark flex items-center gap-3 rounded-2xl border border-white/15 px-4 py-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/20 text-teal-bright">
                <card.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-white">{card.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
