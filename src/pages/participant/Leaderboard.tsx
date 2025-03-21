import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeaderboardTable, LeaderboardEntry } from '@/components/tables/leaderboard-table';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

function Leaderboard() {
  // Mock leaderboard data
  const leaderboardEntries: LeaderboardEntry[] = [
    {
      rank: 1,
      projectTitle: 'EcoSync',
      team: 'Green Innovators',
      category: 'Sustainability',
      score: 92.5,
      id: '1',
    },
    {
      rank: 2,
      projectTitle: 'CleanWaves',
      team: 'Ocean Defenders',
      category: 'Environment',
      score: 88.2,
      id: '2',
    },
    {
      rank: 3,
      projectTitle: 'MediTrack',
      team: 'Health Heroes',
      category: 'Healthcare',
      score: 87.9,
      id: '4',
    },
    {
      rank: 4,
      projectTitle: 'DataGuard',
      team: 'Secure Solutions',
      category: 'Cybersecurity',
      score: 86.0,
      id: '5',
    },
    {
      rank: 5,
      projectTitle: 'SmartCity Hub',
      team: 'Urban Explorers',
      category: 'Smart Cities',
      score: 85.3,
      id: '6',
    },
    {
      rank: 6,
      projectTitle: 'EdTech Platform',
      team: 'Learning Innovators',
      category: 'Education',
      score: 84.7,
      id: '7',
    },
    {
      rank: 7,
      projectTitle: 'AR Shopping',
      team: 'Future Retail',
      category: 'E-commerce',
      score: 82.1,
      id: '8',
    },
    {
      rank: 8,
      projectTitle: 'FinanceAI',
      team: 'Money Makers',
      category: 'Finance',
      score: 81.4,
      id: '9',
    },
    {
      rank: 9,
      projectTitle: 'Travel Assistant',
      team: 'Globe Trotters',
      category: 'Tourism',
      score: 80.9,
      id: '10',
    },
    {
      rank: 10,
      projectTitle: 'Sports Analytics',
      team: 'Game Changers',
      category: 'Sports',
      score: 80.2,
      id: '11',
    },
    {
      rank: 24,
      projectTitle: 'Urban Harvest AI',
      team: 'Team Pixel',
      category: 'Sustainability',
      score: 'In Review' as any,
      id: '3',
    },
  ];

  const handleViewDetails = (id: string) => {
    console.log(`View details for entry ${id}`);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Global Leaderboard</h1>
            <p className="text-gray-400">Track the top projects from around the world</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="px-4 py-2 pl-10 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue w-full md:w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Filters
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
          <CardHeader className="border-b border-gray-800">
            <CardTitle>Current Rankings</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <LeaderboardTable
              entries={leaderboardEntries}
              onViewDetails={handleViewDetails}
              highlightedEntryId="3"
            />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex justify-center"
      >
        <Button variant="outline">
          Load More
        </Button>
      </motion.div>
    </div>
  );
}

export default Leaderboard;