import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationProvider } from "@/components/consultation/ConsultationContext";
import { StickyCTABar } from "@/components/layout/StickyCTABar";
import { ChatWidget } from "@/components/chat/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://techstorelb.com'),
  title: {
    default: "TechStore Innovation Hub | Enterprise Infrastructure",
    template: "%s | TechStore Innovation Hub"
  },
  description: "The Operating System for Modern Infrastructure. We design, supply, and deploy turnkey solar, connectivity, and security systems on a single unified platform.",
  keywords: ["Solar Lebanon", "EV Charging Lebanon", "Enterprise Networking", "Security Systems", "Smart Infrastructure", "TechStore"],
  authors: [{ name: "TechStore Innovation Hub" }],
  creator: "TechStore Innovation Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techstorelb.com",
    title: "TechStore Innovation Hub | Enterprise Infrastructure",
    description: "The Operating System for Modern Infrastructure. Unified Solar, Connectivity, and Security solutions.",
    siteName: "TechStore Innovation Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechStore Innovation Hub",
    description: "The Operating System for Modern Infrastructure.",
    creator: "@techstorelb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
};

import { getDictionary } from "@/lib/dictionary";

// ... other imports

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        {/* Skip to Content Link - WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
        >
          Skip to content
        </a>

        {/* Analytics (Phase 10) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} />

        <ConsultationProvider>
          <Navbar dict={dict} />
          <main id="main-content" className="flex-grow bg-[#F8F9FA]" tabIndex={-1}>
            {children}
          </main>
          <StickyCTABar />
          <ChatWidget />
          <Footer dict={dict} />
        </ConsultationProvider>
      </body>
    </html>
  );
}
