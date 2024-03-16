"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Providers from "@/lib/StoreProvider";
import { CartProvider } from "@/components/Context/CartContext";

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
        <div
          id="root_root"
          style={{
            zIndex: 1000,
          }}
        ></div>
        <CartProvider>
          <Providers>{children}</Providers>
        </CartProvider>
      </body>
    </html>
  );
}
