/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <div className="bg-sky-700">
      <div className="px-3 py-3 mx-auto max-w-8xl sm:px-6 lg:px-20">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center flex-1 w-0">
            <span className="flex p-2 bg-red-500 rounded-lg">
              <SpeakerphoneIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 text-lg font-bold text-white truncate ">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">Big news! We are excited to announce a brand new Deckhands NFT series!</span>
            </p>
          </div>
          <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://crypto.com/nft/profile/kevthefisherman?tab=collectibles"
              className="flex items-center justify-center px-4 py-2 font-extrabold text-white border border-transparent rounded-md shadow-sm text-md bg-sky-500 hover:bg-sky-400"
            >
              Buy Now!
            </a>
          </div>
          <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="flex p-2 -mr-1 rounded-md hover:bg-red-500 focus:outline-none focus:ring-red sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}