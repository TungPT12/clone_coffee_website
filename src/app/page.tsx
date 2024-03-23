"use client";
import Blog from "@/components/Blog/Blog";
import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/Product/Product";
import SlideShow from "@/components/SlideShow/SlideShow";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import BillCart from "@/components/BillCart/BillCart";
import { useState } from "react";

export default function Home() {
  const { token } = useSelector((state: RootState) => state.authn);
  return (
    <main>
      <Navbar />
      <SlideShow />
      <Category />
      <Blog />
      <Product />
      <Gallery />
      <Footer />
    </main>
  );
}
