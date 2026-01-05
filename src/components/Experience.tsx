import { Section } from './Section'
import { motion } from 'framer-motion'

/**
 * Displays experience roles.
 * @returns {JSX.Element}
 */
export function Experience(): JSX.Element {
  const roles = [
    {
      company: 'Attack Capital',
      title: 'On-page SEO Intern',
      period: 'June – July 2025',
      points: [
        'Optimized site content, created articles, mapped site structure',
        'Built backlinks and improved search visibility',
      ],
    },
    {
      company: 'LearnElectronics India',
      title: 'SEO Intern',
      period: 'April – June 2025',
      points: [
        'Worked on technical SEO and on-page optimization',
        'Analyzed performance using SEO tools',
      ],
    },
    {
      company: 'Amera Exports Pvt. Ltd.',
      title: 'Business Development Executive',
      period: 'Jan – Feb 2022',
      points: [
        'Managed client relations and contributed to market research',
        'Supported lead generation and reporting',
      ],
    },
    {
      company: 'Decodr Technologies',
      title: 'Program Counselor',
      period: 'Aug – Sep 2021',
      points: [
        'Guided students in career planning',
        'Contributed to educational content initiatives',
      ],
    },
    {
      company: 'Aashman Foundation',
      title: 'HR Executive',
      period: 'Aug – Nov 2020',
      points: [
        'Handled recruitment and onboarding',
        'Drove employee engagement programs',
      ],
    },
  ]

  return (
    <Section id="experience" subtitle="Experience" title="Where I’ve built impact">
      <div className="grid gap-4">
        {roles.map((r, idx) => (
          <motion.div
            key={r.company}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -3, scale: 1.005 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="text-white font-semibold">{r.title}</div>
                <div className="text-neutral-300">{r.company}</div>
              </div>
              <div className="text-neutral-400 text-sm">{r.period}</div>
            </div>
            <ul className="mt-3 list-disc list-inside text-neutral-300 space-y-1">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}


