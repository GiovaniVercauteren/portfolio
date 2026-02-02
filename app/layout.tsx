import type { Metadata } from "next";
import '@/app/ui/globals.css';
import { geistSans, geistMono } from "@/app/ui/fonts";
import LightOrbFrame from "./ui/components/LightOrbFrame";



export const metadata: Metadata = {
  title: "Giovani Vercauteren - Portfolio",
  description: "Portfolio website of Giovani Vercauteren, a passionate software developer specializing in web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`lg:py-0 bg-sky-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LightOrbFrame />
        <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 relative lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
