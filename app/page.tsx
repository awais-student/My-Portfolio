import Image from "next/image";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import About from "@/app/About/page";
import Myprojects from "@/app/Projects/page";
import Contact from "@/app/Contact/page";


export default function Home() {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Myprojects />
      <Contact />
      {/* <Footer /> */}

    </div>
  );
}
