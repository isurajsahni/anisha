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

/**
 * The root app composing all portfolio sections.
 * @returns {JSX.Element}
 */
export default function App(): JSX.Element {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-deep/70 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-white">Anisha Kumari</a>
          <nav className="flex items-center gap-6 text-sm text-neutral-300">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#samples">Samples</a>
            <a className="hover:text-white" href="#certificates">Certificates</a>
            <a className="hover:text-white" href="#education">Education</a>
            <a className="hover:text-white" href="#testimonials">Testimonials</a>
            <a className="px-3 py-1.5 rounded-md bg-accent text-black font-medium hover:opacity-90 transition" href="#contact">Contact</a>
          </nav>
        </div>
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
  )
}


