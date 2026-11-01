import { ApplicationGrid } from "@/components/applications/ApplicationGrid"
import { PageHero } from "@/components/layout/PageHero"
import { PageMeta } from "@/components/seo/PageMeta"
import { Button } from "@/components/ui/Button"

export function ApplicationsPage() {
  return (
    <>
      <PageMeta
        title="Applications | NEXCON"
        description="Possible applications for NEXCON products across residential, commercial, industrial, infrastructure, drainage, and paving work."
      />
      <PageHero
        eyebrow="Applications"
        title="Settings where the products are commonly considered."
        text="These scenes show the kind of work the catalogue can support. They are illustrative photographs, not a record of NEXCON projects."
        image="photo-1486406146926-c627a92ad1ab"
      />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
          <ApplicationGrid variant="full" />
          <div className="mt-12">
            <Button to="/quote" arrow>
              Discuss an application
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
