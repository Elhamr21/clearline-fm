import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { contact } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung der ClearLine F.M.',
}

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre
        personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
        Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        {contact.company}
        <br />
        {contact.name} ({contact.role})
        <br />
        Telefon: {contact.phone}
        <br />
        E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      <h2>3. Datenerfassung über das Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
        Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
        Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
        nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs.
        1 lit. b und f DSGVO.
      </p>

      <h2>4. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten,
        deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Darüber hinaus haben Sie
        ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten sowie ein Beschwerderecht
        bei der zuständigen Aufsichtsbehörde.
      </p>

      <h2>5. Speicherdauer</h2>
      <p>
        Ihre Daten werden gelöscht, sobald sie für die Zwecke ihrer Erhebung nicht mehr erforderlich
        sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>6. Kontakt in Datenschutzfragen</h2>
      <p>
        Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie
        sich bitte an: <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </LegalPage>
  )
}
