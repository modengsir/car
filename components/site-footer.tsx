import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <span className="text-xs font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-sm font-semibold text-foreground">AutoMod Pro</span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              专业汽车改装产品供应商，致力于为车主提供高品质的改装配件与专业技术支持。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              快速导航
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "产品展示", href: "/products" },
                { label: "诚招合作", href: "/dealers" },
                { label: "安装教程", href: "/tutorials" },
                { label: "知识库", href: "/knowledge" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Series */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              热门车系
            </h3>
            <ul className="flex flex-col gap-2">
              {["BMW", "Mercedes-Benz", "Audi", "Porsche", "Toyota"].map((brand) => (
                <li key={brand}>
                  <Link
                    href={`/products?brand=${brand}`}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              联系我们
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span>400-888-6688</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span>info@automodpro.cn</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>广东省深圳市南山区科技园</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {'© 2026 AutoMod Pro. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
