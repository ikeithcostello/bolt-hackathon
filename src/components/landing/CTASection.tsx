import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  title = "Ready to Make History?",
  description = "Join millions of innovators in the Guinness World Records largest hackathon and showcase your skills on a global stage.",
  buttonText = "Register Now",
  buttonLink = "/register"
}: CTASectionProps) {
  const navigate = useNavigate();
  
  return (
    <div className="py-20 bg-gradient-to-r from-accent-blue to-accent-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-accent-blue hover:bg-gray-100"
            onClick={() => navigate(buttonLink)}
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
} 