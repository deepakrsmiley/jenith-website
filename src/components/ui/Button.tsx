import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type Variant = "primary" | "secondary" | "ghost" | "light" | "inverse"

type ButtonProps = {
  to?: string
  variant?: Variant
  arrow?: boolean
  className?: string
  children: ReactNode
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary: "bg-ink text-[#faf7f2] hover:bg-teal hover:text-ink",
  inverse: "bg-[#faf7f2] text-ink hover:bg-white",
  secondary: "bg-transparent text-white ring-1 ring-inset ring-white/45 backdrop-blur-md hover:bg-[#faf7f2] hover:text-ink",
  ghost: "bg-transparent px-0 text-teal hover:text-ink",
  light: "bg-[#ebe4da] text-ink hover:bg-[#e0d6c8]",
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
      <path
        d="M4 10h11M11 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  )
}

export function Button({
  to,
  variant = "primary",
  arrow = false,
  className = "",
  children,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = `group inline-flex h-12 items-center justify-center gap-3 px-7 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowIcon /> : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  )
}
