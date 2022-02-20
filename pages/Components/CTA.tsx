/* This example requires Tailwind CSS v2.0+ */

import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Icon } from '@iconify/react';
import discordIcon from '@iconify/icons-mdi/discord';

export default function Example() {
    return (
      <div className="bg-gray-50">
        <div className="px-4 py-2 mx-auto max-w-8xl sm:px-6 lg:py-4 lg:px-12 lg:flex lg:items-center lg:justify-between">
          <h2 className="font-medium tracking-tight text-gray-900 text-md ">
            <span className="block text-lg font-bold 1xl">Donation Addresses:</span>
            <span className="block text-sm ">BTC: xxxxxxxxxxxxxxxxxxxxx</span>
            <span className="block text-sm ">CRO: xxxxxxxxxxxxxxxxxxxxx</span>
            <span className="block text-sm ">XMR: xxxxxxxxxxxxxxxxxxxxx</span>
            <span className="block text-sm ">ATOM: xxxxxxxxxxxxxxxxxxxxx</span>
          </h2>
          <div className="flex gap-2 mt-8 lg:mt-0 ">
            <div className="inline-flex " >
            <TwitterIcon 
            	fontSize= "large"

            />
            <RedditIcon    
                fontSize= "large"
            
            />
            <FacebookIcon 
                fontSize= "large"
            
            />
            <InstagramIcon 
                fontSize= "large"
            />
            <TelegramIcon 
                fontSize= "large"
            />
            <YouTubeIcon 
                fontSize= "large"
            />
            <Icon 
                icon={discordIcon} 
                width="36" 
                height="36"
            />
            
            </div>

          </div>
          <h1 className="font-medium ">Email: Kevin_gale101@hotmail.com</h1>
        </div>
      </div>
    )
  }