import { Section } from './Section'
import recommendation from '../img/recomendation letter.png'

/**
 * Testimonials section with highlighted recommendation.
 * @returns {JSX.Element}
 */
export function Testimonials(): JSX.Element {
  return (
    <Section id="testimonials" subtitle="Testimonials" title="What people say">
      <div className="grid md:grid-cols-2 gap-4">
        <figure className="rounded-xl border border-white/10 bg-white/5 p-6">
          <blockquote className="text-neutral-200">
            “We are pleased to recommend you for the successful completion of your internship as a Technical SEO Content Writer at Attack Capital. 
            Throughout your time with us, you consistently demonstrated a strong grasp of SEO fundamentals, keyword research, and content strategy. 
            Your ability to deliver well-optimized, high-quality content stood out, and we appreciated your initiative, professionalism, and eagerness to learn.”
          </blockquote>
          <figcaption className="mt-4 text-sm text-neutral-400">
            — Saumik Tewari, Attack Capital
          </figcaption>
        </figure>
        <figure className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
            <img src={recommendation} alt="Recommendation Letter — Attack Capital" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <figcaption className="mt-3 text-sm text-neutral-400">
            Recommendation Letter — Attack Capital
          </figcaption>
        </figure>
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
        <blockquote className="text-neutral-200">
          “A fast learner and very reliable team member. She helped grow our blog traffic significantly.”
        </blockquote>
        <figcaption className="mt-2 text-sm text-neutral-400">
          — Former Team Lead, LearnElectronics India
        </figcaption>
      </div>
    </Section>
  )
}


