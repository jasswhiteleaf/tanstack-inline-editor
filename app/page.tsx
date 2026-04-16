import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  Rows3Icon,
  SparklesIcon,
} from "lucide-react";
import { PatternEdit1 } from "@/components/examples/c-data-grid-2";
import { SiteHeader } from "@/components/demo/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Demo Home",
  description:
    "A polished demo home page featuring a ready-to-use inline editing grid plus dedicated routes for the full grid demos and command palette.",
  openGraph: {
    title: "TanStack Demo Home",
    description:
      "Preview a ready-to-use inline editing grid and jump into dedicated grid and command demo pages.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TanStack Inline Editor Demo",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "A demo app that showcases TanStack Table inline editing and Base UI-inspired command patterns.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Page() {
  return (
    <main className="relative pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="px-4 pb-8 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <Badge className="border-amber-200 bg-white/70 text-amber-900" variant="outline">
              Base UI CN Demo Preview
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                A focused landing page for the inline grid demo.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                The landing page now highlights one ready-to-use table example. From here you can
                jump into the full grid showcase for Basic, Inline, and Advanced Inline demos, or
                open the dedicated command page separately.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                className="rounded-full bg-white/80"
                render={<Link href="/grid" />}
                size="lg"
                variant="outline"
              >
                View grid demos
                <ArrowRightIcon className="size-4" />
              </Button>
              <Button
                className="rounded-full"
                render={
                  <a href="https://baseui-cn.com" rel="noreferrer" target="_blank" />
                }
                size="lg"
              >
                Get the Components
                <ArrowUpRightIcon className="size-4" />
              </Button>
              <Button
                className="rounded-full bg-white/80"
                render={<Link href="/command" />}
                size="lg"
                variant="outline"
              >
                Open command demo
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-white/70 bg-white/75 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                <CardHeader className="gap-3">
                  <Rows3Icon className="size-5 text-amber-700" />
                  <CardTitle className="text-base">Inline + dialog editing</CardTitle>
                  <CardDescription>
                    One grid setup drives both cell editing and the generated dialog editor.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-white/70 bg-white/75 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                <CardHeader className="gap-3">
                  <SparklesIcon className="size-5 text-sky-700" />
                  <CardTitle className="text-base">Column-driven fields</CardTitle>
                  <CardDescription>
                    Text, email, number, radio, switch, rating, and textarea inputs adapt from column metadata.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <Card className="overflow-hidden border-white/70 bg-white/80 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm">
            <CardHeader className="gap-3">
              <Badge className="w-fit border-emerald-200 bg-emerald-50 text-emerald-900" variant="outline">
                Featured Demo
              </Badge>
              <CardTitle className="text-2xl">
                Inline editing with a generated dialog editor.
              </CardTitle>
              <CardDescription className="max-w-xl text-sm leading-6">
                This landing page shows the second grid demo only. For the full progression,
                open the dedicated grid page to compare the basic table, inline editing, and the
                advanced optimistic update flow side by side.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-stone-50 p-4">
                <p className="text-sm font-medium text-foreground">Ready to use</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Click into cells to edit directly, then use the same schema to open a richer dialog editor.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-stone-50 p-4">
                <p className="text-sm font-medium text-foreground">Adaptive fields</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Column definitions automatically become editable controls without separate manual form setup.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-stone-50 p-4 md:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">Explore all grid states</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      The dedicated grid page breaks the flow into Basic, Inline, and Advanced Inline with loading and optimistic updates.
                    </p>
                  </div>
                  <Button
                    className="rounded-full"
                    render={<Link href="/grid" />}
                    variant="outline"
                  >
                    Open grid page
                    <ArrowRightIcon className="size-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8" id="grid-demo">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="space-y-2">
            <Badge className="border-amber-200 bg-white/70 text-amber-900" variant="outline">
              Landing Demo
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              The landing page now shows one focused grid example.
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              This is `c-data-grid-2`: a ready-to-use inline editing table with a generated dialog editor built from the same column definitions.
            </p>
          </div>

          <Card className="overflow-hidden border-white/70 bg-white/80 p-2 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm">
            <CardHeader className="gap-2 px-4 pt-4">
              <CardTitle className="text-xl">Inline Grid Demo</CardTitle>
              <CardDescription>
                Edit cells inline, open the dialog for richer fields, and use the column config as the source of truth.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2 pb-2 sm:px-4">
              <PatternEdit1 />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
