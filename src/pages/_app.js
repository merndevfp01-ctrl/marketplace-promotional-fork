import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import "./style.css"
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [scrollFns, setScrollFns] = useState({});
  return (
    <main>
      {/* <Navbar/> */}
      <Navbar scrollFns={scrollFns} />
      <Component {...pageProps} setScrollFunction={setScrollFns} />
      <Footer/>
    </main>
  )
}
