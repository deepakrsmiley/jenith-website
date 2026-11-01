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
  primary: "rounded-full bg-ink text-white hover:bg-black",
  inverse: "rounded-full bg-white text-ink hover:bg-white/90",
  secondary: "rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/35 backdrop-blur-md hover:bg-white hover:text-ink",
  ghost: "rounded-full bg-transparent px-0 text-teal hover:underline",
  light: "rounded-full bg-[#e8e8ed] text-ink hover:bg-[#d2d2d7]",
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
  const classes = `group inline-flex h-11 items-center justify-center gap-2 px-6 text-[14px] font-medium tracking-[-0.01em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`
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
