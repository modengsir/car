import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCatalog } from "@/components/products/product-catalog"

export const metadata = {
  title: "产品展示 - AutoMod Pro",
  description: "浏览各大车系改装产品，涵盖排气系统、空力套件、悬挂、轮毂等全品类",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-12">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              产品展示
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              按品牌、品类筛选，快速找到适合您爱车的改装产品
            </p>
          </div>
          <ProductCatalog />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
