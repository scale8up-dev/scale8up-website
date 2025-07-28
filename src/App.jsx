import "./index.css";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";
import BusinessSection from "./components/BusinessSection";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
    const [activeSection, setActiveSection] = useState("");
   useEffect(() => {

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <>
      <div className="font-manrope scroll-smooth">
        <Header activeSection={activeSection}/>
        <HeroSection />
        <About />
        <Services />
        <ChooseUs />
        <BusinessSection/>
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default App;
