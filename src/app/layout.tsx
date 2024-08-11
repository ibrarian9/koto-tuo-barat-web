import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "/logo-13-koto-kampar.png",
  title: "Desa Koto Tuo Barat"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/logo-13-koto-kampar.png" />
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
  );
}
