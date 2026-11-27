import { company } from "@/data/site"

type LogoProps = {
  tone?: "light" | "dark"
  compact?: boolean
}

export function Logo({ tone = "dark", compact = false }: LogoProps) {
  const text = tone === "light" ? "text-white" : "text-ink"
  const muted = tone === "light" ? "text-white/70" : "text-muted"

  return (
    <span className={`flex items-center gap-3 ${text}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect x="2" y="10" width="6" height="20" fill="currentColor" />
        <rect x="13" y="2" width="6" height="28" fill="currentColor" />
        <rect x="24" y="13" width="6" height="17" fill="#a68456" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[22px] font-medium tracking-[0.01em] whitespace-nowrap">{company.name}</span>
        {compact ? null : (
          <span className={`mt-1 block text-[9px] font-medium uppercase tracking-[0.28em] ${muted}`}>Concrete</span>
        )}
      </span>
    </span>
  )
}
