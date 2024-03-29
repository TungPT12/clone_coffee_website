"use client";

const Blog = dynamic(() => import("../components/Blog/Blog"), {
  ssr: false,
});

const Navbar = dynamic(() => import("../components/Navbar/Navbar"), {
  ssr: false,
});
const Category = dynamic(() => import("../components/Category/Category"), {
  ssr: false,
});
const Product = dynamic(() => import("../components/Product/Product"), {
  ssr: false,
});
const SlideShow = dynamic(() => import("../components/SlideShow/SlideShow"), {
  ssr: false,
});
const Gallery = dynamic(() => import("../components/Gallery/Gallery"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer/Footer"), {
  ssr: false,
});

import { RootState } from "@/lib/store";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

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
