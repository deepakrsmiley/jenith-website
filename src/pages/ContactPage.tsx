import { contactChannels, company } from "@/data/site"
import { QuoteForm } from "@/components/quote/QuoteForm"
import { FaqList } from "@/components/faq/FaqList"
import { PageHero } from "@/components/layout/PageHero"
import { PageMeta } from "@/components/seo/PageMeta"

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Us | NEXCON"
        description="Contact NEXCON for precast concrete and construction material quotations. Direct phone and email details are pending confirmation."
      />
      <PageHero
        eyebrow="Contact"
        title="A quiet way to begin."
        text="Send the project essentials. Direct phone, email, and office details will be published when they are confirmed."
        image="photo-1497366216548-37526070297c"
      />
      <section className="bg-[#f5f5f7] py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1180px] items-start gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="lg:sticky lg:top-[calc(var(--header-offset)+28px)]">
            <div className="rounded-[32px] bg-black px-7 py-9 text-white sm:px-9 sm:py-11">
              <p className="text-[12px] font-medium tracking-[0.04em] text-teal">{company.name}</p>
              <h2 className="mt-4 text-[36px] leading-[1.05] font-semibold tracking-[-0.04em] md:text-[44px]">
                Write with the project in mind.
              </h2>
              <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-white/60">
                The form beside this note is the active way to reach NEXCON. A reply follows technical review.
              </p>
              <dl className="mt-10 divide-y divide-white/10">
                {contactChannels.map((channel) => (
                  <div key={channel.label} className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="text-[17px] text-white">{channel.label}</dt>
                    <dd className="text-[13px] text-white/45">{channel.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
          <QuoteForm />
        </div>
      </section>
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8">
          <p className="text-[12px] font-medium tracking-[0.04em] text-teal">Questions</p>
          <h2 className="mt-3 text-[36px] leading-[1.05] font-semibold tracking-[-0.04em] text-ink md:text-[48px]">
            Before you send a request.
          </h2>
          <div className="mt-10">
            <FaqList />
          </div>
        </div>
      </section>
    </>
  )
}
