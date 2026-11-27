import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { heroFrames } from "@/data/gallery"
import { credibility } from "@/data/site"
import { Button } from "@/components/ui/Button"
import { ImageCycle } from "@/components/ui/ImageCycle"
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
        <ImageCycle
          images={heroFrames}
          alt="nexconprecast precast concrete products, in the yard and during installation."
          priority
          frameClassName="h-full w-full"
          className="h-full w-full object-cover"
          interval={6800}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#14110e]/88" />

      <div
        className="relative z-10 mx-auto flex w-full max-w-[980px] flex-1 flex-col items-center justify-center px-6 pb-20 text-center"
        style={{ paddingTop: offset + 24 }}
      >
        <motion.p
          className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#e4d3b8]"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ duration: reduce ? 0 : 0.55 }}
        >
          Engineered for strength
        </motion.p>
        <motion.h1
          className="mt-5 max-w-5xl text-[52px] leading-[0.92] font-medium text-white sm:text-[72px] lg:text-[92px]"
          initial={fade.hidden}
          animate={fade.show}
          transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.08 }}
        >
          Precision in Concrete.
          <span className="mt-2 block font-normal italic text-white/85">Confidence in every build.</span>
        </motion.h1>
        <motion.p
          className="mt-7 max-w-xl text-[16px] leading-[1.7] font-light text-white/75 sm:text-[18px]"
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
        <a href="#introduction" className="mt-14 inline-flex w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
          <span className="scroll-hint block h-10 w-px bg-[#c4a574]" />
          Scroll
        </a>
      </div>

      <div className="relative z-10 border-t border-[#c4a574]/30 bg-[#14110e] text-white">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-2 gap-y-8 px-6 py-10 sm:py-12 lg:grid-cols-4">
          {credibility.map((item) => (
            <div key={item.label} className="px-4 text-center">
              <p className="font-display text-[22px] font-medium text-white">{item.label}</p>
              <p className="mt-2 text-[12px] leading-snug font-light tracking-wide text-white/50">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
