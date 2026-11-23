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
        title="A visual reference for the products."
        text="Filter by subject and open any photograph. Frames move between yard, product, and installation views."
        image="/catalog/walls/stone-finish.jpg"
        images={[
          "/catalog/walls/stone-finish.jpg",
          "/catalog/walls/panel-yard.jpg",
          "/catalog/precast/pedestals.jpg",
          "/catalog/chambers/inspection-chamber.jpg",
        ]}
      />
      <section className="bg-mist py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
          <GalleryView />
        </div>
      </section>
    </>
  )
}
