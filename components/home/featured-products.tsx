import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/data"

export function FeaturedProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              精选产品
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              热门改装配件推荐
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            全部产品
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-4">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {product.brand}
                </span>
                <h3 className="text-sm font-medium text-foreground">
                  {product.name}
                </h3>
                <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    {'\u00A5'}{product.price.toLocaleString()}
                  </span>
                  <div className="flex gap-1">
                    {product.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
