import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { SubmissionsTable } from '@/components/tables/submissions-table';
import { Button } from '@/components/ui/button';
import { Submission } from '@/types';
import { Search } from 'lucide-react';

function Submissions() {
  // Mock submissions data
  const submissions: Submission[] = [
    {
      id: '12458',
      title: 'Urban Harvest AI',
      description: 'AI-powered urban farming solution',
      url: 'https://example.com/project1',
      category: 'Sustainability',
      participantId: '1',
      participantName: 'Team Pixel',
      submissionDate: 'Feb 20, 2025',
      status: 'detailed_review',
    },
    {
      id: '12459',
      title: 'EcoSync',
      description: 'Renewable energy management platform',
      url: 'https://example.com/project2',
      category: 'Energy',
      participantId: '2',
      participantName: 'Green Innovators',
      submissionDate: 'Feb 19, 2025',
      status: 'evaluated',
      score: 92.5,
    },
    {
      id: '12460',
      title: 'CleanWaves',
      description: 'Ocean pollution monitoring system',
      url: 'https://example.com/project3',
      category: 'Environment',
      participantId: '3',
      participantName: 'Ocean Defenders',
      submissionDate: 'Feb 18, 2025',
      status: 'evaluated',
      score: 88.2,
    },
    {
      id: '12461',
      title: 'MediTrack',
      description: 'Healthcare logistics optimization',
      url: 'https://example.com/project4',
      category: 'Healthcare',
      participantId: '4',
      participantName: 'Health Heroes',
      submissionDate: 'Feb 18, 2025',
      status: 'submitted',
    },
    {
      id: '12462',
      title: 'SmartCity Hub',
      description: 'Urban infrastructure management',
      url: 'https://example.com/project5',
      category: 'Smart Cities',
      participantId: '5',
      participantName: 'Urban Explorers',
      submissionDate: 'Feb 17, 2025',
      status: 'flagged',
    },
  ];

  const handleViewDetails = (id: string) => {
    console.log(`View details for submission ${id}`);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-3xl font-bold mb-2 md:mb-0">Submissions Management</h1>
          <div className="flex space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search submissions..."
                className="px-4 py-2 pl-10 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue w-full md:w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            </div>
            <Button>
              Export
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <div className="p-2">
            <SubmissionsTable
              submissions={submissions}
              onViewDetails={handleViewDetails}
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

export default Submissions;