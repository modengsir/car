import Link from "next/link"
import { carBrands } from "@/lib/data"

export function BrandSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              按车系浏览
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              快速定位适合您爱车的改装产品
            </p>
          </div>
          <Link
            href="/products"
            className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors sm:block"
          >
            查看全部
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {carBrands.map((brand) => (
            <Link
              key={brand.id}
              href={`/products?brand=${brand.id}`}
              className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {brand.name.charAt(0)}
              </div>
              <span className="text-xs font-medium text-foreground">
                {brand.name}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {brand.count} 件产品
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
