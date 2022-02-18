import Header from './Components/Header';
import Hero from './Components/Hero';
import Feature from './Components/Feature';
import CTA from './Components/CTA';
import Banner from './Components/Banner';
import Previews from './Components/Previews';

export default function Home() {
  return (    
    <div>
      <Banner />
      <Hero />
      <Feature />
      <Previews />
      <CTA />
      
    </div>
  );
}