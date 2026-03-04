import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, MessageCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = products.find((p) => p.id === id)
  if (!product) notFound()

  const related = products.filter(
    (p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category)
  ).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-10">
          {/* Breadcrumb */}
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            返回产品列表
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {product.brand}
              </span>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                {product.name}
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-2 border-t border-border pt-4">
                <span className="text-2xl font-bold text-foreground">
                  {'\u00A5'}{product.price.toLocaleString()}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  含税价格，线下门店安装另计
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href="tel:4008886688"
                  className="flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  电话咨询
                </a>
                <button className="flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                  <MessageCircle className="h-4 w-4" />
                  在线咨询
                </button>
              </div>

              {/* Specs */}
              <div className="mt-4 rounded-lg border border-border bg-card p-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">产品参数</h3>
                <dl className="flex flex-col gap-2.5">
                  {[
                    { label: "适配品牌", value: product.brand },
                    { label: "产品分类", value: product.category === "exhaust" ? "排气系统" : product.category === "bodykit" ? "空力套件" : product.category === "suspension" ? "悬挂系统" : "轮毂轮胎" },
                    { label: "材质工艺", value: product.tags[product.tags.length - 1] || "高品质材料" },
                    { label: "质保期限", value: "12 个月" },
                  ].map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0">
                      <dt className="text-xs text-muted-foreground">{spec.label}</dt>
                      <dd className="text-xs font-medium text-foreground">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">相关产品</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-sm"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-3">
                      <span className="text-[10px] text-muted-foreground">{item.brand}</span>
                      <h3 className="text-sm font-medium text-foreground">{item.name}</h3>
                      <span className="text-sm font-semibold text-foreground">
                        {'\u00A5'}{item.price.toLocaleString()}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
