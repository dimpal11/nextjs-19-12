import Navbar from "@/components/Navbar";
import About from "@/components/Home";
import Features from "@/components/Features";
import Modules from "@/components/Modules";
import AboutUs from "@/components/AboutUs";
// import AboutUs from "@/components/About";
import Swiper from "@/components/SwiperComponent";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto lg:pt-[50px]">
        <About />
      </div>
      <Features />
      <Modules />
      <AboutUs/>
      {/* <AboutUs/> */}
      <Contact />
      <Swiper />

      {/* <h1>hello</h1> */}
    </div>
  );
}
