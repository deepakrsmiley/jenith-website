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
      {eyebrow ? (
        <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-teal">
          <span className="h-px w-8 bg-teal" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Heading className={`mt-4 text-[42px] leading-[0.98] sm:text-[56px] md:text-[68px] ${invert ? "text-white" : "text-ink"}`}>
        {title}
      </Heading>
      {text ? (
        <p className={`mt-6 max-w-xl text-[16px] leading-[1.7] font-light sm:text-[18px] ${invert ? "text-white/65" : "text-muted"}`}>{text}</p>
      ) : null}
    </div>
  )
}
