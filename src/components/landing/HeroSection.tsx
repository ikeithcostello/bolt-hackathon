import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, Calendar, MapPin, Globe, Menu, X, Award } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export function HeroSection({ 
  title = "The World's Largest Hackathon",
  subtitle = "Join developers worldwide in building innovative solutions to compete for our $1M prize pool. Be part of history with the world's largest coding event."
}: HeroSectionProps) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Set document title
  useEffect(() => {
    document.title = "The World's Largest Hackathon";
  }, []);
  
  // Handle mobile menu item click - close menu when a menu item is clicked
  const handleMenuItemClick = (href: string) => {
    setMobileMenuOpen(false);
    // Small delay to allow the menu to close before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };
  
  // Handle escape key press to close mobile menu
  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    window.addEventListener('keydown', handleEscKeyPress);
    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop)', 
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary/95 via-background-primary/85 to-background-primary"></div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-30 py-4 px-4 sm:py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center z-20">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#43AFFF] mr-2" />
            <span className="text-lg sm:text-xl font-bold">The World's Largest Hackathon</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <a href="#features" className="px-3 py-2 text-gray-300 hover:text-white">Features</a>
            <a href="#sponsors" className="px-3 py-2 text-gray-300 hover:text-white">Sponsors</a>
            <a href="#prizes" className="px-3 py-2 text-gray-300 hover:text-white flex items-center">
              <Award className="w-4 h-4 mr-1" />
              Prizes
            </a>
            <a href="#judges" className="px-3 py-2 text-gray-300 hover:text-white">Judges</a>
            <a href="#faq" className="px-3 py-2 text-gray-300 hover:text-white">FAQ</a>
          </div>
          
          {/* Desktop Buttons */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              className="mr-2"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
            <Button 
              onClick={() => navigate('/register')}
            >
              Sign Up
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Full screen backdrop */}
            <div 
              className="fixed inset-0 bg-background-primary/95 z-40"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 bg-background-primary z-40 pt-20 pb-6 px-4 sm:px-6 border-b border-gray-800 h-auto"
            >
              <div className="flex flex-col space-y-4 max-w-7xl mx-auto">
                <a 
                  href="#features" 
                  className="px-1 py-3 text-gray-300 hover:text-white border-b border-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick('#features');
                  }}
                >
                  Features
                </a>
                <a 
                  href="#sponsors" 
                  className="px-1 py-3 text-gray-300 hover:text-white border-b border-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick('#sponsors');
                  }}
                >
                  Sponsors
                </a>
                <a 
                  href="#prizes" 
                  className="px-1 py-3 text-gray-300 hover:text-white border-b border-gray-800 flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick('#prizes');
                  }}
                >
                  <Award className="w-4 h-4 mr-2" />
                  Prizes
                </a>
                <a 
                  href="#judges" 
                  className="px-1 py-3 text-gray-300 hover:text-white border-b border-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick('#judges');
                  }}
                >
                  Judges
                </a>
                <a 
                  href="#faq" 
                  className="px-1 py-3 text-gray-300 hover:text-white border-b border-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick('#faq');
                  }}
                >
                  FAQ
                </a>
                
                <div className="flex flex-col space-y-3 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate('/login');
                    }}
                    className="w-full"
                  >
                    Log In
                  </Button>
                  <Button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate('/register');
                    }}
                    className="w-full"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-background-primary/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl w-full sm:w-auto">
            {/* Refined Prize money callout */}
            <div className="mb-6">
              <motion.div 
                initial={{ opacity: 0.8, scale: 1 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ 
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="inline-flex items-center px-5 py-3 rounded-lg bg-background-secondary/80 border border-[#43AFFF]/50 shadow-[0_0_25px_rgba(67,175,255,0.3)] text-lg"
              >
                <Award className="text-[#43AFFF] w-6 h-6 mr-3" />
                <span className="text-[#43AFFF] font-bold mr-1.5 text-xl">$1,000,000+</span>
                <span className="text-gray-300 text-lg">Prize Pool</span>
              </motion.div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto">
              {subtitle}
            </p>
            
            {/* Hackathon details */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#43AFFF]" />
                <span>Date: TBD</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#43AFFF]" />
                <span>Location: Virtual</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#43AFFF]" />
                <a href="http://hackathon.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#43AFFF] transition-colors">
                  hackathon.dev
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="text-base bg-[#43AFFF] hover:bg-[#3a9ee6] w-full sm:w-auto"
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base bg-background-primary/50 hover:bg-background-primary/70 w-full sm:w-auto"
                onClick={() => navigate('/judge/apply')}
              >
                Become a Judge
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            className="text-background-secondary"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
} 