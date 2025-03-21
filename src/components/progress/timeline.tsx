import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TimelineStep {
  id: string;
  title: string;
  completed: boolean;
  current: boolean;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center z-10',
                  step.completed ? 'bg-accent-green' : step.current ? 'bg-accent-blue' : 'bg-gray-600'
                )}
              >
                {step.completed && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {step.current && !step.completed && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </motion.div>
              <div className="mt-2 text-sm text-center">
                <span className={cn(
                  step.completed ? 'text-accent-green' : 
                  step.current ? 'text-accent-blue' : 
                  'text-gray-500'
                )}>
                  {step.title}
                </span>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 mx-1">
                <div className="h-0.5 bg-gray-600 relative">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: step.completed ? '100%' : '0%' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute top-0 left-0 h-full bg-accent-green"
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}