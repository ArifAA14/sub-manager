import type { Metadata } from "next";
import { Geist } from 'next/font/google';
import "./globals.css";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Subscription Manager",
  description: "Manage all your subscriptions in one place.",
};

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
})




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` font-sans  antialiased ${geist.variable}`}>
        <SpeedInsights />
        <Toaster theme="light" richColors={true} position="top-right" />
        {children}
      </body>
    </html>
  );
}
