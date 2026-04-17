import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Layers3Icon,
  Rows3Icon,
} from "lucide-react";
import { Pattern } from "@/components/examples/c-data-grid-1";
import { PatternEdit1 } from "@/components/examples/c-data-grid-2";
import { PatternEdit2 } from "@/components/examples/c-data-grid-3";
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
  title: "TanStack Table Grid Demos",
  description:
    "Compare three TanStack Table demos built with Base UI CN: a basic grid, an inline editor, and an optimistic async editing flow.",
  openGraph: {
    title: "TanStack Table Grid Demos",
    description:
      "See how the Base UI CN table patterns progress from a simple grid to inline editing and async optimistic updates.",
  },
};

export default function GridPage() {
  return (
    <main className="relative pb-16">
      <SiteHeader />

      <section className="px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="space-y-4">
            <Badge
              className="border-amber-200 bg-white/70 text-amber-900"
              variant="outline"
            >
              TanStack Table Demos
            </Badge>
            <div className="space-y-3">
              <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-balance text-3xl lg:text-4xl">
                Basic, inline, and optimistic editing demos in one place.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                This page shows the full progression of the table examples. It
                starts with a simpler data grid, moves into inline editing with
                generated dialog fields, and finishes with async saves,
                optimistic UI, and rollback behavior.
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
                Back to home
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
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-white/70 bg-white/75 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-sm">
              <CardHeader className="gap-3">
                <Rows3Icon className="size-5 text-amber-700" />
                <CardTitle className="text-base">Basic grid</CardTitle>
                <CardDescription>
                  The lighter starting point with the core table structure,
                  sorting, pagination, and a cleaner read-only presentation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-white/70 bg-white/75 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-sm">
              <CardHeader className="gap-3">
                <Layers3Icon className="size-5 text-sky-700" />
                <CardTitle className="text-base">Inline editor</CardTitle>
                <CardDescription>
                  The same table becomes editable inline and can generate a
                  matching dialog editor from column metadata.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-white/70 bg-white/75 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.45)] backdrop-blur-sm">
              <CardHeader className="gap-3">
                <Layers3Icon className="size-5 text-emerald-700" />
                <CardTitle className="text-base">
                  Optimistic async flow
                </CardTitle>
                <CardDescription>
                  Adds loading states, optimistic saves, and rollback behavior
                  to show how the pattern works in a more production-like flow.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <Card className="overflow-hidden border-white/70 bg-white/80 p-2 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm">
            <CardHeader className="gap-2 px-4 pt-4">
              <Badge
                className="w-fit border-slate-200 bg-slate-50 text-slate-900"
                variant="outline"
              >
                Basic
              </Badge>
              <CardTitle className="text-xl">Basic data grid</CardTitle>
              <CardDescription>
                This is `c-data-grid-1`: the simpler starting point before
                inline editing behavior is introduced.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2 pb-2 sm:px-4">
              <Pattern />
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-white/70 bg-white/80 p-2 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm">
            <CardHeader className="gap-2 px-4 pt-4">
              <Badge
                className="w-fit border-amber-200 bg-amber-50 text-amber-900"
                variant="outline"
              >
                Inline
              </Badge>
              <CardTitle className="text-xl">
                Inline editing with generated dialog fields
              </CardTitle>
              <CardDescription>
                This is `c-data-grid-2`: edit cells inline or open a dialog
                editor that adapts from the column definitions.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2 pb-2 sm:px-4">
              <PatternEdit1 />
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-white/70 bg-white/80 p-2 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.55)] backdrop-blur-sm">
            <CardHeader className="gap-2 px-4 pt-4">
              <Badge
                className="w-fit border-emerald-200 bg-emerald-50 text-emerald-900"
                variant="outline"
              >
                Advanced Inline
              </Badge>
              <CardTitle className="text-xl">
                Optimistic updates with loading and rollback
              </CardTitle>
              <CardDescription>
                This is `c-data-grid-3`: the advanced version with async saves,
                pending states, and failure recovery.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2 pb-2 sm:px-4">
              <PatternEdit2 />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
