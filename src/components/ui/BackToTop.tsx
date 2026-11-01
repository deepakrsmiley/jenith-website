import { useEffect, useState } from "react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black sm:right-7 sm:bottom-7"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
        <path d="M10 4v12M5 9l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </button>
  )
}
