'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const items = [
  { src: '/gallery/gallery-1.png', caption: 'Gepflegte Wohnimmobilien', span: 'row-span-2' },
  { src: '/gallery/gallery-2.png', caption: 'Repräsentative Bürowelten', span: '' },
  { src: '/gallery/gallery-3.png', caption: 'Grünflächen & Gärten', span: '' },
  { src: '/gallery/gallery-4.png', caption: 'Klare Fenster & Fassaden', span: 'row-span-2' },
  { src: '/gallery/gallery-5.png', caption: 'Gepflegte Außenanlagen', span: '' },
  { src: '/gallery/gallery-6.png', caption: 'Makellose Innenräume', span: '' },
]

export function GallerySection() {
  return (
    <section id="galerie" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Galerie
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance text-navy sm:text-5xl">
            Ergebnisse, die für sich sprechen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            Ein Eindruck unserer Arbeit – von gepflegten Innenräumen bis zu makellosen Außenanlagen.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-border ${item.span}`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.caption}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-sm font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
