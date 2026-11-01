import { Link } from "react-router-dom"
import { enquiryEndpoint } from "@/lib/enquiry"
import { PageHero } from "@/components/layout/PageHero"
import { PageMeta } from "@/components/seo/PageMeta"

export function PrivacyPage() {
  const live = Boolean(enquiryEndpoint())

  return (
    <>
      <PageMeta
        title="Privacy Policy | NEXCON"
        description="How NEXCON handles information submitted through the quotation form."
      />
      <PageHero
        eyebrow="Privacy Policy"
        title="How quotation details are handled."
        text="This notice describes the quotation form on this website. It will be updated when verified contact details and a live enquiry service are connected."
        image="photo-1486325212027-8081e485255e"
      />
      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[760px] space-y-8 px-5 text-muted sm:px-8">
          <section>
            <h2 className="text-2xl text-ink">Who this notice covers</h2>
            <p className="mt-3">
              The site is published for NEXCON. A postal address, phone number, and privacy contact will be added here when the company confirms them.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-ink">What the form collects</h2>
            <p className="mt-3">
              The quotation form asks for your name, company, phone number, email address, product category, quantity, delivery location, expected date, technical notes, consent, and an optional drawing. A hidden field is also checked to reduce automated submissions.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-ink">Demo mode and delivery</h2>
            <p className="mt-3">
              {live
                ? "An enquiry endpoint is configured. Submissions are sent to that service only when it returns a successful response. A failed request is not described as delivered."
                : "No enquiry endpoint is configured. Valid submissions are stored in this browser under the local key nexcrete-demo-enquiries and are not transmitted to NEXCON, a CRM, an email service, or WhatsApp. Attachments are not uploaded. Clearing site data removes the local copy."}
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-ink">Why the information is requested</h2>
            <p className="mt-3">
              The details are requested so a product enquiry can be reviewed for feasibility and, after that, for pricing, scope, lead time, and transportation. Consent is required before a submission is accepted by the form.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-ink">Retention</h2>
            <p className="mt-3">
              In demo mode, retention is limited to this browser. When a live service is connected, the operator of that service is responsible for how long enquiries are kept and who can read them.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-ink">Requests about your information</h2>
            <p className="mt-3">
              A dedicated privacy contact is not published yet. Use the{" "}
              <Link to="/quote" className="text-navy underline decoration-teal underline-offset-4">
                quotation form
              </Link>{" "}
              and state that the message is a privacy request. While the form is in demo mode, that message also stays on this device.
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
