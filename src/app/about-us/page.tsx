import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import About from "./about";
import Pillars from "./pillars";
import Testimonials from "./testimonials";
import Companies from "./companies";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Pillars/>
      <Testimonials />
      <Companies />
      <Footer />
    </>
  );
}