import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ActivityItem {
  id: string;
  title: string;
  timestamp: string;
  status?: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
}

interface ActivityFeedProps {
  activities: ActivityItem[];
  className?: string;
}

export function ActivityFeed({ activities, className }: ActivityFeedProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {activities.map((activity, index) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex"
        >
          <div className="mr-4 flex flex-col items-center">
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center',
                activity.status === 'success' ? 'bg-accent-green' :
                activity.status === 'warning' ? 'bg-accent-orange' :
                activity.status === 'error' ? 'bg-accent-red' :
                'bg-accent-blue'
              )}
            >
              {activity.icon}
            </div>
            {index < activities.length - 1 && (
              <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
            )}
          </div>
          <div className="flex-1">
            <div className="text-white font-medium">{activity.title}</div>
            <div className="text-sm text-gray-400">{activity.timestamp}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}