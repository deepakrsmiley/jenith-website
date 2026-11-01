import { whyItems } from "@/data/content"
import { LineIcon } from "@/components/ui/Icons"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function WhyNexcrete() {
  return (
    <section id="why" className="bg-black py-28 text-white md:py-40">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
        <SectionHeading
          invert
          eyebrow="Why NEXCON"
          title="A clear way to specify, review, and supply."
          text="The reasons below describe how an enquiry is handled. They are not claims of market position, lifespan, or certification."
        />
        <div className="mt-20 grid gap-12 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full">
                <span className="text-teal">
                  <LineIcon name={item.icon} />
                </span>
                <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-snug text-white/70">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
