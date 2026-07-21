import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import TechnologyStack from "./components/sections/TechnologyStack";
import Process from "./components/sections/Process";
import WhyChoose from "./components/sections/WhyChoose";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Dock from "./components/dock/Dock";
import AADAvisLauncher from "./components/aadavis/AADAvisLauncher";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <Portfolio />

      <TechnologyStack />

      <Process />

      <WhyChoose />

      <Contact />

      <Footer />

      <Dock />

      <AADAvisLauncher />
    </>
  );
}

export default App;