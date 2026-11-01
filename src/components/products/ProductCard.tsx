import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import type { Product } from "@/data/products"
import { Photo } from "@/components/ui/Photo"

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
      <Link to={`/products/${product.slug}`} className="block overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.10)]" tabIndex={-1} aria-hidden="true">
        <Photo
          id={product.image}
          alt=""
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          width={1200}
          height={900}
        />
      </Link>
      <div className="flex flex-1 flex-col px-1 pt-6">
        <h3 className="text-[19px] font-semibold tracking-[-0.03em] text-ink">
          <Link to={`/products/${product.slug}`} className="hover:text-teal">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[14px] leading-[1.5] text-muted">{product.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link to={`/products/${product.slug}`} className="inline-flex min-h-11 items-center text-[14px] font-medium text-teal">
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
