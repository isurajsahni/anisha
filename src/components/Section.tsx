import { motion } from 'framer-motion'
import type { PropsWithChildren, ReactNode } from 'react'

type SectionProps = PropsWithChildren<{
  id?: string
  title?: ReactNode
  subtitle?: ReactNode
}>

/**
 * Fadable section wrapper with consistent spacing and max width.
 * @param {SectionProps} props
 * @returns {JSX.Element}
 */
export function Section({ id, title, subtitle, children }: SectionProps): JSX.Element {
  return (
    <section id={id} className="border-t border-white/5 scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {(title || subtitle) && (
          <div className="mb-10">
            {subtitle && <div className="text-sm uppercase tracking-widest text-accent mb-2">{subtitle}</div>}
            {title && <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}


