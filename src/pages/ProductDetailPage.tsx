import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useReducedMotion } from "framer-motion"
import { getProduct, relatedProducts } from "@/data/products"
import { Lightbox } from "@/components/gallery/Lightbox"
import type { GalleryItem } from "@/data/gallery"
import { PageHero } from "@/components/layout/PageHero"
import { ProductCard } from "@/components/products/ProductCard"
import { ProductProfiles } from "@/components/products/ProductProfiles"
import { PageMeta } from "@/components/seo/PageMeta"
import { Button } from "@/components/ui/Button"
import { ImageCycle } from "@/components/ui/ImageCycle"
import { Photo } from "@/components/ui/Photo"
import { NotFoundPage } from "@/pages/NotFoundPage"

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const frames = product?.gallery.length ? product.gallery : product ? [product.image] : []
  const [activeImage, setActiveImage] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [hold, setHold] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    setActiveImage(0)
    setPaused(false)
  }, [slug])

  useEffect(() => {
    if (reduce || paused || frames.length < 2) return
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % frames.length)
    }, 5600)
    return () => window.clearInterval(timer)
  }, [reduce, paused, frames.length, slug, hold])

  if (!product) return <NotFoundPage />

  const gallery: GalleryItem[] = product.gallery.map((image, index) => ({
    id: `${product.slug}-${index}`,
    title: product.name,
    image,
    category: "products",
    aspect: "wide",
    alt: `${product.name} photograph.`,
  }))
  const current = gallery[activeImage] ?? gallery[0]
  const related = relatedProducts(product.slug)

  return (
    <>
      <PageMeta title={`${product.name} | NEXCON`} description={product.summary} />
      <PageHero eyebrow="Products" title={product.name} text={product.summary} image={product.image} />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <button type="button" className="block w-full overflow-hidden rounded-[22px] text-left shadow-[0_24px_60px_rgba(0,0,0,0.08)]" onClick={() => setLightbox(activeImage)}>
              <ImageCycle
                images={frames}
                alt={current.alt}
                active={activeImage}
                frameClassName="aspect-[4/3]"
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                showIndex
              />
            </button>
            <p className="mt-3 text-[12px] text-muted">Photographs alternate. Hover to pause, or select a frame. Open the large view to inspect it.</p>
            <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-5">
              {gallery.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`overflow-hidden rounded-xl transition ${index === activeImage ? "ring-2 ring-teal" : "opacity-80 hover:opacity-100"}`}
                  onClick={() => {
                    setActiveImage(index)
                    setHold((value) => value + 1)
                  }}
                  aria-label={`Show image ${index + 1} of ${product.name}`}
                  aria-current={index === activeImage}
                >
                  <Photo id={item.image} alt="" className="aspect-[4/3] w-full object-cover" sizes="160px" width={480} height={360} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-muted">
              <Link to="/products" className="hover:text-navy">
                All products
              </Link>
            </p>
            {product.description.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-muted">
                {paragraph}
              </p>
            ))}
            <h2 className="mt-8 text-2xl text-ink">Information to include</h2>
            <dl className="mt-4 border-t border-line">
              {product.parameters.map((parameter) => (
                <div key={parameter.label} className="border-b border-line py-4">
                  <dt className="font-medium text-ink">{parameter.label}</dt>
                  <dd className="mt-1 text-muted">{parameter.detail}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-8 text-xl text-ink">Typical applications</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.suitableFor.map((item) => (
                <li key={item} className="rounded-full bg-[#f5f5f7] px-4 py-2 text-[13px]">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={`/quote?product=${product.slug}`} arrow>
                Enquire Now
              </Button>
              <Button to="/technical" variant="light">
                Technical & Quality
              </Button>
            </div>
          </div>
        </div>
      </section>
      <ProductProfiles product={product} />
      <section className="bg-mist py-16">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
          <h2 className="text-2xl text-ink">Related products</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item, index) => (
              <ProductCard key={item.slug} product={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      {lightbox !== null ? (
        <Lightbox items={gallery} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
      ) : null}
    </>
  )
}
