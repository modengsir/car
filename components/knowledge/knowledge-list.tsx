"use client"

import { useState } from "react"
import { BookOpen, Clock, ChevronRight, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { knowledgeArticles } from "@/lib/data"

const categories = [
  "全部",
  ...Array.from(new Set(knowledgeArticles.map((a) => a.category))),
]

export function KnowledgeList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = knowledgeArticles.filter((a) => {
    const matchCategory =
      selectedCategory === "全部" || a.category === selectedCategory
    const matchSearch =
      searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="搜索知识文章..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              selectedCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Count */}
      <p className="text-xs text-muted-foreground">
        共 <span className="font-medium text-foreground">{filtered.length}</span> 篇文章
      </p>

      {/* Articles */}
      <div className="flex flex-col gap-3">
        {filtered.map((article) => (
          <div
            key={article.id}
            className="rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-foreground/20"
          >
            <button
              onClick={() =>
                setExpandedId(expandedId === article.id ? null : article.id)
              }
              className="flex w-full items-start gap-4 p-4 text-left"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
                <BookOpen className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                    <Clock className="h-2.5 w-2.5" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground">
                  {article.title}
                </h3>
              </div>
              <ChevronRight
                className={cn(
                  "h-4 w-4 shrink-0 text-muted-foreground transition-transform mt-1",
                  expandedId === article.id && "rotate-90"
                )}
              />
            </button>

            {expandedId === article.id && (
              <div className="border-t border-border px-4 py-4">
                <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  阅读全文
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
          <p className="text-sm text-muted-foreground">未找到匹配的文章</p>
          <button
            onClick={() => {
              setSelectedCategory("全部")
              setSearchQuery("")
            }}
            className="mt-2 text-xs text-foreground underline underline-offset-2"
          >
            清除筛选
          </button>
        </div>
      )}
    </div>
  )
}
