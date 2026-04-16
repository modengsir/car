import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const heroImage = "/car/images/hero-car.jpg"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                2026 全新产品线
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              专业汽车改装
              <br />
              <span className="text-muted-foreground">源于对性能的极致追求</span>
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              涵盖排气系统、空力套件、悬挂升级、锻造轮毂等全品类改装产品，
              为 BMW、Mercedes-Benz、Audi、Porsche 等主流车系提供专业解决方案。
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                浏览产品
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dealers"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                成为合作伙伴
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[16/11]">
            <Image
              src={heroImage}
              alt="专业改装跑车展示"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
