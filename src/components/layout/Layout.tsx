import { createContext, useContext, useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { BackToTop } from "@/components/ui/BackToTop"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"

const HeaderHeightContext = createContext(108)

export function useHeaderHeight() {
  return useContext(HeaderHeightContext)
}

export function Layout() {
  const [height, setHeight] = useState(108)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    document.documentElement.style.setProperty("--header-offset", `${height}px`)
  }, [height])

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }
    const target = document.getElementById(location.hash.slice(1))
    if (target) {
      window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 40)
    }
  }, [location.hash, location.pathname])

  return (
    <HeaderHeightContext.Provider value={height}>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Header onHeight={setHeight} />
      {isHome ? null : <div style={{ height }} aria-hidden="true" />}
      <main id="content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </HeaderHeightContext.Provider>
  )
}
