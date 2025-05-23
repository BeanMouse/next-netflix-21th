import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeIndicator from "@/components/home-indicator";
import MainNavigation from "@/components/main-navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deardream Netflix",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout =
    "bg-black text-white mx-auto h-screen w-screen max-w-[375px] shadow-[0_0_8px_#9aa6b230]";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1E1E1E] `}>
        <div className={`${layout} flex flex-col justify-between`}>
          <div className="flex-1 overflow-hidden">{children}</div>
          <MainNavigation />
          <HomeIndicator />
        </div>
      </body>
    </html>
  );
}
