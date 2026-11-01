import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ErrorBoundary } from "@/components/layout/ErrorBoundary"
import { Layout } from "@/components/layout/Layout"
import { AboutPage } from "@/pages/AboutPage"
import { ApplicationsPage } from "@/pages/ApplicationsPage"
import { ContactPage } from "@/pages/ContactPage"
import { GalleryPage } from "@/pages/GalleryPage"
import { HomePage } from "@/pages/HomePage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { PrivacyPage } from "@/pages/PrivacyPage"
import { ProductDetailPage } from "@/pages/ProductDetailPage"
import { ProductsPage } from "@/pages/ProductsPage"
import { QuotePage } from "@/pages/QuotePage"
import { TechnicalPage } from "@/pages/TechnicalPage"

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:slug" element={<ProductDetailPage />} />
            <Route path="technical" element={<TechnicalPage />} />
            <Route path="applications" element={<ApplicationsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="quote" element={<QuotePage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
