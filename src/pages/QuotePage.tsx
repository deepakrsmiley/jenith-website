import { PageMeta } from "@/components/seo/PageMeta"
import { QuoteForm } from "@/components/quote/QuoteForm"

export function QuotePage() {
  return (
    <>
      <PageMeta
        title="Request a Quote | NEXCON"
        description="Request a NEXCON quotation with product details, quantity, delivery location, and any drawings."
      />
      <section className="bg-[#f5f5f7] px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto w-full max-w-[680px]">
          <p className="text-[12px] font-medium tracking-[0.04em] text-teal">Quotation</p>
          <h1 className="mt-3 text-[40px] leading-[1.05] font-semibold tracking-[-0.04em] text-ink md:text-[56px]">
            Request a quotation.
          </h1>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-muted">
            A short request is enough to begin. A proposal follows review. Sending this does not place an order.
          </p>
          <div className="mt-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
