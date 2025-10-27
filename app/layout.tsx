import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
// import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Intercom } from "@/components/intercom";
import { RootLayoutClient } from "./layout-client";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { 
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="zh">
      <head />
      <body className={clsx("antialiased")}>
        <div className="h-full bg-[#000]"></div>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <RootLayoutClient>
            <div className="relative flex flex-col">
              <ScrollProgress />
              <Navbar />
              <main className="text-[#fff]">{children}</main>
              <Footer />
              <Intercom />
            </div>
          </RootLayoutClient>
        </Providers>
      </body>
    </html>
  );
}
