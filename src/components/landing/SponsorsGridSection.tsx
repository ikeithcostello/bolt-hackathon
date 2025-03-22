import React from 'react';
import { motion } from 'framer-motion';
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
  tier: 'organizer' | 'platinum' | 'gold' | 'silver';
  website: string;
}

interface SponsorsGridSectionProps {
  title?: string;
  subtitle?: string;
  sponsors?: Sponsor[];
}

export function SponsorsGridSection({
  title = "Sponsors & Partners",
  subtitle = "The Bolt.new Hackathon is organized by StackBlitz and supported by leading technology companies.",
  sponsors = [
    {
      id: '1',
      name: 'StackBlitz',
      logo: STACKBLITZ,
      tier: 'organizer',
      website: 'https://stackblitz.com'
    },
    {
      id: '2',
      name: 'Bolt.new',
      logo: BOLT,
      tier: 'organizer',
      website: 'https://bolt.new'
    },
    {
      id: '3',
      name: 'Supabase',
      logo: SUPABASE,
      tier: 'gold',
      website: 'https://supabase.com'
    },
    {
      id: '4',
      name: 'Netlify',
      logo: NETLIFY,
      tier: 'gold',
      website: 'https://netlify.com'
    },
    {
      id: '9',
      name: 'StackBlitz',
      logo: STACKBLITZ,
      tier: 'gold',
      website: 'https://stackblitz.com'
    },
    {
      id: '5',
      name: 'Cloudflare',
      logo: CLOUDFLARE,
      tier: 'silver',
      website: 'https://cloudflare.com'
    },
    {
      id: '6',
      name: 'Paddle',
      logo: PADDLE,
      tier: 'silver',
      website: 'https://paddle.com'
    },

    {
      id: '7',
      name: 'StackBlitz',
      logo: STACKBLITZ,
      tier: 'silver',
      website: 'https://stackblitz.com'
    },
    {
      id: '8',
      name: 'Bolt.new',
      logo: BOLT,
      tier: 'silver',
      website: 'https://bolt.new'
    },
  ]
}: SponsorsGridSectionProps) {
  
  // Group sponsors by tier
  const organizers = sponsors.filter(s => s.tier === 'organizer');
  const platinumSponsors = sponsors.filter(s => s.tier === 'platinum');
  const goldSponsors = sponsors.filter(s => s.tier === 'gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');
  
  return (
    <div id="sponsors" className="py-20 bg-gradient-to-b from-background-secondary to-[#252A34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        {/* Organizers (Biggest) */}
        {organizers.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center text-[#43AFFF]">Organized By</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              {organizers.map((sponsor, index) => (
                <motion.a
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="bg-gray-800 p-8 rounded-lg w-full max-w-md flex flex-col items-center justify-center hover:bg-gray-700 transition-colors duration-300 border border-[#43AFFF]/20 hover:border-[#43AFFF]/40"
                >
                  <div className="h-32 flex items-center justify-center mb-6">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <span className="text-xl font-medium text-white">{sponsor.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        )}
        
        {/* Platinum Sponsors (Big) */}
        {platinumSponsors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center text-accent-blue">Platinum Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              {platinumSponsors.map((sponsor, index) => (
                <motion.a
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="bg-gray-800 p-8 rounded-lg w-full max-w-md flex flex-col items-center justify-center hover:bg-gray-700 transition-colors duration-300 border border-white/5"
                >
                  <div className="h-32 flex items-center justify-center mb-6">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <span className="text-xl font-medium text-white">{sponsor.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        )}
        
        {/* Gold Sponsors (Medium) */}
        {goldSponsors.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-center text-accent-green">Gold Sponsors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {goldSponsors.map((sponsor, index) => (
                <motion.a
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg w-full max-w-sm flex flex-col items-center justify-center hover:bg-gray-700 transition-colors duration-300 border border-white/5"
                >
                  <div className="h-24 flex items-center justify-center mb-4">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <span className="text-lg font-medium text-white">{sponsor.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        )}
        
        {/* Silver Sponsors (Smaller) */}
        {silverSponsors.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center text-gray-400">Silver Sponsors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {silverSponsors.map((sponsor, index) => (
                <motion.a
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="bg-gray-800 p-4 rounded-lg w-full max-w-xs flex flex-col items-center justify-center hover:bg-gray-700 transition-colors duration-300 border border-white/5"
                >
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <span className="text-sm font-medium text-white">{sponsor.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 