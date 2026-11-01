import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { credibility } from "@/data/site"
import { Button } from "@/components/ui/Button"
import { Photo } from "@/components/ui/Photo"
import { useHeaderHeight } from "@/components/layout/Layout"

export function Hero() {
  const reduce = useReducedMotion()
  const offset = useHeaderHeight()
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduce || window.matchMedia("(max-width: 767px)").matches) return
    const node = imageRef.current
    if (!node) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY, 480) * 0.12
        node.style.transform = `translate3d(0, ${shift}px, 0)`
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [reduce])

  const fade = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-navy text-white">
      <div ref={imageRef} className="absolute inset-x-0 -top-16 h-[120%]">
        <Photo
          id="photo-1487958449943-2429e8be8625"
          alt="Illustrative photograph of a concrete architectural facade."
          priority
          className="hero-zoom h-full w-full object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />

      <div
        className="relative z-10 mx-auto flex w-full max-w-[980px] flex-1 flex-col items-center justify-center px-6 pb-20 text-center"
        style={{ paddingTop: offset + 24 }}
      >
        <motion.p
          className="text-[12px] font-medium tracking-[0.04em] text-white/65"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ duration: reduce ? 0 : 0.55 }}
        >
          Engineered for strength. Built for tomorrow.
        </motion.p>
        <motion.h1
          className="mt-4 max-w-5xl text-[44px] leading-[1.02] font-semibold text-white sm:text-[60px] lg:text-[76px]"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.08 }}
        >
          Precision in Concrete.
          <span className="mt-1 block">Confidence in Every Build.</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-[17px] leading-[1.5] text-white/70 sm:text-[19px]"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.16 }}
        >
          Reliable precast concrete and construction material solutions for industrial, commercial, residential, and infrastructure projects.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.24 }}
        >
          <Button to="/products" variant="inverse" arrow>
            Explore Our Products
          </Button>
          <Button to="/quote" variant="secondary">
            Request a Quotation
          </Button>
        </motion.div>
        <a href="#introduction" className="mt-12 inline-flex w-fit items-center gap-3 text-[12px] font-medium text-white/70">
          <span className="scroll-hint block h-8 w-px bg-white/80" />
          Scroll
        </a>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black text-white">
        <div className="mx-auto grid w-full max-w-[980px] grid-cols-2 gap-y-8 px-6 py-10 sm:py-12 lg:grid-cols-4">
          {credibility.map((item) => (
            <div key={item.label} className="px-3 text-center">
              <p className="text-[13px] font-medium tracking-[-0.01em] text-white">{item.label}</p>
              <p className="mt-1.5 text-[12px] leading-snug text-white/50">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
