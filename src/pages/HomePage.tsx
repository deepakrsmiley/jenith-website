import { Link } from "react-router-dom"
import { company } from "@/data/site"
import { technicalGroups } from "@/data/content"
import { galleryItems } from "@/data/gallery"
import { ApplicationGrid } from "@/components/applications/ApplicationGrid"
import { ContactSection } from "@/components/contact/ContactSection"
import { FaqList } from "@/components/faq/FaqList"
import { Hero } from "@/components/home/Hero"
import { Introduction } from "@/components/home/Introduction"
import { ProcessTimeline } from "@/components/home/ProcessTimeline"
import { ProductShowcase } from "@/components/home/ProductShowcase"
import { WhyNexcrete } from "@/components/home/WhyNexcrete"
import { PageMeta } from "@/components/seo/PageMeta"
import { Photo } from "@/components/ui/Photo"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function HomePage() {
  const preview = galleryItems.slice(0, 6)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    slogan: company.tagline,
    description: company.summary,
  }

  return (
    <>
      <PageMeta
        title="NEXCON | Concrete Solutions"
        description="Reliable precast concrete and construction material solutions for industrial, commercial, residential, and infrastructure projects."
      />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <Hero />
      <Introduction />
      <ProductShowcase />

      <section id="technical" className="bg-white py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Technical & quality"
            title="Specifications are confirmed for the enquiry."
            text="Use the parameters below when you request a quotation. Confirmed values are issued after technical review. This site does not publish a fixed schedule of sizes or grades."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {technicalGroups.map((group) => (
              <article key={group.id} className="rounded-[22px] bg-[#f5f5f7] p-6">
                <h3 className="text-xl text-ink">{group.title}</h3>
                <ul className="mt-3 space-y-1 text-muted">
                  {group.parameters.map((parameter) => (
                    <li key={parameter.name}>{parameter.name}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link to="/technical" className="mt-8 inline-flex min-h-11 items-center text-[15px] font-medium text-teal">
            Open the technical comparison
          </Link>
        </div>
      </section>

      <ProcessTimeline />

      <section id="applications" className="bg-white py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Applications"
            title="Where these products are typically considered."
            text="The photographs illustrate possible settings. They are not completed NEXCON projects."
          />
          <div className="mt-10">
            <ApplicationGrid />
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#f5f5f7] py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Materials, sites, and details."
            text="A selection of illustrative photographs. Company project photography will replace these images when it is supplied."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {preview.map((item) => (
              <figure key={item.id}>
                <Photo
                  id={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] w-full rounded-[28px] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                <figcaption className="mt-2 text-sm text-muted">{item.title} · Illustrative</figcaption>
              </figure>
            ))}
          </div>
          <Link to="/gallery" className="mt-8 inline-flex min-h-11 items-center text-[15px] font-medium text-teal">
            View the gallery
          </Link>
        </div>
      </section>

      <WhyNexcrete />

      <section id="faq" className="bg-white py-24 md:py-36">
        <div className="mx-auto w-full max-w-[860px] px-5 sm:px-8">
          <SectionHeading eyebrow="Questions" title="Practical answers before you enquire." />
          <div className="mt-8">
            <FaqList />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
