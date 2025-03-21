import React from 'react';
import { motion } from 'framer-motion';
import { SponsorCarousel } from '../SponsorCarousel';

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

interface SponsorsSectionProps {
  title?: string;
  subtitle?: string;
  sponsors?: Sponsor[];
}

export function SponsorsSection({
  title = "Our Sponsors",
  subtitle = "Backed by industry leaders committed to fostering innovation and technical excellence.",
  sponsors = [
    {
      id: '1',
      name: 'StackBlitz',
      logo: 'https://c.staticblitz.com/assets/icons/icon-512x512-96c0e896895ca08a4df4f204da2759d7af2a35bd2faecf9e8f23fb40e67c133c.png',
      tier: 'platinum'
    },
    {
      id: '2',
      name: 'Bolt.new',
      logo: 'https://assets-global.website-files.com/645262e0efd538b4638f64ba/6487e3ecb88d20fe93e6fd73_bolt-logo-icon.svg',
      tier: 'platinum'
    },
    {
      id: '3',
      name: 'Acme Corp',
      logo: 'https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=256&h=256&auto=format&fit=crop',
      tier: 'gold'
    },
    {
      id: '4',
      name: 'TechStart',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=256&h=256&auto=format&fit=crop',
      tier: 'gold'
    },
    {
      id: '5',
      name: 'Future Labs',
      logo: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=256&h=256&auto=format&fit=crop',
      tier: 'silver'
    }
  ]
}: SponsorsSectionProps) {
  return (
    <div id="sponsors" className="py-20 bg-background-secondary">
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
        
        {/* Sponsor Carousel */}
        <div className="mb-16">
          <SponsorCarousel sponsors={sponsors} />
        </div>
        
        {/* Sponsor Tiers */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-accent-blue">Platinum Sponsors</h3>
            <div className="grid grid-cols-2 gap-4">
              {sponsors.filter(s => s.tier === 'platinum').map(sponsor => (
                <div key={sponsor.id} className="flex flex-col items-center">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-16 w-16 object-contain mb-2" 
                  />
                  <span className="text-sm text-center">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-accent-green">Gold Sponsors</h3>
            <div className="grid grid-cols-2 gap-4">
              {sponsors.filter(s => s.tier === 'gold').map(sponsor => (
                <div key={sponsor.id} className="flex flex-col items-center">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-16 w-16 object-contain mb-2" 
                  />
                  <span className="text-sm text-center">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-400">Silver Sponsors</h3>
            <div className="grid grid-cols-2 gap-4">
              {sponsors.filter(s => s.tier === 'silver').map(sponsor => (
                <div key={sponsor.id} className="flex flex-col items-center">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="h-16 w-16 object-contain mb-2" 
                  />
                  <span className="text-sm text-center">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 