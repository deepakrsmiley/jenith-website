import { Link } from "react-router-dom"
import { products } from "@/data/products"
import { company, contactChannels, navItems } from "@/data/site"
import { Logo } from "@/components/ui/Logo"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid w-full max-w-[980px] gap-12 px-6 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" compact />
          <p className="mt-5 max-w-xs text-[12px] leading-relaxed text-white/50">{company.introduction}</p>
        </div>

        <div>
          <h2 className="text-[12px] font-medium text-white">Navigate</h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-[12px] text-white/50 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="text-[12px] text-white/50 hover:text-white">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[12px] font-medium text-white">Products</h2>
          <ul className="mt-4 space-y-2.5">
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/products/${product.slug}`} className="text-[12px] text-white/50 hover:text-white">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[12px] font-medium text-white">Contact</h2>
          <ul className="mt-4 space-y-3">
            {contactChannels.map((channel) => (
              <li key={channel.label}>
                <p className="text-[12px] text-white">{channel.label}</p>
                <p className="text-[12px] text-white/50">{channel.value}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[12px] leading-relaxed text-white/40">
            Social profiles will be listed after the company confirms the accounts to publish.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[980px] flex-col gap-2 px-6 py-5 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Copyright © {year} {company.name}. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
