import { ProcessTimeline } from "@/components/home/ProcessTimeline"
import { PageHero } from "@/components/layout/PageHero"
import { PageMeta } from "@/components/seo/PageMeta"
import { TechnicalExplorer } from "@/components/technical/TechnicalExplorer"

export function TechnicalPage() {
  return (
    <>
      <PageMeta
        title="Technical & Quality | nexconprecast"
        description="Enquiry parameters for walls, drains, blocks, pavers, kerbs, chambers, tanks, culverts, barriers, cover slabs, and custom precast."
      />
      <PageHero
        eyebrow="Technical & Quality"
        title="A specification interface for the details that matter."
        text="Send the parameters for the product you need. nexconprecast confirms feasibility and specifications during review. Test reports are not shown unless a document exists."
        image="/catalog/precast/column-stubs.jpg"
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
          <TechnicalExplorer />
        </div>
      </section>
      <ProcessTimeline />
    </>
  )
}
