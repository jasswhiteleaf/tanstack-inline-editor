import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ArrowUpRightIcon, SparklesIcon } from "lucide-react";
import { CCommand1 } from "@/components/examples/c-command-1";
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
  title: "Command Palette Demo",
  description:
    "A focused command palette demo page with keyboard-first interactions and an install CTA for Base UI CN components.",
  openGraph: {
    title: "Command Palette Demo",
    description:
      "Preview a polished command palette interaction built for a small demo app and route visitors to Base UI CN for components.",
  },
};

export default function Page() {
  return (
    <main className="relative pb-16">
      <SiteHeader />

      <section className="px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-4">
            <Badge
              className="border-sky-200 bg-white/70 text-sky-900"
              variant="outline"
            >
              AI Command Demo
            </Badge>
            <div className="space-y-3">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                A dedicated command palette page that feels more like a product
                preview.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                This route now works as a cleaner second stop in the demo. It
                keeps attention on the command interaction, while the sticky top
                CTA still points users to Base UI CN to grab the components.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                className="rounded-full bg-white/80"
                render={<Link href="/" />}
                size="lg"
                variant="outline"
              >
                <ArrowLeftIcon className="size-4" />
                Back to main demo
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
                Get the Components
                <ArrowUpRightIcon className="size-4" />
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-white/70 bg-white/80 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm">
            <CardHeader className="gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  className="border-amber-200 bg-amber-50 text-amber-900"
                  variant="outline"
                >
                  Keyboard-first
                </Badge>
                <Badge
                  className="border-emerald-200 bg-emerald-50 text-emerald-900"
                  variant="outline"
                >
                  Search + AI branch
                </Badge>
                <Badge
                  className="border-slate-200 bg-slate-50 text-slate-900"
                  variant="outline"
                >
                  Demo ready
                </Badge>
              </div>
              <CardTitle className="text-2xl">Command menu preview</CardTitle>
              <CardDescription className="max-w-3xl text-sm leading-6">
                Open the dialog to try the normal command flow, then press{" "}
                <span className="font-medium text-foreground">Tab</span> or use
                the AI action to switch into the assistant-style state.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex min-h-[420px] flex-col items-center justify-center gap-6 px-6 py-12 text-center">
              <div className="space-y-2">
                <SparklesIcon className="mx-auto size-6 text-amber-700" />
                <p className="text-lg font-semibold">Try the command dialog</p>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  This is still the same interactive example, now framed with
                  better spacing, context, and navigation so it works as part of
                  the overall demo experience.
                </p>
              </div>
              <CCommand1 />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
