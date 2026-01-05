import { Section } from './Section'

/**
 * Skills grid with primary tools.
 * @returns {JSX.Element}
 */
export function Skills(): JSX.Element {
  const skills = [
    { name: 'Ahrefs', group: 'SEO' },
    { name: 'Google Search Console', group: 'SEO' },
    { name: 'SemRush', group: 'SEO' },
    { name: 'Keyword Planner', group: 'SEO' },
    { name: 'Yoast / Surfer', group: 'On-Page' },
    { name: 'Google Analytics', group: 'Analytics' },
    { name: 'Canva', group: 'Creatives' },
    { name: 'VEED', group: 'Video' },
    { name: 'HeyGen', group: 'AI Video' },
    { name: 'VEO', group: 'AI Video' },
    { name: 'LinkedIn / Reddit', group: 'Social' },
    { name: 'Sheets / CRM', group: 'Ops' },
  ]

  return (
    <Section id="skills" subtitle="Skills" title="Tools I use to deliver results">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <div
            key={s.name}
            className="rounded-lg border border-white/10 bg-white/5 p-4 hover:border-accent transition"
          >
            <div className="text-white font-medium">{s.name}</div>
            <div className="text-neutral-400 text-sm">{s.group}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}


