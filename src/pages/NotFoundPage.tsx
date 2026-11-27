import { Link } from "react-router-dom"
import { PageMeta } from "@/components/seo/PageMeta"

export function NotFoundPage() {
  return (
    <>
      <PageMeta title="Page not found | nexconprecast" description="The requested nexconprecast page could not be found." />
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-xl">
          <p className="text-[13px] font-medium text-teal">404</p>
          <h1 className="mt-3 text-[40px] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">This page is not on the site.</h1>
          <p className="mt-4 text-[17px] text-muted">The address may be out of date. Return to the homepage or open the product catalogue.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="inline-flex h-12 items-center bg-ink px-6 text-[11px] font-medium uppercase tracking-[0.18em] text-[#faf7f2]">
              Home
            </Link>
            <Link to="/products" className="inline-flex h-12 items-center bg-[#ebe4da] px-6 text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
              Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
