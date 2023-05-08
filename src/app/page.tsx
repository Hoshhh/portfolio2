import About from "@/components/About";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Projects />
    </div>
  );
}
