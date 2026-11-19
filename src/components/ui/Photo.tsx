import type { ImgHTMLAttributes } from "react"
import { useState } from "react"
import { unsplash } from "@/lib/photos"

type PhotoProps = {
  id: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  width?: number
  height?: number
}

export function Photo({
  id,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  width = 1600,
  height = 1066,
}: PhotoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex items-end rounded-[22px] bg-[#1d1d1f] p-4 text-[12px] text-white/70 ${className}`}
        role="img"
        aria-label={alt}
      >
        Image unavailable
      </div>
    )
  }

  const local = id.startsWith("/")
  const imageProps: ImgHTMLAttributes<HTMLImageElement> = {
    src: local ? `${import.meta.env.BASE_URL}${id.slice(1)}` : unsplash(id, 1600),
    alt,
    width,
    height,
    className,
    loading: priority ? "eager" : "lazy",
    decoding: "async",
    onError: () => setFailed(true),
  }

  if (!local) {
    imageProps.srcSet = [640, 960, 1280, 1600].map((size) => `${unsplash(id, size)} ${size}w`).join(", ")
    imageProps.sizes = sizes
  }

  if (priority) {
    imageProps.fetchPriority = "high"
  }

  return <img {...imageProps} />
}
