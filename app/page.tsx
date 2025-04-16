
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import TractionSection from './components/sections/TractionSection';
import CTASection from './components/sections/CTASection';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import dynamic from 'next/dynamic';


export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TractionSection/>
      <CTASection/>
      <Footer/>
      {/* You can add other sections here as you build them */}
    </main>
  );
}
