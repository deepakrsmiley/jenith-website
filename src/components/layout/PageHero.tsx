import { Link } from "react-router-dom"
import { ImageCycle } from "@/components/ui/ImageCycle"

type PageHeroProps = {
  eyebrow: string
  title: string
  text: string
  image: string
  images?: string[]
}

export function PageHero({ eyebrow, title, text, image, images }: PageHeroProps) {
  const frames = images && images.length > 0 ? images : [image]
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <ImageCycle
          images={frames}
          alt=""
          priority
          frameClassName="h-full w-full"
          className="h-full w-full object-cover"
          interval={7000}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/80" />
      <div className="relative mx-auto flex min-h-[520px] w-full max-w-[920px] flex-col justify-end px-6 py-20 text-center sm:px-8 md:py-24">
        <p className="text-[12px] font-medium tracking-[0.06em] text-white/60 uppercase">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-white/30">/</span>
          <span className="text-teal">{eyebrow}</span>
        </p>
        <h1 className="mt-4 text-[40px] leading-[1.02] font-semibold text-white md:text-[64px]">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.5] text-white/70 sm:text-[19px]">{text}</p>
      </div>
    </section>
  )
}
