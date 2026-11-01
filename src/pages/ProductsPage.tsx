import { products } from "@/data/products"
import { PageHero } from "@/components/layout/PageHero"
import { ProductCard } from "@/components/products/ProductCard"
import { PageMeta } from "@/components/seo/PageMeta"

export function ProductsPage() {
  return (
    <>
      <PageMeta
        title="Products | NEXCON"
        description="Precast compound walls, concrete blocks, interlocking pavers, U-drains, RCC elements, and custom concrete products."
      />
      <PageHero
        eyebrow="Products"
        title="Precast and concrete products for the work in front of you."
        text="Each category explains the information a quotation needs. Dimensions, grades, and availability are confirmed during review."
        image="photo-1493397212122-2b85dda8106b"
      />
      <section className="bg-[#f5f5f7] py-20 md:py-32">
        <div className="mx-auto grid w-full max-w-[1120px] gap-x-8 gap-y-16 px-5 sm:px-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}
