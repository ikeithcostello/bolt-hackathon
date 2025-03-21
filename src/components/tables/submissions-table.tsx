import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Submission } from '@/types';

interface SubmissionsTableProps {
  submissions: Submission[];
  className?: string;
  onViewDetails?: (id: string) => void;
}

export function SubmissionsTable({ submissions, className, onViewDetails }: SubmissionsTableProps) {
  const getStatusIcon = (status: Submission['status']) => {
    switch (status) {
      case 'submitted':
        return <Clock className="text-accent-blue" size={16} />;
      case 'preliminary_review':
      case 'detailed_review':
        return <Clock className="text-accent-orange" size={16} />;
      case 'evaluated':
        return <CheckCircle className="text-accent-green" size={16} />;
      case 'flagged':
        return <AlertCircle className="text-accent-red" size={16} />;
      default:
        return <Clock className="text-gray-400" size={16} />;
    }
  };

  const getStatusText = (status: Submission['status']) => {
    switch (status) {
      case 'submitted':
        return 'Submitted';
      case 'preliminary_review':
        return 'Preliminary Review';
      case 'detailed_review':
        return 'Detailed Review';
      case 'evaluated':
        return 'Evaluated';
      case 'flagged':
        return 'Flagged';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">ID</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Title</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400 hidden md:table-cell">Participant</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400 hidden lg:table-cell">Category</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Status</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-400 hidden lg:table-cell">Submission Date</th>
            <th className="py-3 px-4 text-right text-sm font-medium text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <motion.tr
              key={submission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="border-b border-gray-800 hover:bg-gray-800 transition-colors"
            >
              <td className="py-3 px-4 text-gray-400">#{submission.id.slice(0, 6)}</td>
              <td className="py-3 px-4 font-medium text-white">{submission.title}</td>
              <td className="py-3 px-4 text-gray-300 hidden md:table-cell">{submission.participantName}</td>
              <td className="py-3 px-4 text-gray-300 hidden lg:table-cell">{submission.category}</td>
              <td className="py-3 px-4">
                <div className="flex items-center">
                  {getStatusIcon(submission.status)}
                  <span className="ml-2">{getStatusText(submission.status)}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-gray-300 hidden lg:table-cell">{submission.submissionDate}</td>
              <td className="py-3 px-4 text-right">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  rightIcon={<ExternalLink size={14} />}
                  onClick={() => onViewDetails && onViewDetails(submission.id)}
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