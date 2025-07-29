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
        // Get all currently intersecting sections
        const intersectingSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (intersectingSections.length > 0) {
          // Use the section with the highest intersection ratio
          setActiveSection(intersectingSections[0].target.id);
        }
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-50px 0px -50px 0px" // Adds some margin to make detection more accurate
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Alternative: Scroll-based detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    // Use scroll event as backup
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    handleScroll();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
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
        <Footer activeSection={activeSection}/>
      </div>
    </>
  );
}

export default App;