import { Section } from './Section'
import simplelearn1 from '../img/simplelearn1.png'
import pythonBeginner from '../img/pythone_begginer.png'
import recommendation from '../img/recomendation letter.png'
import { useLightbox } from './Lightbox'

/**
 * Certificates grid with thumbnails.
 * @returns {JSX.Element}
 */
export function Certificates(): JSX.Element {
  const { open } = useLightbox()
  const certs = [
    { title: 'Simplilearn – Digital Marketing, Content & Email Marketing', img: simplelearn1 },
    { title: 'Python Beginner Certificate', img: pythonBeginner },
    { title: 'Recommendation Letter — Attack Capital', img: recommendation },
  ]

  return (
    <Section id="certificates" subtitle="Certificates" title="Certifications and recognition">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certs.map((c) => (
          <figure key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-3 transition-transform hover:-translate-y-1 hover:shadow-glow">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover cursor-zoom-in"
                loading="lazy"
                onClick={() => open({ src: c.img, alt: c.title })}
              />
            </div>
            <figcaption className="mt-3 text-sm text-neutral-200">{c.title}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}


