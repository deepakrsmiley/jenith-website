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
              Dimensions are in millimetres. A cell with more than one height lists alternative sections. The photograph shows the profile; the exact unit is confirmed with the quotation.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {profiles.map((profile) => (
                <article key={profile.name} className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
                  {profile.image ? (
                    <Photo
                      id={profile.image}
                      alt={`${profile.name} kerb stone`}
                      className="aspect-[4/3] w-full object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      width={1200}
                      height={900}
                    />
                  ) : null}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-[22px] text-ink">{profile.name}</h3>
                    <p className="mt-2 text-muted">{profile.detail}</p>
                    {profile.sizes && profile.sizes.length > 0 ? (
                      <div className="mt-5 overflow-x-auto">
                        <table className="w-full min-w-[280px] border-collapse text-left text-sm">
                          <caption className="sr-only">{profile.name} sizes in millimetres</caption>
                          <thead className="bg-mist text-navy">
                            <tr>
                              <th scope="col" className="px-3 py-2 font-medium">Length</th>
                              <th scope="col" className="px-3 py-2 font-medium">Width</th>
                              <th scope="col" className="px-3 py-2 font-medium">Height</th>
                            </tr>
                          </thead>
                          <tbody>
                            {profile.sizes.map((size) => (
                              <tr key={`${size.length}-${size.width}-${size.height}`} className="border-t border-line">
                                <td className="px-3 py-2 text-ink">{size.length}</td>
                                <td className="px-3 py-2 text-muted">{size.width}</td>
                                <td className="px-3 py-2 text-muted">{size.height}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : null}

        {others.length > 0 ? (
          <div className={profiles.length > 0 ? "mt-16" : ""}>
            <h2 className="text-2xl text-ink">Other profiles</h2>
            <p className="mt-3 max-w-3xl text-muted">
              These sections are quoted from the profile name and the dimensions on the drawing. Sizes are not fixed on this page.
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
