import EF1 from './beach-clean-up-tips-ideas-facebook-1200x630.png';
import EF2 from './wldpsa1_000003422724_2400.jpg';
import EF3 from './FB_IMG_1645310678097.jpg';
import Image from "next/image";


  
  export default function Example() {
    return (
      <div className="bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">Our Global Efforts</h2>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  <div className="relative w-5/6 overflow-hidden bg-white rounded-lg h-1/6 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                 <div>
                <Image 
                src={EF2}
                className="object-cover object-center lg:w-full lg:h-full"
                layout="fill"
                />
                 
                </div>
                
             </div>
                <div className="relative w-5/6 overflow-hidden bg-white rounded-lg h-1/6 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <div>
                <Image 
                src={EF1}
                className="object-cover object-center lg:w-full lg:h-full"
                layout="fill"
                />
                </div>
            </div>
            <div className="relative w-5/6 overflow-hidden bg-white rounded-lg h-1/6 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <div>
                <Image 
                src={EF3}
                className="object-cover object-center lg:w-full lg:h-full"
                layout="fill"
                />
                </div>       
            </div>
            </div>
            
          </div>
          
        </div>
      </div>
     
    )
  }

