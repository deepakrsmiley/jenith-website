import { benefits } from "@/data/content"
import { company } from "@/data/site"
import { Button } from "@/components/ui/Button"
import { Photo } from "@/components/ui/Photo"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function Introduction() {
  return (
    <section id="introduction" className="bg-white py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="relative">
            <Photo
              id="photo-1504307651254-35680f356dfd"
              alt="Illustrative photograph of construction work. Not a NEXCON project."
              className="aspect-[4/5] w-full rounded-[32px] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:aspect-[5/4]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              width={1400}
              height={1600}
            />
            <p className="mt-3 text-[12px] text-muted">Illustrative photography</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeading eyebrow="About NEXCON" title="Building Trust Through Concrete Expertise." text={company.introduction} />
          <div className="mt-8 border-t border-line">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-4">
                <span className="pt-1 text-[13px] font-medium text-teal">{benefit.number}</span>
                <div>
                  <h3 className="text-lg text-ink">{benefit.title}</h3>
                  <p className="mt-1 text-muted">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/about" variant="light" arrow>
              About Our Company
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
