// layout.tsx
import Header from "@/components/layout/header/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientCursor from "@/components/features/cursor";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Website",
  description: "Description of your website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          data-darkreader-mode="active"
          suppressHydrationWarning
        >{``}</style>
      </head>
      <body className={inter.className} suppressHydrationWarning>
          <ClientCursor>
            <div className="w-full">
              <Header />
              {children}
            </div>
          </ClientCursor>
          <div suppressHydrationWarning id="cz-shortcut-listen" />
      </body>
    </html>
  );
}
