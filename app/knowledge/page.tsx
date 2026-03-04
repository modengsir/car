import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { KnowledgeList } from "@/components/knowledge/knowledge-list"

export const metadata = {
  title: "知识库 - AutoMod Pro",
  description: "汽车改装专业知识文章，涵盖法规、材质、技术等多维度内容",
}

export default function KnowledgePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-12">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              知识库
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              深入浅出的改装知识，助您全方位了解汽车改装
            </p>
          </div>
          <KnowledgeList />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
