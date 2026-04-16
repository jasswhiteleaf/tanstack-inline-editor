import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TanStack Inline Editor Demo",
    template: "%s | TanStack Inline Editor Demo",
  },
  description:
    "A polished demo for TanStack Table inline editing and Base UI command patterns, with install-ready components available on Base UI CN.",
  applicationName: "TanStack Inline Editor Demo",
  keywords: "TanStack Table, inline editing, Base UI, command palette, Next.js demo, data grid",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TanStack Inline Editor Demo",
    description:
      "Explore polished inline-editing and command palette demos built with TanStack Table and Base UI patterns.",
    siteName: "TanStack Inline Editor Demo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TanStack Inline Editor Demo",
    description:
      "Preview Base UI-inspired demos for inline editing, command menus, and install-ready component workflows.",
  },
  icons: "/icon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
