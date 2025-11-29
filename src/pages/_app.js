import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import "./style.css"
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      {/* <Navbar/> */}
      <Component {...pageProps} />
      <Footer/>
    </main>
  )
}
