import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Users, Activity } from 'lucide-react';

function Conflicts() {
  // Mock conflicts data
  const conflicts = [
    {
      id: '1',
      submissionId: '12458',
      projectTitle: 'Urban Harvest AI',
      team: 'Team Pixel',
      judge1: 'Judge Smith',
      judge2: 'Judge Johnson',
      scoreDifference: 3.5,
      status: 'pending',
    },
    {
      id: '2',
      submissionId: '73921',
      projectTitle: 'DataGuard',
      team: 'Secure Solutions',
      judge1: 'Judge Brown',
      judge2: 'Judge Davis',
      scoreDifference: 2.8,
      status: 'pending',
    },
    {
      id: '3',
      submissionId: '94302',
      projectTitle: 'MediTrack',
      team: 'Health Heroes',
      judge1: 'Judge Wilson',
      judge2: 'Judge Taylor',
      scoreDifference: 4.2,
      status: 'pending',
    },
    {
      id: '4',
      submissionId: '38291',
      projectTitle: 'FinanceAI',
      team: 'Money Makers',
      judge1: 'Judge Anderson',
      judge2: 'Judge Miller',
      scoreDifference: 2.5,
      status: 'resolved',
    },
    {
      id: '5',
      submissionId: '12983',
      projectTitle: 'EdTech Platform',
      team: 'Learning Innovators',
      judge1: 'Judge Thomas',
      judge2: 'Judge Moore',
      scoreDifference: 3.0,
      status: 'resolved',
    },
  ];

  // Conflict resolution data
  const pendingConflicts = conflicts.filter(conflict => conflict.status === 'pending');
  const resolvedConflicts = conflicts.filter(conflict => conflict.status === 'resolved');

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Conflict Resolution</h1>
            <p className="text-gray-400">Manage evaluations with significant scoring discrepancies</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button leftIcon={<Activity size={16} />}>
              View Scoring Thresholds
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-red-900 bg-opacity-20 border border-red-800 md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 text-accent-red" />
              Pending Conflicts
            </CardTitle>
            <span className="text-xl font-bold">{pendingConflicts.length}</span>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingConflicts.map((conflict) => (
                <div 
                  key={conflict.id} 
                  className="p-4 bg-background-secondary rounded-lg border border-gray-700 hover:border-accent-red transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{conflict.projectTitle}</h3>
                      <p className="text-sm text-gray-400">Submission ID: #{conflict.submissionId} • Team: {conflict.team}</p>
                      <div className="mt-2 flex items-center">
                        <Users size={14} className="text-gray-400 mr-1" />
                        <span className="text-sm text-gray-400">
                          {conflict.judge1} vs. {conflict.judge2} • {conflict.scoreDifference} point difference
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex space-x-2">
                      <Button size="sm" variant="outline">Assign Third Judge</Button>
                      <Button size="sm">Review</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resolution Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-red mb-1">{pendingConflicts.length}</div>
                <p className="text-sm text-gray-400">Pending Conflicts</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-green mb-1">{resolvedConflicts.length}</div>
                <p className="text-sm text-gray-400">Resolved Conflicts</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-blue mb-1">
                  {((resolvedConflicts.length / (pendingConflicts.length + resolvedConflicts.length)) * 100).toFixed(0)}%
                </div>
                <p className="text-sm text-gray-400">Resolution Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recently Resolved Conflicts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Submission ID</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Project</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Judges</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Difference</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Resolution</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-gray-400">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {resolvedConflicts.map((conflict) => (
                    <tr key={conflict.id} className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-400">#{conflict.submissionId}</td>
                      <td className="py-3 px-4 font-medium text-white">{conflict.projectTitle}</td>
                      <td className="py-3 px-4 text-gray-300">{conflict.judge1}, {conflict.judge2}</td>
                      <td className="py-3 px-4 text-gray-300">{conflict.scoreDifference} points</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-900 bg-opacity-20 text-accent-green">
                          Third Judge
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default Conflicts;