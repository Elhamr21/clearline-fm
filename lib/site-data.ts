import {
  Home,
  Building2,
  Sparkles,
  Scissors,
  Leaf,
  Trees,
  Wrench,
  ClipboardCheck,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image: string
}

export const services: Service[] = [
  {
    id: 'haus-wohnungsreinigung',
    title: 'Haus- und Wohnungsreinigung',
    description:
      'Gründliche Reinigung für Wohnräume – regelmäßig oder als Grundreinigung, immer mit Blick fürs Detail.',
    icon: Home,
    image: '/services/haus-wohnungsreinigung.png',
  },
  {
    id: 'buero-gebaeudereinigung',
    title: 'Büro- und Gebäudereinigung',
    description:
      'Professionelle Unterhaltsreinigung für Büros und Gebäude – für ein repräsentatives Arbeitsumfeld.',
    icon: Building2,
    image: '/services/buero-gebaeudereinigung.png',
  },
  {
    id: 'fensterreinigung',
    title: 'Fensterreinigung',
    description:
      'Streifenfreie Fenster, Glasfassaden und Rahmen – für klare Durchsicht und einen gepflegten Eindruck.',
    icon: Sparkles,
    image: '/services/fensterreinigung.png',
  },
  {
    id: 'rasenmaehen',
    title: 'Rasenmähen und Grundstückspflege',
    description:
      'Gepflegte Rasenflächen und ordentliche Grundstücke – zuverlässig über die gesamte Saison.',
    icon: Scissors,
    image: '/services/rasenmaehen.png',
  },
  {
    id: 'gartenpflege',
    title: 'Garten- und Grünflächenpflege',
    description:
      'Fachgerechte Pflege von Gärten, Hecken und Grünflächen – damit Ihr Außenbereich das ganze Jahr überzeugt.',
    icon: Leaf,
    image: '/services/gartenpflege.png',
  },
  {
    id: 'aussenanlagen',
    title: 'Pflege und Reinigung von Außenanlagen',
    description:
      'Wege, Höfe und Außenbereiche werden sauber gehalten und gepflegt – für einen einladenden Gesamteindruck.',
    icon: Trees,
    image: '/services/aussenanlagen.png',
  },
  {
    id: 'hausmeisterservice',
    title: 'Hausmeisterservice',
    description:
      'Zuverlässiger Hausmeisterservice für alle laufenden Aufgaben rund um Ihre Immobilie.',
    icon: Wrench,
    image: '/services/hausmeisterservice.png',
  },
  {
    id: 'objektbetreuung',
    title: 'Allgemeine Objektbetreuung',
    description:
      'Ganzheitliche Betreuung Ihrer Immobilie – ein Ansprechpartner, alle Leistungen aus einer Hand.',
    icon: ClipboardCheck,
    image: '/services/objektbetreuung.png',
  },
]

export const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Warum wir', href: '#warum-wir' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Kontakt', href: '#kontakt' },
]

export const contact = {
  name: 'Sofian Sahiti',
  role: 'Geschäftsführer',
  phone: '048477782',
  phoneHref: 'tel:048477782',
  email: 'Sofian.sahiti@clearline-cc.de',
  company: 'ClearLine F.M.',
}
