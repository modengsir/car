"use client"

import { useState } from "react"
import { Clock, Lock, Play, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { tutorials } from "@/lib/data"

const levels = ["全部", "入门", "进阶", "专业"] as const

export function TutorialList() {
  const [selectedLevel, setSelectedLevel] = useState<string>("全部")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = tutorials.filter((t) =>
    selectedLevel === "全部" ? true : t.level === selectedLevel
  )

  return (
    <div className="flex flex-col gap-6">
      {/* Level Filter */}
      <div className="flex flex-wrap gap-2">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              selectedLevel === level
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Info Banner */}
      <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
        <Star className="h-4 w-4 shrink-0 text-foreground" />
        <div>
          <p className="text-xs font-medium text-foreground">免费与付费教程</p>
          <p className="text-xs text-muted-foreground">
            标记为"免费"的教程可直接观看，付费教程需解锁后方可查阅完整内容。
          </p>
        </div>
      </div>

      {/* Tutorial Cards */}
      <div className="flex flex-col gap-3">
        {filtered.map((tutorial) => (
          <div
            key={tutorial.id}
            className="rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-foreground/20"
          >
            <button
              onClick={() =>
                setExpandedId(expandedId === tutorial.id ? null : tutorial.id)
              }
              className="flex w-full items-start gap-4 p-4 text-left"
            >
              {/* Play Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
                {tutorial.free ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Lock className="h-4 w-4" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={cn(
                      "shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium",
                      tutorial.free
                        ? "bg-secondary text-foreground"
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    {tutorial.free ? "免费" : `\u00A5${tutorial.price}`}
                  </span>
                  <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                    {tutorial.level}
                  </span>
                  <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                    {tutorial.brand}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground truncate">
                  {tutorial.title}
                </h3>
                <div className="mt-1 flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span className="text-[10px]">{tutorial.duration}</span>
                </div>
              </div>
            </button>

            {expandedId === tutorial.id && (
              <div className="border-t border-border px-4 py-4">
                <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                  {tutorial.description}
                </p>
                {tutorial.free ? (
                  <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    <Play className="h-3.5 w-3.5" />
                    立即观看
                  </button>
                ) : (
                  <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    <Lock className="h-3.5 w-3.5" />
                    付费解锁 {'\u00A5'}{tutorial.price}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
          <p className="text-sm text-muted-foreground">该级别暂无教程</p>
        </div>
      )}
    </div>
  )
}
