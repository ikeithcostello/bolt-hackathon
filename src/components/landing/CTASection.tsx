import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Zap, Code, ChevronRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CTASection({
  title = "Ready to Make History?",
  description = "Join thousands of innovators in the world's largest coding event. Showcase your skills, collaborate globally, and compete for $1M in prizes.",
  buttonText = "Register Now",
  buttonLink = "/register"
}: CTASectionProps) {
  const navigate = useNavigate();
  
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-r from-[#3B82F6] via-[#3F72E5] to-[#4361D5]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-20 w-6 h-6 bg-blue-300/40 rounded-full blur-sm"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-32 right-40 w-4 h-4 bg-blue-200/30 rounded-full blur-sm"
        ></motion.div>
        
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.5 }}
          transition={{ duration: 0.8 }}
          className="absolute -left-10 top-1/2 transform -translate-y-1/2"
        >
          <Code className="text-white/10" size={180} />
        </motion.div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.5 }}
          transition={{ duration: 0.8 }}
          className="absolute -right-10 top-1/2 transform -translate-y-1/2"
        >
          <Zap className="text-white/10" size={180} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600/30 backdrop-blur-sm p-10 rounded-2xl border border-white/10 shadow-2xl"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block relative">
              <span className="absolute -inset-1 -skew-y-3 bg-white opacity-20 rounded-lg blur-sm"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-cyan-100 drop-shadow-lg">
                {title}
              </span>
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute -right-4 -top-4 text-cyan-200"
            >
              <Zap size={24} className="drop-shadow-glow" />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-accent-blue hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 h-auto font-bold inline-flex items-center"
              onClick={() => navigate(buttonLink)}
            >
              <span className="flex items-center">
                {buttonText} <ChevronRight className="ml-2" size={18} />
              </span>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 text-white/70 text-sm"
          >
            Join over 10,000 developers already registered
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 