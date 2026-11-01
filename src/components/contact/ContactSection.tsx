import { QuoteForm } from "@/components/quote/QuoteForm"

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[680px] px-5 sm:px-8">
        <p className="text-[12px] font-medium tracking-[0.04em] text-teal">Quotation</p>
        <h2 className="mt-3 text-[40px] leading-[1.05] font-semibold tracking-[-0.04em] text-ink md:text-[52px]">
          Request a quotation.
        </h2>
        <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-muted">
          Three short steps. Tell us who you are, what you need, and where it should go.
        </p>
        <div className="mt-10">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
