import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

interface SponsorCarouselProps {
  sponsors: Sponsor[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function SponsorCarousel({ 
  sponsors, 
  autoPlay = true, 
  interval = 3000,
  className 
}: SponsorCarouselProps) {
  const [currentSponsor, setCurrentSponsor] = useState(0);
  
  // Auto-rotate sponsors
  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSponsor((prev) => (prev + 1) % sponsors.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [sponsors.length, autoPlay, interval]);

  return (
    <div className={`relative ${className}`}>
      <div className="relative h-40 md:h-56 bg-gray-800 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background-secondary/80 via-transparent to-background-secondary/80 z-10"></div>
        
        <div className="relative h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSponsor}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={sponsors[currentSponsor].logo} 
                  alt={sponsors[currentSponsor].name} 
                  className="h-20 md:h-28 w-auto object-contain" 
                />
              </div>
              <div className="text-2xl font-bold text-white">{sponsors[currentSponsor].name}</div>
              <div className="text-accent-blue uppercase text-sm tracking-wider">
                {sponsors[currentSponsor].tier} sponsor
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Indicator dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {sponsors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSponsor(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSponsor ? 'bg-accent-blue' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}