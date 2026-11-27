import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import type { Product } from "@/data/products"
import { ImageCycle } from "@/components/ui/ImageCycle"

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className="group flex h-full flex-col"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/products/${product.slug}`}
        className="block overflow-hidden rounded-sm bg-[#e6e0d6] shadow-[0_18px_50px_rgba(28,24,20,0.08)] ring-1 ring-black/5 transition duration-700 group-hover:-translate-y-1 group-hover:shadow-[0_28px_60px_rgba(28,24,20,0.14)]"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ImageCycle
          images={product.gallery.length ? product.gallery : [product.image]}
          alt=""
          frameClassName="aspect-[4/3]"
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          interval={6400}
          startAt={index}
          showIndex
        />
      </Link>
      <div className="flex flex-1 flex-col px-1 pt-6">
        <h3 className="font-display text-[28px] font-medium text-ink">
          <Link to={`/products/${product.slug}`} className="hover:text-teal">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[14px] leading-[1.6] font-light text-muted">{product.summary}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link to={`/products/${product.slug}`} className="inline-flex min-h-11 items-center text-[11px] font-medium uppercase tracking-[0.18em] text-teal">
            View details
          </Link>
          <Link to={`/quote?product=${product.slug}`} className="inline-flex min-h-11 items-center text-[14px] text-ink/70 hover:text-ink">
            Enquire
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
