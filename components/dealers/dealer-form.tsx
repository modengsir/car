"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function DealerForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle className="mb-4 h-10 w-10 text-foreground" />
        <h3 className="text-lg font-semibold text-foreground">申请已提交</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          我们会在 3 个工作日内通过电话联系您，请保持手机畅通。
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs text-muted-foreground underline underline-offset-2"
        >
          重新提交
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground">门店名称 *</label>
          <input
            required
            type="text"
            placeholder="请输入门店全称"
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground">联系人 *</label>
          <input
            required
            type="text"
            placeholder="请输入联系人姓名"
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground">联系电话 *</label>
          <input
            required
            type="tel"
            placeholder="请输入手机号码"
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground">所在城市 *</label>
          <input
            required
            type="text"
            placeholder="省份 / 城市"
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-foreground">主营车系</label>
        <input
          type="text"
          placeholder="例：BMW、Mercedes-Benz、Audi"
          className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-foreground">备注信息</label>
        <textarea
          rows={3}
          placeholder="请简要描述门店情况或合作意向"
          className="resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        提交申请
      </button>
    </form>
  )
}
