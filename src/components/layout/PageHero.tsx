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
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#14110e]/90" />
      <div className="relative mx-auto flex min-h-[560px] w-full max-w-[980px] flex-col justify-end px-6 py-20 text-center sm:px-8 md:py-28">
        <p className="text-[11px] font-medium tracking-[0.28em] text-white/70 uppercase">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-3 text-[#c4a574]">/</span>
          <span className="text-[#e4d3b8]">{eyebrow}</span>
        </p>
        <h1 className="mt-5 text-[46px] leading-[0.96] font-medium text-white md:text-[72px]">{title}</h1>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.7] font-light text-white/75 sm:text-[18px]">{text}</p>
      </div>
    </section>
  )
}
