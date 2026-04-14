import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { IconBase } from "react-icons";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SADC Traffic API",
  icons: {
    icon: "/road.png",
  },
  description:
    "API de sinais de trânsito da SADC. Dados estruturados, rápidos e fáceis de integrar em projetos web e mobile.",
  keywords: [
    "SADC",
    "API trânsito",
    "sinais de trânsito",
    "road signs API",
    "Angola dev",
    "Angola API",
    "sinalização rodoviária",
    "dados de trânsito",
    "sinais de trânsito Angola",
    "sinais de trânsito SADC",
    "API de sinalização",
    "dados de tráfego",
    "sinais de trânsito África",

  ],

  authors: [{ name: "Rui Gomes" }],
  openGraph: {
    title: "SADC Traffic API",
    description: "API moderna de sinais de trânsito",
    url: "https://sadc-traffic-api.vercel.app/",
    siteName: "SADC Traffic API",
    type: "website",
      images: [
        {
          url: "/projecto.png",
          width: 1200,
          height: 630,
        }
      ]


  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}