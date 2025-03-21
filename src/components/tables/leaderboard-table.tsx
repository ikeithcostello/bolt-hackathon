import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface LeaderboardEntry {
  rank: number;
  projectTitle: string;
  team: string;
  category: string;
  score: number | 'In Review';
  id: string;
}

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  className?: string;
  onViewDetails?: (id: string) => void;
  highlightedEntryId?: string;
}

export function LeaderboardTable({ entries, className, onViewDetails, highlightedEntryId }: LeaderboardTableProps) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Rank</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Project</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400 hidden md:table-cell">Team</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400 hidden lg:table-cell">Category</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Score</th>
            <th className="py-3 px-4 text-right text-sm font-medium text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <motion.tr
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className={cn(
                'border-b border-gray-800 hover:bg-gray-800 transition-colors',
                highlightedEntryId === entry.id && 'bg-blue-900 bg-opacity-30 hover:bg-blue-900 hover:bg-opacity-40'
              )}
            >
              <td className="py-3 px-4">
                {entry.rank <= 3 ? (
                  <div className="flex items-center">
                    <Award 
                      className={cn(
                        'mr-1', 
                        entry.rank === 1 ? 'text-yellow-400' : 
                        entry.rank === 2 ? 'text-gray-300' : 
                        'text-yellow-700'
                      )} 
                      size={16} 
                    />
                    {entry.rank}
                  </div>
                ) : (
                  entry.rank
                )}
              </td>
              <td className="py-3 px-4 font-medium text-white">{entry.projectTitle}</td>
              <td className="py-3 px-4 text-gray-300 hidden md:table-cell">{entry.team}</td>
              <td className="py-3 px-4 text-gray-300 hidden lg:table-cell">{entry.category}</td>
              <td className="py-3 px-4">
                {typeof entry.score === 'number' ? (
                  <span className={cn(
                    'font-medium',
                    entry.score >= 90 ? 'text-accent-green' : 
                    entry.score >= 75 ? 'text-accent-blue' : 
                    'text-gray-300'
                  )}>
                    {entry.score.toFixed(1)}
                  </span>
                ) : (
                  <span className="text-accent-orange font-medium">{entry.score}</span>
                )}
              </td>
              <td className="py-3 px-4 text-right">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  rightIcon={<ExternalLink size={14} />}
                  onClick={() => onViewDetails && onViewDetails(entry.id)}
                >
                  View
                </Button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}