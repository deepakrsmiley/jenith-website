import { motion, useReducedMotion } from "framer-motion"
import { processSteps } from "@/data/content"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function ProcessTimeline() {
  const reduce = useReducedMotion()

  return (
    <section id="process" className="bg-[#f5f5f7] py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Project process"
          title="A Technical-First Approach to Every Project."
          text="Each order follows the same sequence. Commercial terms are discussed only after the technical review."
        />

        <div className="relative mt-14">
          <div className="absolute top-5 bottom-5 left-5 w-px bg-line md:hidden" aria-hidden="true" />
          <motion.div
            className="absolute top-5 right-0 left-0 hidden h-px origin-left bg-line md:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 0.8, ease: "easeOut" }}
          />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.number}
                className="relative md:pt-0"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: reduce ? 0 : index * 0.08 }}
              >
                <div className="flex items-start gap-4 md:block">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-medium text-white">
                    {step.number}
                  </span>
                  <div className="md:mt-6">
                    <h3 className="text-xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-muted">{step.text}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
