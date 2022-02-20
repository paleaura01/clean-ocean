import IM1 from './198030912_2249794015156868_1377223952098544743_n-2.jpg';
import IM2 from './201588236_2251508324985437_678393345566770122_n.jpg';
import Image from "next/image";
  
  export default function Example() {
    return (
      <div className="flex items-center bg-gray-50">
                  <div className="z-0">
                <Image 
                src={IM2}
                className="flex invisible md:visible opacity-20 lg:w-full lg:h-full"
                layout="fixed"
                height="820"
                width="600"
                />
                </div>
        <div className="absolute grid items-center max-w-2xl grid-cols-1 px-4 py-24 lg:ml-24 z-5 gap-y-16 gap-x-20 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-20 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kevin Gale</h2>
            <p className="mt-4 text-xl font-medium text-gray-900">I’m a Fishermen from Nova Scotia and a family man, who is concerned about the impact we are making on our Ocean’s sustainability and the preservation of the wildlife that
            inhabit it.
            I’m 30 years old just living another day in the life in the east coast of Cape Breton, Glace Bay, Nova Scotia!
            Today I am reaching out for your support so together we can make sure Canada’s Ocean Playground, will stay just that. For our future and all future generations to come!
            
            </p>
  

          </div>
          <div className="">
          <div>
                <Image 
                src={IM1}
                className="invisible object-cover object-center rounded md:visible "
                layout="fixed"
                height="620"
                width="900"
                />
                </div>

          </div>

        </div>
      </div>
    )
  }