import { Link } from "react-router-dom"
import { PageMeta } from "@/components/seo/PageMeta"

export function NotFoundPage() {
  return (
    <>
      <PageMeta title="Page not found | NEXCON" description="The requested NEXCON page could not be found." />
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-xl">
          <p className="text-[13px] font-medium text-teal">404</p>
          <h1 className="mt-3 text-[40px] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">This page is not on the site.</h1>
          <p className="mt-4 text-[17px] text-muted">The address may be out of date. Return to the homepage or open the product catalogue.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-[14px] font-medium text-white">
              Home
            </Link>
            <Link to="/products" className="inline-flex h-11 items-center rounded-full bg-[#e8e8ed] px-5 text-[15px] font-medium text-ink">
              Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
