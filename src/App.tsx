import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Samples } from './components/Samples'
import { Certificates } from './components/Certificates'
import { Education } from './components/Education'
import { LightboxProvider } from './components/Lightbox'

/**
 * The root app composing all portfolio sections.
 * @returns {JSX.Element}
 */
export default function App(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <LightboxProvider>
      <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-deep/70 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-white">Anisha Kumari</a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a className="hover:text-white hover:underline underline-offset-4" href="#about">About</a>
            <a className="hover:text-white hover:underline underline-offset-4" href="#experience">Experience</a>
            <a className="hover:text-white hover:underline underline-offset-4" href="#skills">Skills</a>
            <a className="hover:text-white hover:underline underline-offset-4" href="#projects">Projects</a>
            <a className="hover:text-white hover:underline underline-offset-4" href="#samples">Samples</a>
            <a className="hover:text-white hover:underline underline-offset-4" href="#certificates">Certificates</a>
            <a className="hover:text-white hover:underline underline-offset-4" href="#education">Education</a>
            <a className="hover:text-white hover:underline underline-offset-4" href="#testimonials">Testimonials</a>
            <a className="px-3 py-1.5 rounded-md bg-accent text-black font-medium hover:opacity-90 transition btn-shine" href="#contact">Contact</a>
          </nav>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 text-white hover:border-accent"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
        </div>
          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  className="fixed inset-0 z-30 bg-black/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeMobile}
                />
                <motion.div
                  className="absolute inset-x-0 top-full z-40 border-b border-white/10 bg-deep"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3 text-neutral-200">
                    <a onClick={closeMobile} className="py-2 hover:text-white" href="#about">About</a>
                    <a onClick={closeMobile} className="py-2 hover:text-white" href="#experience">Experience</a>
                    <a onClick={closeMobile} className="py-2 hover:text-white" href="#skills">Skills</a>
                    <a onClick={closeMobile} className="py-2 hover:text-white" href="#projects">Projects</a>
                    <a onClick={closeMobile} className="py-2 hover:text-white" href="#samples">Samples</a>
                    <a onClick={closeMobile} className="py-2 hover:text-white" href="#certificates">Certificates</a>
                    <a onClick={closeMobile} className="py-2 hover:text-white" href="#education">Education</a>
                    <a onClick={closeMobile} className="py-2 hover:text-white" href="#testimonials">Testimonials</a>
                    <a onClick={closeMobile} className="py-2 px-3 rounded-md bg-accent text-black font-medium w-max" href="#contact">Contact</a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Samples />
        <Certificates />
        <Education />
        <Testimonials />
      </main>
      <Footer />
      </div>
    </LightboxProvider>
  )
}


