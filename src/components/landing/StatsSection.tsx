import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats?: Stat[];
}

export function StatsSection({ 
  stats = [
    { value: '200K+', label: 'Submissions' },
    { value: '$1M+', label: 'Prize Pool' },
    { value: '90+', label: 'Countries' },
    { value: '1250', label: 'Judges' }
  ]
}: StatsSectionProps) {
  return (
    <div className="bg-gradient-to-b from-background-primary to-background-secondary pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 