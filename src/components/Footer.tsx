import { CONTACT_EMAIL, CONTACT_LINKEDIN } from '../config/site'

/**
 * Footer with contact details.
 * @returns {JSX.Element}
 */
export function Footer(): JSX.Element {
  return (
    <footer id="contact" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-white font-semibold">Let’s work together</div>
            <div className="text-neutral-400 text-sm">Available for SEO, content, and growth projects</div>
            <div className="text-neutral-400 text-sm mt-1">Lucknow, UP, India • +91-6388406901</div>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="px-4 py-2 rounded-md bg-accent text-black font-medium hover:opacity-90 transition"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              Email me
            </a>
            <a
              className="px-4 py-2 rounded-md border border-white/10 hover:border-accent text-white transition"
              href={CONTACT_LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Anisha Kumari. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


