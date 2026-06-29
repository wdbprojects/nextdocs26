import type { Metadata } from "next";
import { Nunito_Sans, Lusitana, Oxanium } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const oxanium = Oxanium({
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextDocs26",
  description: "Redoing NextDocs26 with Next.js 16 and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
