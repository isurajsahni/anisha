import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type LightboxItem = {
  src: string
  alt?: string
}

type LightboxContextValue = {
  open: (item: LightboxItem) => void
  close: () => void
}

const LightboxContext = createContext<LightboxContextValue | undefined>(undefined)

/**
 * Access the global lightbox controls.
 * @returns {LightboxContextValue}
 * @throws if used outside provider
 */
export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}

/**
 * Lightbox provider rendering a modal overlay when an image is opened.
 * @param props
 * @returns {JSX.Element}
 */
export function LightboxProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [item, setItem] = useState<LightboxItem | null>(null)

  const open = useCallback((next: LightboxItem) => setItem(next), [])
  const close = useCallback(() => setItem(null), [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    if (item) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [item, close])

  const value = useMemo(() => ({ open, close }), [open, close])

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {item && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.98, y: 8, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close"
                className="absolute -top-3 -right-3 z-[101] w-9 h-9 rounded-full bg-accent text-black font-bold shadow-glow"
                onClick={close}
              >
                ×
              </button>
              <div className="overflow-hidden rounded-xl border border-white/20 bg-black">
                <img
                  src={item.src}
                  alt={item.alt || 'Image preview'}
                  className="w-full h-full object-contain max-h-[80vh] bg-black"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}


