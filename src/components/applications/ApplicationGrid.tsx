import { applications } from "@/data/content"
import { Photo } from "@/components/ui/Photo"
import { Reveal } from "@/components/ui/Reveal"

export function ApplicationGrid({ variant = "preview" }: { variant?: "preview" | "full" }) {
  return (
    <div className={`grid gap-4 ${variant === "full" ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {applications.map((item, index) => (
        <Reveal key={item.slug} delay={index * 0.05}>
          <article className="group overflow-hidden rounded-[22px] bg-black">
            <div className="relative">
            <Photo
              id={item.image}
              alt={`Illustrative photograph for ${item.title}. Not a NEXCON project.`}
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${variant === "full" ? "aspect-[16/10]" : "aspect-[4/3]"}`}
              sizes={variant === "full" ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-[12px] font-medium text-teal">Illustrative</p>
              <h3 className="mt-1 text-[21px] font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
              <p className="mt-1 text-[14px] leading-snug text-white/80">{item.caption}</p>
            </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
