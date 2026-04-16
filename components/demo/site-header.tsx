import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { LogoLight, LogoDark } from "@/components/shared/logo";

const componentsUrl = "https://baseui-cn.com";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-3 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          <LogoLight />
          baseui-cn
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {/* <Badge
            className="border-amber-200 bg-amber-50 text-amber-900"
            variant="outline"
          >
            Demo
          </Badge> */}
          <Link
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-black/5 hover:text-foreground"
            href="/"
          >
            Home
          </Link>
          <Link
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-black/5 hover:text-foreground"
            href="/grid"
          >
            Grid demos
          </Link>
          <Link
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-black/5 hover:text-foreground"
            href="/command"
          >
            Command demo
          </Link>
          <Link
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-black/5 hover:text-foreground"
            href={componentsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit baseui-cn
          </Link>
        </div>

        <Button
          className="rounded-full"
          render={<a href={componentsUrl} rel="noreferrer" target="_blank" />}
          size="sm"
        >
          Get the Components
          <ArrowUpRightIcon className="size-4" />
        </Button>
      </div>
    </header>
  );
}
