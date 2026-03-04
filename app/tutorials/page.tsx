import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TutorialList } from "@/components/tutorials/tutorial-list"

export const metadata = {
  title: "安装教程 - AutoMod Pro",
  description: "专业改装安装视频教程，从入门到进阶全覆盖",
}

export default function TutorialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-12">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              安装教程
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              由资深技师录制的专业安装视频，部分教程需付费解锁
            </p>
          </div>
          <TutorialList />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
