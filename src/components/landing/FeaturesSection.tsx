import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BarChart2, Code } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

export function FeaturesSection({
  title = "Why Participate?",
  subtitle = "Gain recognition, win prizes, and connect with tech leaders through our globally recognized hackathon.",
  features = [
    {
      icon: <Users className="h-6 w-6 text-accent-blue" />,
      title: "Join the World's Largest Hackathon",
      description: 'Be part of history in the making with the Guinness World Records largest hackathon ever organized.'
    },
    {
      icon: <Award className="h-6 w-6 text-accent-green" />,
      title: 'Win Prestigious Awards',
      description: 'Compete for recognition in multiple categories with substantial cash prizes and career opportunities.'
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-accent-purple" />,
      title: 'Get Expert Feedback',
      description: 'Receive evaluation and insights from industry-leading judges and technology experts.'
    },
    {
      icon: <Code className="h-6 w-6 text-accent-orange" />,
      title: 'Showcase Your Skills',
      description: 'Demonstrate your technical abilities, creativity, and problem-solving on a global stage.'
    }
  ]
}: FeaturesSectionProps) {
  return (
    <div id="features" className="py-20">
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="bg-background-secondary p-6 rounded-lg"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-gray-800 rounded-lg">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 