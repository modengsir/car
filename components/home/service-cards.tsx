import Link from "next/link"
import { Handshake, Play, BookOpen, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Handshake,
    title: "诚招全国合作店",
    description: "面向全国改装店开放合作，享受优质供货价格与专业技术支持，共同拓展市场。",
    href: "/dealers",
    cta: "了解详情",
  },
  {
    icon: Play,
    title: "安装教程",
    description: "由资深技师录制的专业安装视频教程，从入门到专业级别全覆盖，助力技术提升。",
    href: "/tutorials",
    cta: "浏览教程",
  },
  {
    icon: BookOpen,
    title: "改装知识库",
    description: "深入浅出的改装知识文章，涵盖法规政策、材质科学、技术原理等多个维度。",
    href: "/knowledge",
    cta: "开始学习",
  },
]

export function ServiceCards() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            更多服务
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            除了产品，我们还提供全方位的改装支持
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground">
                {service.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
