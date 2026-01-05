import { Section } from './Section'
import { motion } from 'framer-motion'

/**
 * About section with summary of capabilities.
 * @returns {JSX.Element}
 */
export function About(): JSX.Element {
  return (
    <Section id="about" subtitle="About Me" title="I turn search intent into outcomes">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.p
          className="text-neutral-300 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          I’m a passionate digital marketing professional with hands-on experience in SEO content writing, on-page
          optimization, backlink creation, video editing, social media marketing, and client interaction. I build
          campaigns that drive measurable traffic, engagement, and conversions.
        </motion.p>
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="text-white font-medium">On-Page SEO</span>
            <div className="text-neutral-400">Titles, meta, ALT, internal links</div>
          </li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="text-white font-medium">Keyword Research</span>
            <div className="text-neutral-400">Search intent, clustering</div>
          </li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="text-white font-medium">Backlink Building</span>
            <div className="text-neutral-400">Guest posts, directories, forums</div>
          </li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="text-white font-medium">Social Media</span>
            <div className="text-neutral-400">Content calendars, creatives</div>
          </li>
        </motion.ul>
      </div>
    </Section>
  )
}


