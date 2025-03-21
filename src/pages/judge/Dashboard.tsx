import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ActivityFeed, ActivityItem } from '@/components/progress/activity-feed';
import { FileText, Check, Clock } from 'lucide-react';

function JudgeDashboard() {
  // Mock data for activities
  const activities: ActivityItem[] = [
    {
      id: '1',
      title: 'You completed evaluation for "Urban Harvest AI" (ID: 12458)',
      timestamp: 'Today, 2:45 PM',
      status: 'success',
      icon: <Check size={16} />,
    },
    {
      id: '2',
      title: 'New submissions assigned (12 projects)',
      timestamp: 'Today, 1:20 PM',
      status: 'info',
      icon: <FileText size={16} />,
    },
    {
      id: '3',
      title: 'Completed calibration session',
      timestamp: 'Yesterday, 4:30 PM',
      status: 'success',
      icon: <Check size={16} />,
    },
    {
      id: '4',
      title: 'You completed evaluation for "EcoSync" (ID: 10234)',
      timestamp: 'Yesterday, 2:15 PM',
      status: 'success',
      icon: <Check size={16} />,
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-2">Welcome to the Evaluation Portal</h1>
        <p className="text-gray-400 mb-6">Thank you for being part of the world's largest hackathon judging team.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-blue-900 bg-opacity-20 border border-blue-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-accent-blue text-4xl font-bold mb-2">36</h3>
              <p className="text-text-secondary">Projects to evaluate</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-900 bg-opacity-20 border border-green-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-accent-green text-4xl font-bold mb-2">12</h3>
              <p className="text-text-secondary">Submissions evaluated</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-900 bg-opacity-20 border border-orange-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-accent-orange text-4xl font-bold mb-2">3</h3>
              <p className="text-text-secondary">Days until deadline</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4">Your Evaluation Queue</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-accent-blue text-white">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Preliminary Evaluations</h3>
              <p className="text-white text-opacity-80 mb-4">14 submissions awaiting initial review</p>
              <Button className="bg-white text-accent-blue hover:bg-gray-200">
                Start
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Detailed Evaluations</h3>
              <p className="text-gray-400 mb-4">10 submissions awaiting detailed evaluation</p>
              <Button>
                Start
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityFeed activities={activities} />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default JudgeDashboard;