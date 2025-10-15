
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Info from "./components/Info";
import DevExperience from "./components/DevExperience";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function App() {
  return (
    <div className="scroll-smooth overflow-x-hidden bg-[#f5f3ed]">
      
      <Header/>

      <HeroSection fadeUp={fadeUp} staggerContainer={staggerContainer}/>

      <About fadeUp={fadeUp} scaleIn={scaleIn}  />

      <Info fadeUp={fadeUp} staggerContainer={staggerContainer} />

      <DevExperience  fadeUp={fadeUp} staggerContainer={staggerContainer} />

      <TechStack fadeUp={fadeUp} staggerContainer={staggerContainer} scaleIn={scaleIn} />

      
      <Contact fadeUp={fadeUp} />

      
      <Footer/>
    </div>
  );
}
