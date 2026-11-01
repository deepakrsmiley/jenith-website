import { useMemo, useState } from "react"
import { galleryFilters, galleryItems, type GalleryCategory } from "@/data/gallery"
import { Lightbox } from "@/components/gallery/Lightbox"
import { Photo } from "@/components/ui/Photo"

const aspectClass = {
  wide: "aspect-[4/3]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
} as const

export function GalleryView() {
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all")
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const visible = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Gallery filters">
        {galleryFilters.map((item) => {
          const selected = filter === item.id
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              className={`h-8 shrink-0 rounded-full px-4 text-[13px] font-medium ${selected ? "bg-ink text-white" : "bg-[#e8e8ed] text-ink"}`}
              onClick={() => {
                setFilter(item.id)
                setOpenIndex(null)
              }}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <div className="masonry mt-6">
        {visible.map((item, index) => (
          <article key={item.id} className="masonry-item">
            <button type="button" className="block w-full overflow-hidden rounded-[22px] text-left" onClick={() => setOpenIndex(index)}>
              <Photo
                id={item.image}
                alt={item.alt}
                className={`${aspectClass[item.aspect]} w-full object-cover`}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </button>
            <span className="mt-3 block text-[15px] font-medium text-ink">{item.title}</span>
            <span className="mt-1 block text-[12px] text-muted">Illustrative photography</span>
          </article>
        ))}
      </div>

      {openIndex !== null ? (
        <Lightbox items={visible} index={openIndex} onClose={() => setOpenIndex(null)} onIndex={setOpenIndex} />
      ) : null}
    </div>
  )
}
