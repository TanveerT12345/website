// components
import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import ExecutiveBoard from "./executive_board";
import Class_2025 from "./gen_body_2025";
import Class_2026 from "./gen_body_2026";
import Class_2027 from "./gen_body_2027";
import Alumni from "./past_alumni";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExecutiveBoard />
      <Class_2025 />
      <Class_2026 />
      <Class_2027 />
      <Alumni />
      <Footer />
    </>
  );
}