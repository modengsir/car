import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DealerForm } from "@/components/dealers/dealer-form"
import { Shield, TrendingUp, Wrench, Headphones, MapPin, Users } from "lucide-react"

export const metadata = {
  title: "诚招合作 - AutoMod Pro",
  description: "面向全国改装店开放合作，共享优质产品与专业技术支持",
}

const advantages = [
  {
    icon: Shield,
    title: "正品质保",
    description: "所有产品均享受厂家正品质保，让您和客户无后顾之忧。",
  },
  {
    icon: TrendingUp,
    title: "优惠供货",
    description: "合作门店享受专属批发价格体系，利润空间有保障。",
  },
  {
    icon: Wrench,
    title: "技术培训",
    description: "定期提供线上线下安装技术培训，提升门店专业能力。",
  },
  {
    icon: Headphones,
    title: "专属客服",
    description: "一对一客户经理全程对接，快速响应售前售后需求。",
  },
  {
    icon: MapPin,
    title: "区域保护",
    description: "实行合理的区域授权制度，保护合作伙伴市场利益。",
  },
  {
    icon: Users,
    title: "营销支持",
    description: "提供品牌物料、社交媒体素材与联合推广方案。",
  },
]

export default function DealersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground mb-4">
                  全国招商
                </span>
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
                  诚招全国线下改装店
                  <br />
                  <span className="text-muted-foreground">共创改装新生态</span>
                </h1>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  我们正在寻找有实力、有热情的改装店伙伴，携手打造覆盖全国的专业改装服务网络。无论您是成熟门店还是新兴工作室，都欢迎加入。
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/dealer-shop.jpg"
                  alt="专业改装门店"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                合作优势
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                六大核心优势，助力您的门店快速发展
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-foreground">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Steps */}
        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                合作流程
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              {[
                { step: "01", title: "提交申请", desc: "填写下方合作申请表" },
                { step: "02", title: "资质审核", desc: "我们将在 3 个工作日内审核" },
                { step: "03", title: "签订协议", desc: "双方确认合作条款" },
                { step: "04", title: "正式合作", desc: "开通供货渠道与技术支持" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center rounded-lg border border-border bg-background p-5">
                  <span className="mb-2 text-2xl font-bold text-muted-foreground/30">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="border-t border-border bg-background">
          <div className="mx-auto max-w-2xl px-4 py-12 lg:px-6 lg:py-16">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                提交合作申请
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                填写以下信息，我们将尽快与您联系
              </p>
            </div>
            <DealerForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
