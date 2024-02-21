import Analysis from "@/components/Analysis/Analysis";
import Blog from "@/components/Blog/Blog";
import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/Product/Product";
import SlideShow from "@/components/SlideShow/SlideShow";

export default function Home() {
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
