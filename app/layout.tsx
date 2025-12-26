import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "TechStore Innovation Hub",
  description: "Turning Ideas into Real-World Tech Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <ConsultationProvider>
          <Navbar />
          <main className="flex-grow bg-[#F8F9FA]">
            {children}
          </main>
          <StickyCTABar />
          <ChatWidget />
          <Footer />
        </ConsultationProvider>
      </body>
    </html>
  );
}
