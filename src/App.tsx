import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Steps from "./components/Steps";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import GradientOrbs from "./components/GradientOrbs";

function App() {
  return (
    <div className="relative min-h-screen bg-modrinth-dark text-white overflow-x-hidden selection:bg-modrinth-green selection:text-modrinth-dark">
      <GradientOrbs />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Steps />
        <TechStack />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;

