import RM from './pngwing.com (2).png';
import Image from "next/image";


export default function Example() {
  return (

    <div className="py-12 bg-custombg">
      <div className="px-4 max-w-8xl sm:px-6 lg:ml-20 lg:px-16">
        <div className="lg:text-left">

            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
            Roadmap
          </p>
          <div className="flex items-center justify-between">
          <h1 className="max-w-2xl mt-4 mb-10 text-xl font-medium text-white lg:text-left">
          Big Dirty 2 NFT Project, is an Ocean clean up effort in NFT form with Crypto Prizes. There will be 10,000 unique Deckhands in sets of 10, for a total of 100,000 available.

        Additionally we will be having crypto draws from 2,500-50,000$ along the way, letting one lucky deckhand walk away with 50,000$ in Crypto.com CRO

        We pledge to remove a pound of garbage per dollar spent on Deckhands from the oceans and waterways of Cape Breton, Nova Scotia with a total goal of 1,000,000lb of trash!
        Our site and twitter feed will be updated weekly until the project is complete and we send our lucky supporters the final cash prize.

        Donations made on our site will be used to buy Deckhands, if any of those win a draw we will redraw until a Deckhand is selected thats not affiliated with our team or site.
          </h1>
          <div className="invisible pr-16 lg:visible">
          <Image 
                    src={RM}
                    className=""
                    layout="fixed"
                    height="300"
                    
                    />
    
                   </div>
          </div>
          
        </div>


      </div>
    </div>
  )
}