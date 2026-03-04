"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { products, carBrands, productCategories } from "@/lib/data"

export function ProductCatalog() {
  const [selectedBrand, setSelectedBrand] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = products.filter((p) => {
    const matchBrand = selectedBrand === "all" || p.brand === carBrands.find(b => b.id === selectedBrand)?.name
    const matchCategory = selectedCategory === "all" || p.category === selectedCategory
    const matchSearch = searchQuery === "" || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchBrand && matchCategory && matchSearch
  })

  return (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="搜索产品名称..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          品牌筛选
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedBrand("all")}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              selectedBrand === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            全部品牌
          </button>
          {carBrands.slice(0, 6).map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(brand.id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                selectedBrand === brand.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          产品品类
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            全部品类
          </button>
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-xs text-muted-foreground">
        共找到 <span className="font-medium text-foreground">{filtered.length}</span> 件产品
      </p>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                <div className="mt-1.5 flex items-center justify-between">
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
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
          <p className="text-sm text-muted-foreground">未找到匹配的产品</p>
          <button
            onClick={() => {
              setSelectedBrand("all")
              setSelectedCategory("all")
              setSearchQuery("")
            }}
            className="mt-2 text-xs text-foreground underline underline-offset-2"
          >
            清除所有筛选
          </button>
        </div>
      )}
    </div>
  )
}
