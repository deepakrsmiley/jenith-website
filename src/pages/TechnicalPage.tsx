import { ProcessTimeline } from "@/components/home/ProcessTimeline"
import { PageHero } from "@/components/layout/PageHero"
import { PageMeta } from "@/components/seo/PageMeta"
import { TechnicalExplorer } from "@/components/technical/TechnicalExplorer"

export function TechnicalPage() {
  return (
    <>
      <PageMeta
        title="Technical & Quality | NEXCON"
        description="Enquiry parameters for compound walls, U-drains, concrete blocks, pavers, and custom precast elements."
      />
      <PageHero
        eyebrow="Technical & Quality"
        title="A specification interface for the details that matter."
        text="Send the parameters for the product you need. NEXCON confirms feasibility and specifications during review. Test reports are not shown unless a document exists."
        image="photo-1541888946425-d81bb19240f5"
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
