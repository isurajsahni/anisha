import { motion } from 'framer-motion'

/**
 * Hero section with headline and key stats.
 * @returns {JSX.Element}
 */
export function Hero(): JSX.Element {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#FF8C00' }} />
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-16 md:pt-24 pb-16 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Turning <span className="text-accent">Search Intent</span> into Growth.
          </motion.h1>
          <motion.p
            className="mt-4 text-neutral-300 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            I plan, write, and optimize content that ranks — and convert traffic into real business outcomes across SEO and social.
          </motion.p>
          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 }
              }
            }}
          >
            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-glow"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="text-3xl font-bold text-white">+40%</div>
              <div className="text-neutral-300">Organic traffic increase (2 months)</div>
            </motion.div>
            <motion.div
              className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-glow"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="text-3xl font-bold text-white">+170%</div>
              <div className="text-neutral-300">Social engagement growth</div>
            </motion.div>
          </motion.div>
          <div className="mt-10 flex gap-4">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-accent text-black font-semibold hover:opacity-90 transition">See Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/10 hover:border-accent text-white transition">Contact</a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative mx-auto w-72 h-72 rounded-2xl overflow-hidden border border-white/10 shadow-glow">
            <img
              src="/images/profile.svg"
              alt="Anisha Kumari"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}


