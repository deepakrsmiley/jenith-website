import { useEffect, useId, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { announcement, navItems } from "@/data/site"
import { Logo } from "@/components/ui/Logo"

type HeaderProps = {
  onHeight: (height: number) => void
}

function isActive(to: string, pathname: string) {
  if (to === "/") return pathname === "/"
  return pathname === to || pathname.startsWith(`${to}/`)
}

export function Header({ onHeight }: HeaderProps) {
  const location = useLocation()
  const shellRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const isHome = location.pathname === "/"
  const solid = !isHome || scrolled || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const element = shellRef.current
    if (!element) return
    const publish = () => onHeight(element.offsetHeight)
    publish()
    const observer = new ResizeObserver(publish)
    observer.observe(element)
    return () => observer.disconnect()
  }, [onHeight])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const focusable = panel?.querySelectorAll<HTMLElement>("a, button")
    focusable?.[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  const linkClass = (to: string) => {
    const active = isActive(to, location.pathname)
    return `relative py-2 text-[12px] font-normal tracking-[-0.01em] transition-colors duration-300 ${
      active ? "text-teal" : solid ? "text-ink/70 hover:text-ink" : "text-white/75 hover:text-white"
    }`
  }

  return (
    <div ref={shellRef} className={`fixed inset-x-0 top-0 z-50 ${solid ? "border-b border-black/8 bg-[#fbfbfd]/80 backdrop-blur-2xl backdrop-saturate-150" : ""}`}>
      <div className={`px-5 py-2 text-center text-[11px] font-medium tracking-[0.12em] uppercase ${solid ? "text-muted" : "bg-black/70 text-white/70 backdrop-blur-md"}`}>
        {announcement}
      </div>
      <header className="transition-colors duration-300">
        <div className="mx-auto flex h-12 w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
          <Link to="/" className="shrink-0 rounded-sm" aria-label="NEXCON home">
            <Logo tone={solid ? "dark" : "light"} />
          </Link>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className={linkClass(item.to)} aria-current={isActive(item.to, location.pathname) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/quote"
              className={`hidden h-8 items-center rounded-full px-4 text-[13px] font-medium transition-colors duration-300 sm:inline-flex ${
                solid ? "bg-ink text-white hover:bg-black" : "bg-white text-ink hover:bg-white/90"
              }`}
            >
              Request a Quote
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center xl:hidden ${solid ? "text-navy" : "text-white"}`}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute top-1.5 left-0 h-px w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          className="menu-panel max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-black/8 bg-white/95 backdrop-blur-2xl xl:hidden"
        >
          <nav className="mx-auto flex w-full max-w-[1240px] flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-black/8 py-3.5 text-[21px] font-medium tracking-[-0.02em] text-ink"
                aria-current={isActive(item.to, location.pathname) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/quote" className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-ink px-5 text-[14px] font-medium text-white">
              Request a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
