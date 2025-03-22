import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Timeline, TimelineStep } from '@/components/progress/timeline';
import { ActivityFeed, ActivityItem } from '@/components/progress/activity-feed';
import { LeaderboardTable, LeaderboardEntry } from '@/components/tables/leaderboard-table';
import { PlusCircle, FileText, Clock, Scale, Info, ChevronRight } from 'lucide-react';
import { JudgeCalibrationTutorial } from '../../components/tutorials/JudgeCalibrationTutorial';

function ParticipantDashboard() {
  const [showCalibrationTutorial, setShowCalibrationTutorial] = useState(false);
  
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
      score: 'In Review',
      id: '3',
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="overflow-hidden">
          <CardContent className="p-4 sm:pt-6 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 sm:mb-0 mx-auto sm:mx-0">
                  TP
                </div>
                <div className="ml-0 sm:ml-4 text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold">Team Pixel</h2>
                  <p className="text-gray-400">1 Submission • Under Review</p>
                  <p className="text-gray-400 text-sm">Registered: January 15, 2025</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
                <Button 
                  variant="outline" 
                  onClick={() => setShowCalibrationTutorial(true)}
                  className="w-full sm:w-auto"
                  size="sm"
                  leftIcon={<Scale size={16} />}
                >
                  Evaluation System
                </Button>
                <Button 
                  className="w-full sm:w-auto"
                  size="sm"
                  leftIcon={<PlusCircle size={16} />}
                  onClick={() => window.location.href = '/participant/submit-project'}
                >
                  Submit Project
                </Button>
              </div>
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
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Project Status</CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-400 hover:text-white mt-2 sm:mt-0 px-0 sm:px-2"
              onClick={() => setShowCalibrationTutorial(true)}
              leftIcon={<Info size={14} />}
            >
              How projects are evaluated
            </Button>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="p-3 sm:p-4 bg-gray-800 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Urban Harvest AI</h3>
                  <p className="text-gray-400 text-sm">Submission ID: #12458 • Category: Sustainability</p>
                  <p className="text-gray-400 text-sm">Submitted: February 20, 2025</p>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-3 md:mt-0 w-full sm:w-auto text-sm"
                  size="sm"
                  rightIcon={<ChevronRight size={14} />}
                >
                  View Details
                </Button>
              </div>
              <Timeline steps={steps} />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader className="px-4 sm:px-6 py-3 sm:py-4">
              <CardTitle className="text-lg sm:text-xl">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <ActivityFeed activities={activities} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader className="px-4 sm:px-6 py-3 sm:py-4">
              <CardTitle className="text-lg sm:text-xl">Leaderboard Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <LeaderboardTable 
                  entries={leaderboardEntries} 
                  highlightedEntryId="3"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              <Button 
                variant="outline"
                size="sm" 
                className="w-full sm:w-auto"
              >
                View Full Leaderboard
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
      
      {/* Judge Calibration Tutorial (simplified for participants) */}
      <JudgeCalibrationTutorial
        isOpen={showCalibrationTutorial}
        onClose={() => setShowCalibrationTutorial(false)}
        role="participant"
      />
    </div>
  );
}

export default ParticipantDashboard;