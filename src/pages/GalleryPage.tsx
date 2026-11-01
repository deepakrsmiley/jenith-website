import { GalleryView } from "@/components/gallery/GalleryView"
import { PageHero } from "@/components/layout/PageHero"
import { PageMeta } from "@/components/seo/PageMeta"

export function GalleryPage() {
  return (
    <>
      <PageMeta
        title="Gallery | NEXCON"
        description="Illustrative photographs of concrete products, construction, manufacturing, infrastructure, and material close-ups."
      />
      <PageHero
        eyebrow="Gallery"
        title="A visual reference for materials and settings."
        text="Filter by subject and open any image. Nothing in this gallery is presented as a completed NEXCON project."
        image="photo-1448630360428-65456885c650"
      />
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
          <GalleryView />
        </div>
      </section>
    </>
  )
}
