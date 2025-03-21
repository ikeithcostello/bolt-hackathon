import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { formatNumber } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { MetricCard as MetricCardType } from '@/types';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface MetricCardProps {
  metric: MetricCardType;
  className?: string;
}

export function MetricCard({ metric, className }: MetricCardProps) {
  const { title, value, trend, percentChange, color } = metric;

  const trendIcon = trend === 'up' ? (
    <TrendingUp className="w-4 h-4 text-accent-green" />
  ) : trend === 'down' ? (
    <TrendingDown className="w-4 h-4 text-accent-red" />
  ) : null;

  const textColorClass = {
    blue: 'text-accent-blue',
    green: 'text-accent-green',
    orange: 'text-accent-orange',
    red: 'text-accent-red',
    purple: 'text-accent-purple',
    default: 'text-text-primary',
  };

  const valueColor = color ? textColorClass[color as keyof typeof textColorClass] : textColorClass.default;

  return (
    <Card className={cn('h-full', className)}>
      <div className="flex flex-col">
        <div className="text-sm text-text-secondary mb-1">{title}</div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-end"
        >
          <span className={cn('text-3xl font-bold', valueColor)}>
            {typeof value === 'number' ? formatNumber(value) : value}
          </span>
          
          {(trend || percentChange) && (
            <div className="flex items-center ml-2 mb-1">
              {trendIcon}
              {percentChange && (
                <span className={cn('text-xs ml-1', trend === 'up' ? 'text-accent-green' : 'text-accent-red')}>
                  {percentChange}%
                </span>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </Card>
  );
}