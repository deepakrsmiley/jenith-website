type SectionHeadingProps = {
  eyebrow?: string
  title: string
  text?: string
  invert?: boolean
  as?: "h1" | "h2"
}

export function SectionHeading({ eyebrow, title, text, invert = false, as = "h2" }: SectionHeadingProps) {
  const Heading = as
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-[12px] font-medium tracking-[0.04em] text-teal">{eyebrow}</p> : null}
      <Heading className={`mt-3 text-[40px] leading-[1.02] sm:text-[52px] md:text-[64px] ${invert ? "text-white" : "text-ink"}`}>
        {title}
      </Heading>
      {text ? (
        <p className={`mt-5 max-w-xl text-[17px] leading-[1.5] sm:text-[19px] ${invert ? "text-white/60" : "text-muted"}`}>{text}</p>
      ) : null}
    </div>
  )
}
