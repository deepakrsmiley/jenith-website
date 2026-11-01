import { audiences, benefits } from "@/data/content"
import { company } from "@/data/site"
import { ProcessTimeline } from "@/components/home/ProcessTimeline"
import { PageHero } from "@/components/layout/PageHero"
import { PageMeta } from "@/components/seo/PageMeta"
import { Button } from "@/components/ui/Button"
import { Photo } from "@/components/ui/Photo"

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us | NEXCON"
        description="NEXCON is a precast concrete and construction products company focused on quality, reliability, and project-specific solutions."
      />
      <PageHero
        eyebrow="About Us"
        title="Building trust through concrete expertise."
        text={company.introduction}
        image="photo-1511818966892-d7d671e672a2"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[2rem] text-ink md:text-[2.5rem]">What the company is prepared to discuss.</h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                NEXCON works with project teams that need precast concrete and construction materials specified for a particular site. The conversation starts with drawings, quantities, and the intended application.
              </p>
              <p>
                Quotations are prepared for builders, contractors, architects, developers, and industrial buyers. Naming those roles describes who the work is for. It is not a list of clients or completed contracts.
              </p>
              <p>
                Founding history, plant capacity, headcount, certifications, and project case studies are omitted until the company provides records that can be published accurately.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <li key={audience} className="rounded-full bg-[#e8e8ed] px-4 py-2 text-[13px] font-medium text-ink">
                  {audience}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/quote" arrow>
                Request a Quotation
              </Button>
            </div>
          </div>
          <div>
            <Photo
              id="photo-1503387762-592deb58ef4e"
              alt="Illustrative photograph of construction drawings under review."
              className="aspect-[4/5] w-full rounded-[28px] object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <p className="mt-3 text-[12px] text-muted">Illustrative photography</p>
          </div>
        </div>
      </section>
      <section className="bg-mist py-16">
        <div className="mx-auto grid w-full max-w-[1120px] gap-6 px-5 sm:grid-cols-2 sm:px-8">
          {benefits.map((benefit) => (
            <article key={benefit.number} className="rounded-[22px] bg-white p-6">
              <p className="text-[13px] font-medium text-teal">{benefit.number}</p>
              <h2 className="mt-3 text-xl text-ink">{benefit.title}</h2>
              <p className="mt-2 text-muted">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>
      <ProcessTimeline />
    </>
  )
}
