import { Section } from './Section'
import { motion } from 'framer-motion'
import openmicImg from '../img/openmic.png'
import { useLightbox } from './Lightbox'

type Project = {
  title: string
  metric: string
  description: string
  href?: string
  imgSrc?: string
}

const projects: Project[] = [
  {
    title: 'OpenMic AI Social Growth',
    metric: '+50 followers, 170% engagement',
    description: 'Led content and scheduling across LinkedIn/Reddit/Youtube to boost reach and engagement.',
    href: 'https://www.openmic.ai',
    imgSrc: openmicImg,
  },
  {
    title: 'SaaS Content Optimization',
    metric: '95+ articles optimized',
    description: 'Executed on-page SEO for SaaS/Voice AI/EdTech blogs to grow search visibility.',
    href: 'https://www.openmic.ai/blog',
  },
  {
    title: 'E-commerce Link Building',
    metric: '20+ backlinks, avg DA 30+',
    description: 'Built foundational links via guest posts, directories, and forums to raise authority.',
  },
]

/**
 * Project cards with subtle motion.
 * @returns {JSX.Element}
 */
export function Projects(): JSX.Element {
  const { open } = useLightbox()
  return (
    <Section id="projects" subtitle="Projects" title="Selected work and outcomes">
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            className="rounded-xl border border-white/10 bg-white/5 hover:border-accent transition block"
            href={p.href || '#projects'}
            target={p.href ? '_blank' : undefined}
            rel={p.href ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            {p.imgSrc && (
              <div className="aspect-[16/9] overflow-hidden rounded-t-xl border-b border-white/10">
                <img
                  src={p.imgSrc}
                  alt={p.title}
                  className="w-full h-full object-cover cursor-zoom-in"
                  loading="lazy"
                  onClick={(e) => {
                    e.preventDefault()
                    open({ src: p.imgSrc!, alt: p.title })
                  }}
                />
              </div>
            )}
            <div className="p-5">
              <div className="text-white font-semibold">{p.title}</div>
              <div className="text-accent text-sm mt-1">{p.metric}</div>
              <p className="text-neutral-300 mt-3">{p.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}


