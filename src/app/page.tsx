import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog"
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";
  import Statistics  from "@/components/Statistics";
import Hobbies from "@/components/Hobbies";


export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Statistics /> 
      <Skills />
      <Portfolio />
      <Blog />
      <Experience />
      <Testimonials />
       <Hobbies /> 
      <Contact />
     <Resume />
      <Footer />
    </>
  );
}
