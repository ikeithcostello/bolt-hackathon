import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Timeline, TimelineStep } from '@/components/progress/timeline';
import { ActivityFeed, ActivityItem } from '@/components/progress/activity-feed';
import { LeaderboardTable, LeaderboardEntry } from '@/components/tables/leaderboard-table';
import { PlusCircle, FileText, CheckCircle, Clock } from 'lucide-react';

function ParticipantDashboard() {
  // Mock timeline data
  const steps: TimelineStep[] = [
    { id: '1', title: 'Submitted', completed: true, current: false },
    { id: '2', title: 'In Review', completed: true, current: false },
    { id: '3', title: 'Evaluation', completed: false, current: true },
    { id: '4', title: 'Results', completed: false, current: false },
    { id: '5', title: 'Finalized', completed: false, current: false },
  ];

  // Mock activity feed data
  const activities: ActivityItem[] = [
    {
      id: '1',
      title: 'Submission received',
      timestamp: 'February 20, 2025 | 10:23 AM',
      status: 'info',
      icon: <FileText size={16} />,
    },
    {
      id: '2',
      title: 'Review process started',
      timestamp: 'February 21, 2025 | 9:15 AM',
      status: 'info',
      icon: <Clock size={16} />,
    },
    {
      id: '3',
      title: 'Evaluation in progress',
      timestamp: 'February 22, 2025 | 2:45 PM',
      status: 'info',
      icon: <Clock size={16} />,
    },
  ];

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
      projectTitle: 'Urban Harvest AI',
      team: 'Team Pixel',
      category: 'Sustainability',
      score: 'In Review' as any,
      id: '3',
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  TP
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">Team Pixel</h2>
                  <p className="text-gray-400">1 Submission • Under Review</p>
                  <p className="text-gray-400 text-sm">Registered: January 15, 2025</p>
                </div>
              </div>
              <Button leftIcon={<PlusCircle size={16} />}>
                Submit Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-gray-800 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Urban Harvest AI</h3>
                  <p className="text-gray-400">Submission ID: #12458 • Category: Sustainability</p>
                  <p className="text-gray-400">Submitted: February 20, 2025</p>
                </div>
                <Button variant="outline" className="mt-2 md:mt-0">
                  View Details
                </Button>
              </div>
              <Timeline steps={steps} />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityFeed activities={activities} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leaderboard Preview</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <LeaderboardTable 
              entries={leaderboardEntries} 
              highlightedEntryId="3"
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline">
              View Full Leaderboard
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

export default ParticipantDashboard;