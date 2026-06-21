import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DevShastra Technologies | Enterprise Software Solutions",
    template: "%s | DevShastra Technologies",
  },
  description:
    "DevShastra Technologies delivers enterprise-grade software solutions — web development, mobile apps, AI/ML, IoT, SaaS platforms, and government solutions. Engineering the future.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "AI solutions",
    "IoT",
    "SaaS",
    "enterprise software",
    "DevShastra Technologies",
  ],
  authors: [{ name: "DevShastra Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "DevShastra Technologies",
    title: "DevShastra Technologies | Enterprise Software Solutions",
    description:
      "Enterprise-grade software solutions — web, mobile, AI/ML, IoT, and government systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevShastra Technologies",
    description:
      "Enterprise-grade software solutions — web, mobile, AI/ML, IoT, and government systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/Favicon.png" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {/* Grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
