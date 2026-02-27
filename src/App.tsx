import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Logos } from './components/sections/Logos';
import { Features } from './components/sections/Features';
import { Stats } from './components/sections/Stats';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { CallToAction } from './components/sections/CallToAction';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
