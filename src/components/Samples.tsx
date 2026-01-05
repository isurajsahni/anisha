import { Section } from './Section'
import { motion } from 'framer-motion'

/**
 * Additional work samples: blog and video links.
 * @returns {JSX.Element}
 */
export function Samples(): JSX.Element {
  const links = [
    {
      title: 'OpenMic Blog',
      href: 'https://www.openmic.ai/blog',
      detail: 'Blog & content writing samples',
    },
    {
      title: 'YouTube Shorts – Brand Intro',
      href: 'https://youtube.com/shorts/S1cSad-zo0M?si=EnF56ZxiJntV2_EW',
      detail: 'Shorts sample',
    },
    {
      title: 'YouTube Video',
      href: 'https://youtu.be/Cx-Q-iWIFZI?si=n__FeMe4Kj89MICO',
      detail: 'Video sample',
    },
    {
      title: 'YouTube Video',
      href: 'https://youtu.be/8vDbKHDkUgU?si=IhP4xY2-rCTFypIN',
      detail: 'Video sample',
    },
    {
      title: 'LinkedIn Campaign (post 1)',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7356657042624794626',
      detail: 'Social campaign post',
    },
    {
      title: 'LinkedIn Campaign (post 2)',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7356247687127552000',
      detail: 'Social campaign post',
    },
    {
      title: 'LinkedIn Campaign (post 3)',
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7353779684175699968',
      detail: 'Social campaign post',
    },
  ]

  return (
    <Section id="samples" subtitle="Samples" title="Selected posts and videos">
      <div className="grid md:grid-cols-2 gap-4">
        {links.map((l, i) => (
          <motion.a
            key={l.href}
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-accent transition block"
            href={l.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.03 }}
          >
            <div className="text-white font-medium">{l.title}</div>
            <div className="text-neutral-400 text-sm">{l.detail}</div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}


