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
  title: "Base UI CN Command Palette Demo",
  description:
    "A Base UI CN command palette demo with keyboard-first navigation, grouped results, and an assistant-style mode.",
  openGraph: {
    title: "Base UI CN Command Palette Demo",
    description:
      "Preview the Base UI CN command component with keyboard navigation, grouped commands, and an assistant branch.",
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
              baseui-cn Command Demo
            </Badge>
            <div className="space-y-3">
              <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-balance lg:text-4xl">
                A command palette demo built to show the interaction, not just
                the shell around it.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                This route keeps the focus on the command experience itself:
                grouped results, keyboard navigation, shortcut hints, and the
                assistant-style branch that can be toggled from the same dialog.
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
                Install from baseui-cn
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
                  Grouped commands
                </Badge>
                <Badge
                  className="border-slate-200 bg-slate-50 text-slate-900"
                  variant="outline"
                >
                  Assistant handoff
                </Badge>
              </div>
              <CardTitle className="text-2xl">
                Command palette interaction
              </CardTitle>
              <CardDescription className="max-w-3xl text-sm leading-6">
                Open the dialog to try the standard command flow, then press{" "}
                <span className="font-medium text-foreground">Tab</span> or use
                the AI action to switch into the assistant-style state.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex min-h-[420px] flex-col items-center justify-center gap-6 px-6 py-12 text-center">
              <div className="space-y-2">
                <SparklesIcon className="mx-auto size-6 text-amber-700" />
                <p className="text-lg font-semibold">Try the command palette</p>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  The example keeps the component front and center, so it is
                  easier to evaluate the search behavior, command grouping, and
                  AI branch without unrelated page content getting in the way.
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
