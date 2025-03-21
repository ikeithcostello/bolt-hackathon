import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Award } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export function HeroSection({ 
  title = "Guinness World Records\nLargest Hackathon",
  subtitle = "Join millions of developers competing to build innovative solutions and make history in the world's largest hackathon."
}: HeroSectionProps) {
  const navigate = useNavigate();
  
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
      <nav className="absolute top-0 left-0 right-0 z-10 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Award className="w-8 h-8 text-accent-blue mr-2" />
            <span className="text-xl font-bold">GWR Hackathon</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#features" className="px-3 py-2 text-gray-300 hover:text-white">Features</a>
            <a href="#sponsors" className="px-3 py-2 text-gray-300 hover:text-white">Sponsors</a>
            <a href="#judges" className="px-3 py-2 text-gray-300 hover:text-white">Judges</a>
            <a href="#faq" className="px-3 py-2 text-gray-300 hover:text-white">FAQ</a>
          </div>
          <div>
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
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-background-primary/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/10 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {i === 1 ? <span className="text-accent-blue">{line}</span> : line}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="text-base"
                onClick={() => navigate('/register')}
              >
                Register Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base bg-background-primary/50 hover:bg-background-primary/70"
                onClick={() => navigate('/judge/apply')}
              >
                Become a Judge
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
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