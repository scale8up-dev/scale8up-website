import "./index.css";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";

function App() {
  return (
    <>
      <div className="font-manrope">
        <Header />
        <HeroSection />
        <About />
        <Services />
        <ChooseUs />
      </div>
    </>
  );
}

export default App;
