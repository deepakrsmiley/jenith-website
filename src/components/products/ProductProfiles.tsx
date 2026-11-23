import type { Product } from "@/data/products"
import { Photo } from "@/components/ui/Photo"

export function ProductProfiles({ product }: { product: Product }) {
  const profiles = product.profiles ?? []
  const others = product.otherProfiles ?? []
  const finishes = product.finishes ?? []
  if (profiles.length === 0 && others.length === 0 && finishes.length === 0) return null

  return (
    <section className="bg-[#f5f5f7] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
        {profiles.length > 0 ? (
          <>
            <h2 className="text-2xl text-ink">Profiles and sizes</h2>
            <p className="mt-3 max-w-3xl text-muted">
              Dimensions are in millimetres. Where a cell lists more than one figure, each figure is an alternative.
              {profiles.some((profile) => profile.image) ? " The photograph shows the profile." : ""} The quotation confirms the exact unit.
            </p>
            <div className={`mt-10 grid gap-8 ${profiles.length > 1 ? "lg:grid-cols-2" : ""}`}>
              {profiles.map((profile) => {
                const catalog = Boolean(profile.image && profile.sizes?.length)
                const title = product.slug === "kerb-stones" && profile.sizes?.length ? `Kerb stone (${profile.name})` : profile.name
                return (
                  <article
                    key={profile.name}
                    className={
                      catalog
                        ? "overflow-hidden rounded-2xl border border-[#e6d7c3] bg-[#fbf6ee]"
                        : "overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.06)]"
                    }
                  >
                    {profile.image ? (
                      <div className={catalog ? "flex items-center justify-center px-6 pt-8" : ""}>
                        <Photo
                          id={profile.image}
                          alt={title}
                          className={catalog ? "h-56 w-full object-contain sm:h-64" : "aspect-[4/3] w-full object-cover"}
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          width={1200}
                          height={900}
                        />
                      </div>
                    ) : null}
                    <div className={catalog ? "px-4 pb-4 pt-6 sm:px-6 sm:pb-6" : "p-6 sm:p-8"}>
                      <h3 className={catalog ? "text-center text-[26px] font-semibold tracking-[-0.03em] text-[#8a4b1f] sm:text-[32px]" : "text-[22px] text-ink"}>
                        {title}
                      </h3>
                      {profile.detail ? <p className={`text-muted ${catalog ? "mt-2 text-center text-[14px]" : "mt-2"}`}>{profile.detail}</p> : null}
                      {profile.sizes && profile.sizes.length > 0 ? (
                        <div className="mt-5 overflow-x-auto">
                          <table className={`w-full min-w-[280px] border-collapse text-sm ${catalog ? "text-center" : "text-left"}`}>
                            <caption className="sr-only">{title} sizes in millimetres</caption>
                            <thead className={catalog ? "bg-[#f3f3f3] text-[#8a4b1f]" : "bg-mist text-navy"}>
                              <tr>
                                <th scope="col" className="px-3 py-3 font-medium">Length</th>
                                <th scope="col" className="px-3 py-3 font-medium">Width</th>
                                <th scope="col" className="px-3 py-3 font-medium">Height</th>
                              </tr>
                            </thead>
                            <tbody>
                              {profile.sizes.map((size, index) => (
                                <tr
                                  key={`${size.length}-${size.width}-${size.height}`}
                                  className={catalog ? (index % 2 === 0 ? "bg-white" : "bg-[#f3f3f3]") : "border-t border-line"}
                                >
                                  <td className={`px-3 py-3 ${catalog ? "text-[#8a4b1f]" : "text-ink"}`}>{size.length}</td>
                                  <td className={`px-3 py-3 ${catalog ? "text-[#8a4b1f]" : "text-muted"}`}>{size.width}</td>
                                  <td className={`px-3 py-3 ${catalog ? "text-[#8a4b1f]" : "text-muted"}`}>{size.height}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : null}
                    </div>
                  </article>
                )
              })}
            </div>
          </>
        ) : null}

        {others.length > 0 ? (
          <div className={profiles.length > 0 ? "mt-16" : ""}>
            <h2 className="text-2xl text-ink">{profiles.length > 0 ? "Other profiles" : "Types"}</h2>
            <p className="mt-3 max-w-3xl text-muted">
              Name the type on the enquiry. Size and finish are confirmed from the drawing or the details you send.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((profile) => (
                <li key={profile.name} className="rounded-[22px] bg-white p-5">
                  <h3 className="text-[17px] text-ink">{profile.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{profile.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {finishes.length > 0 ? (
          <div className="mt-16">
            <h2 className="text-2xl text-ink">Finishes</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {finishes.map((finish) => (
                <li key={finish} className="rounded-full bg-white px-4 py-2 text-[13px]">
                  {finish}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}
