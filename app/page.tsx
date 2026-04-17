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
  title: "TanStack Inline Editor Demo",
  description:
    "A TanStack Table inline editor demo built with Base UI CN components, including cell editing, generated dialogs, and a command palette example.",
  openGraph: {
    title: "TanStack Inline Editor Demo",
    description:
      "Explore inline editing patterns for TanStack Table and preview the Base UI CN components behind them.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TanStack Inline Editor Demo",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  description:
    "A demo app that showcases TanStack Table inline editing, generated form fields, and keyboard-driven command flows using Base UI CN.",
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
            <Badge
              className="border-amber-200 bg-white/70 text-amber-900"
              variant="outline"
            >
              Base UI CN Demo
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                Inline editing patterns for TanStack Table, built with base-ui.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                This demo focuses on the implementation details that matter:
                editable cells, generated dialog forms, column-driven field
                configuration, and a clearer path to turn the pattern into a
                reusable component in your own app.
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
                  <a
                    href="https://baseui-cn.com"
                    rel="noreferrer"
                    target="_blank"
                  />
                }
                size="lg"
              >
                Install from baseui-cn
                <ArrowUpRightIcon className="size-4" />
              </Button>
              <Button
                className="rounded-full bg-white/80"
                render={<Link href="/command" />}
                size="lg"
                variant="outline"
              >
                Open command palette
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-white/70 bg-white/75 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                <CardHeader className="gap-3">
                  <Rows3Icon className="size-5 text-amber-700" />
                  <CardTitle className="text-base">
                    Inline editing plus dialog editing
                  </CardTitle>
                  <CardDescription>
                    Edit directly inside the table, then reuse the same column
                    metadata to open a richer dialog editor when needed.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-white/70 bg-white/75 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                <CardHeader className="gap-3">
                  <SparklesIcon className="size-5 text-sky-700" />
                  <CardTitle className="text-base">
                    Column metadata drives the UI
                  </CardTitle>
                  <CardDescription>
                    Text, email, number, switch, rating, radio, and textarea
                    inputs are derived from the table config instead of a
                    separate hand-built form layer.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <Card className="overflow-hidden border-white/70 bg-white/80 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm">
            <CardHeader className="gap-3">
              <Badge
                className="w-fit border-emerald-200 bg-emerald-50 text-emerald-900"
                variant="outline"
              >
                Featured Workflow
              </Badge>
              <CardTitle className="text-2xl">
                TanStack inline editor with generated form fields
              </CardTitle>
              <CardDescription className="max-w-xl text-sm leading-6">
                The home page highlights the second grid pattern: the version
                that combines inline editing with a generated dialog editor and
                shows the most complete baseui-cn table-editing experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-stone-50 p-4">
                <p className="text-sm font-medium text-foreground">
                  Ready to study and reuse
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  The editing flow is exposed in a way that makes it easier to
                  inspect the behavior, map the pieces, and lift the pattern
                  into a real project.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-stone-50 p-4">
                <p className="text-sm font-medium text-foreground">
                  One definition, multiple editors
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  The same column configuration powers both inline cells and the
                  dialog editor, so the example stays compact without losing
                  flexibility.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-stone-50 p-4 md:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Compare the full progression
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      The dedicated grid page walks through the simple table,
                      the inline editor, and the async optimistic version so the
                      progression is easy to understand.
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
            <Badge
              className="border-amber-200 bg-white/70 text-amber-900"
              variant="outline"
            >
              Inline Editing Demo
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight">
              Try the baseui-cn inline editor pattern.
            </h2>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              TanStack Table example where the same column definitions control
              inline cell editors and the dialog-based form experience.
            </p>
          </div>

          <Card className="overflow-hidden border-white/70 bg-white/80 p-2 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm">
            <CardHeader className="gap-2 px-4 pt-4">
              <CardTitle className="text-xl">Inline editor demo</CardTitle>
              <CardDescription>
                Edit cells inline, open the dialog for richer fields, and keep
                the column config as the source of truth for both experiences.
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
