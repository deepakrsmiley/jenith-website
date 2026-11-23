import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Photo } from "@/components/ui/Photo"

type ImageCycleProps = {
  images: string[]
  alt: string
  className?: string
  frameClassName?: string
  sizes?: string
  priority?: boolean
  interval?: number
  startAt?: number
  active?: number
  showIndex?: boolean
}

export function ImageCycle({
  images,
  alt,
  className = "h-full w-full object-cover",
  frameClassName = "",
  sizes = "100vw",
  priority = false,
  interval = 5600,
  startAt = 0,
  active,
  showIndex = false,
}: ImageCycleProps) {
  const reduce = useReducedMotion()
  const count = images.length
  const [internal, setInternal] = useState(() => (count ? startAt % count : 0))
  const [paused, setPaused] = useState(false)
  const armed = useRef(false)
  const index = count ? (active !== undefined ? ((active % count) + count) % count : internal) : 0
  const controlled = active !== undefined

  useEffect(() => {
    if (controlled || reduce || count < 2 || paused) return
    const phase = (startAt % count) * Math.round(interval / count)
    const wait = armed.current || phase === 0 ? interval : phase
    armed.current = true
    let timer = 0
    const kick = window.setTimeout(() => {
      setInternal((current) => (current + 1) % count)
      timer = window.setInterval(() => {
        setInternal((current) => (current + 1) % count)
      }, interval)
    }, wait)
    return () => {
      window.clearTimeout(kick)
      window.clearInterval(timer)
    }
  }, [controlled, reduce, count, paused, startAt, interval])

  if (!count) return null

  const current = images[index]
  const zoomIn = index % 2 === 0

  return (
    <div
      className={`relative overflow-hidden bg-[#e7e7ea] ${frameClassName}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="h-full w-full"
            initial={reduce ? false : { scale: zoomIn ? 1 : 1.06 }}
            animate={{ scale: zoomIn ? 1.06 : 1 }}
            transition={{ duration: reduce ? 0 : interval / 1000 + 0.6, ease: "linear" }}
          >
            <Photo
              id={current}
              alt={alt}
              className={className}
              sizes={sizes}
              priority={priority && index === 0}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      {showIndex && count > 1 ? (
        <span className="pointer-events-none absolute right-3 bottom-3 z-10 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium tracking-[0.16em] text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
      ) : null}
    </div>
  )
}
