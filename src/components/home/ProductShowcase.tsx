import { products } from "@/data/products"
import { ProductCard } from "@/components/products/ProductCard"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function ProductShowcase() {
  return (
    <section id="products" className="bg-[#f5f5f7] py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Products"
          title="A catalogue organised around the project."
          text="The catalogue covers blocks, pavers, kerbs, drains, walls, chambers, tanks, culverts, barriers, cover slabs, and custom precast. Open a category for the details needed in a quotation."
        />
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
