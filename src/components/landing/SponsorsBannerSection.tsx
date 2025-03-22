import React, { useEffect, useState } from 'react';
import { 
  STACKBLITZ,
  BOLT,
  PADDLE,
  CLOUDFLARE,
  NETLIFY,
  SUPABASE
} from '../../assets/images';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
}

interface SponsorsBannerSectionProps {
  sponsors?: Sponsor[];
}

export function SponsorsBannerSection({
  sponsors = [
    {
      id: '1',
      name: 'StackBlitz',
      logo: STACKBLITZ,
      website: 'https://stackblitz.com'
    },
    {
      id: '2',
      name: 'Bolt.new',
      logo: BOLT,
      website: 'https://bolt.new'
    },
    {
      id: '3',
      name: 'Supabase',
      logo: SUPABASE,
      website: 'https://supabase.com'
    },
    {
      id: '4',
      name: 'Netlify',
      logo: NETLIFY,
      website: 'https://netlify.com'
    },
    {
      id: '5',
      name: 'Cloudflare',
      logo: CLOUDFLARE,
      website: 'https://cloudflare.com'
    },
    {
      id: '6',
      name: 'Paddle',
      logo: PADDLE,
      website: 'https://paddle.com'
    }
  ]
}: SponsorsBannerSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev - 1) % 2000);
    }, 20);
    
    return () => clearInterval(interval);
  }, []);
  
  // Create two sets of sponsors for infinite scroll effect
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];
  
  return (
    <div className="py-2 bg-gray-900/80 overflow-hidden border-t border-b border-gray-800">
      <div className="relative">
        <div className="overflow-hidden whitespace-nowrap">
          <div 
            className="inline-flex transition-transform duration-500 ease-linear"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <a 
                key={`${sponsor.id}-${index}`}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mx-6 group"
              >
                <div className="h-8 w-8 mr-2 flex-shrink-0">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                  {sponsor.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 