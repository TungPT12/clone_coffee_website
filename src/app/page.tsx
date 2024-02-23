"use client";
import Blog from "@/components/Blog/Blog";
import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Navbar from "@/components/Navbar/Navbar";
import Product from "@/components/Product/Product";
import SlideShow from "@/components/SlideShow/SlideShow";
import { getToken } from "@/utils/cookie";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Home() {
  // document.cookie =
  //   "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMyIsInN1YiI6IjY1ZDgxZTFjM2IxNTRiZTUzZGJmMDBiYyIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcwODY2MjMyMCwiZXhwIjoxNzA4NzQ4NzIwfQ.eFCsIvIlmqL_uDlk46lmZu1tlWI8Om1PnOEixKn1RAA";
  // const cookie = document.cookie;
  // const cookies = cookie.split(";");
  // console.log(cookies);
  // const objCookie = {};
  // cookies.map((item) => {
  //   const items = item.split("=");
  //   // console.log(items);
  //   objCookie[items[0]] = items[1];
  // });
  // console.log(objCookie);
  // // document.cookie = "sgarden=token";
  // // console.log(object)
  // // console.log(cookie);
  // const { token } = useSelector((state: RootState) => state.authn);
  // console.log(token);
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
