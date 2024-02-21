"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Providers from "@/lib/StoreProvider";
const isAdmin = true;

// export const metadata: Metadata = {
//   title: "COFFEE SGARDEN",
//   description: "WEB APP",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers>{isAdmin ? admin : user}</Providers> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
