import { company } from "@/data/site"

type LogoProps = {
  tone?: "light" | "dark"
  compact?: boolean
}

export function Logo({ tone = "dark", compact = false }: LogoProps) {
  const text = tone === "light" ? "text-white" : "text-ink"
  const muted = tone === "light" ? "text-white/70" : "text-muted"

  return (
    <span className={`flex items-center gap-2.5 ${text}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden="true">
        <rect x="2" y="10" width="7" height="20" rx="1.5" fill="currentColor" />
        <rect x="12.5" y="2" width="7" height="28" rx="1.5" fill="currentColor" />
        <rect x="23" y="13" width="7" height="17" rx="1.5" fill="#18B2A2" />
      </svg>
      <span className="leading-none">
        <span className="block text-[15px] font-semibold tracking-[-0.03em]">{company.name}</span>
        {compact ? null : (
          <span className={`mt-1 block text-[11px] font-medium tracking-[-0.01em] ${muted}`}>Concrete Solutions</span>
        )}
      </span>
    </span>
  )
}
