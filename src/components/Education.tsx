import { Section } from './Section'

/**
 * Education timeline.
 * @returns {JSX.Element}
 */
export function Education(): JSX.Element {
  const items = [
    { title: 'M.B.A. – MNNIT, Allahabad' },
    { title: 'B.A. – IGNOU, Lucknow (Political Science & Public Administration)' },
    { title: 'Intermediate – Kendriya Vidyalaya Sangathan, Lucknow (Humanities)' },
  ]

  return (
    <Section id="education" subtitle="Education" title="Academic background">
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.title} className="rounded-lg border border-white/10 bg-white/5 p-4 text-neutral-200">
            {i.title}
          </li>
        ))}
      </ul>
    </Section>
  )
}


