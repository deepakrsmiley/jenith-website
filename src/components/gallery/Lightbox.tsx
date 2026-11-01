import { useEffect, useId, useRef } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import type { GalleryItem } from "@/data/gallery"
import { Photo } from "@/components/ui/Photo"

type LightboxProps = {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onIndex: (index: number) => void
}

export function Lightbox({ items, index, onClose, onIndex }: LightboxProps) {
  const reduce = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const item = items[index]

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowRight") onIndex((index + 1) % items.length)
      if (event.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [index, items.length, onClose, onIndex])

  if (!item) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduce ? 0 : 0.25 }}
        onClick={onClose}
      >
        <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
          <p id={titleId} className="pr-16 text-[13px] font-medium text-white/75">
            Illustrative photography · {item.title}
          </p>
          <Photo
            id={item.image}
            alt={item.alt}
            className="mt-4 max-h-[72svh] w-full rounded-[22px] object-contain"
            sizes="(min-width: 1024px) 80vw, 100vw"
            width={1600}
            height={1066}
          />
          <p className="mt-3 text-sm text-white/70">
            {index + 1} of {items.length}. This is not a completed NEXCON project.
          </p>
          <button
            ref={closeRef}
            type="button"
            className="absolute top-0 right-0 flex h-11 w-11 items-center justify-center text-white"
            onClick={onClose}
          >
            <span className="sr-only">Close image</span>
            <span aria-hidden="true" className="text-2xl leading-none">
              ×
            </span>
          </button>
          {items.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute top-1/2 left-0 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white"
                onClick={() => onIndex((index - 1 + items.length) % items.length)}
              >
                <span className="sr-only">Previous image</span>
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="absolute top-1/2 right-0 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white"
                onClick={() => onIndex((index + 1) % items.length)}
              >
                <span className="sr-only">Next image</span>
                <span aria-hidden="true">→</span>
              </button>
            </>
          ) : null}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
