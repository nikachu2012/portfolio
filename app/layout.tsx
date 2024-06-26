import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "nikachu2012's portfolio",
    template: "%s - nikachu2012's portfolio"
  },

  description: "プログラミングが生きがいな高専生nikachuのポートフォリオです。",
  formatDetection: {
    address: false,
    telephone: false
  },

  metadataBase: new URL('https://portfolio.nikachu.net/'),
  openGraph: {
    title: "nikachu2012's portfolio",
    description: "プログラミングが生きがいな高専生nikachuのポートフォリオです。",
    url: 'https://portfolio.nikachu.net/',
    siteName: "nikachu2012's portfolio",
    images: 'ogp.png',
  },

  creator: "nikachu2012"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
