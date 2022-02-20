
import Banner from './Components/Banner';
import Hero from './Components/Hero';
import Promo from './Components/Promo';
import Feature from './Components/Feature';
import CTA from './Components/CTA';
// import Header from './Components/Header';
import Previews from './Components/Previews';
import Products from './Components/Products';

export default function Home() {
  return (    
    <div>
      <Banner />
      <Hero />
     <Feature />
      <Previews />
      <Products />
      
       
       <CTA /> 

    </div>
  );
}