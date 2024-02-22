"use client";
// import Analysis from "@/components/Analysis/Analysis";
import Blog from "@/components/Blog/Blog";
import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/Product/Product";
import SlideShow from "@/components/SlideShow/SlideShow";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Home() {
  const {token} = useSelector((state:RootState)=>state.authn)
  console.log(token);
  return (
    <main>
      <Navbar />
      <SlideShow />
      <Category />
      <Blog/>
      {/* <Analysis /> */}
      <Product />
      <Gallery />
      <Footer />
    </main>
  );
}
