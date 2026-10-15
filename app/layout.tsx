import type { Metadata, Viewport } from "next";
import { Amiri, Nunito, Young_Serif } from "next/font/google";
import "./globals.css";
import { appName } from "@/lib/brand-server";

// Nunito: rounded and very legible for UI and lesson text (the Duolingo feel). Young Serif: titles,
// for a classier voice. Amiri sets the Arabic.
const body = Nunito({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });
const display = Young_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const amiri = Amiri({ variable: "--font-amiri", subsets: ["arabic"], weight: ["400", "700"] });

// "Hidaya", or a neutral "Daily" on a device in discreet mode: the title shows in tabs and on home screens.
// The description stays neutral either way.
export async function generateMetadata(): Promise<Metadata> {
  const name = await appName();
  return {
    title: name,
    description: "A five-minute lesson a day.",
    manifest: "/manifest.webmanifest",
    icons: { icon: "/icons/icon.svg", apple: "/icons/apple-touch-icon.png" },
    appleWebApp: { capable: true, title: name, statusBarStyle: "default" },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1626" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${amiri.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
