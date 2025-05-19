import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gerador Pix",
  description: "Gere e compartilhe seus dados Pix com facilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-center" />
        <GoogleAnalytics gaId="G-526V01ZH2W" />
      </body>
    </html>
  );
}
