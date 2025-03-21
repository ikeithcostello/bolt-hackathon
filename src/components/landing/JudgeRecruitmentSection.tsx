import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface BenefitItem {
  text: string;
}

interface JudgeRecruitmentSectionProps {
  title?: string;
  description?: string;
  benefits?: BenefitItem[];
  buttonText?: string;
  imageSrc?: string;
}

export function JudgeRecruitmentSection({
  title = "Become a Judge",
  description = "Join our distinguished panel of judges and help identify the next generation of tech innovators.",
  benefits = [
    { text: "Evaluate cutting-edge projects from global participants" },
    { text: "Network with industry leaders and technology experts" },
    { text: "Influence the direction of emerging technologies" },
    { text: "Flexible time commitment with our advanced evaluation platform" }
  ],
  buttonText = "Apply to be a Judge",
  imageSrc = "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop"
}: JudgeRecruitmentSectionProps) {
  const navigate = useNavigate();
  
  return (
    <div id="judges" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-gray-300 mb-6">
              {description}
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-accent-green mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
            <Button 
              rightIcon={<ChevronRight size={16} />}
              onClick={() => navigate('/judge/apply')}
            >
              {buttonText}
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-20 rounded-xl"></div>
            <img 
              src={imageSrc} 
              alt="Judges evaluating projects" 
              className="rounded-xl shadow-lg object-cover h-96 w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 