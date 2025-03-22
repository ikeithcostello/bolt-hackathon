import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ActivityFeed, ActivityItem } from '@/components/progress/activity-feed';
import { 
  FileText, 
  Check, 
  Filter, 
  CheckSquare, 
  ClipboardList, 
  Medal, 
  Trophy,
  Info,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { EvaluationProcessTutorial } from '../../components/tutorials/EvaluationProcessTutorial';
import { JudgeCalibrationTutorial } from '../../components/tutorials/JudgeCalibrationTutorial';

function JudgeDashboard() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [showCalibrationTutorial, setShowCalibrationTutorial] = useState(false);
  
  // Show tutorial on first visit (using localStorage to track)
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenJudgeTutorial');
    if (!hasSeenTutorial) {
      setShowTutorial(true);
      localStorage.setItem('hasSeenJudgeTutorial', 'true');
    }
  }, []);

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

  // Mock data for evaluation phases
  const evaluationPhases = [
    {
      id: 'triage',
      name: 'Initial Triage',
      count: 24,
      icon: <Filter size={20} />,
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-900 bg-opacity-20 border border-orange-800',
      active: true
    },
    {
      id: 'preliminary',
      name: 'Preliminary',
      count: 14,
      icon: <CheckSquare size={20} />,
      color: 'bg-accent-blue',
      textColor: 'text-accent-blue',
      borderColor: 'border-accent-blue',
      bgColor: 'bg-blue-900 bg-opacity-20 border border-blue-800',
      active: true
    },
    {
      id: 'detailed',
      name: 'Detailed',
      count: 10,
      icon: <ClipboardList size={20} />,
      color: 'bg-violet-500',
      textColor: 'text-violet-500',
      borderColor: 'border-violet-500',
      bgColor: 'bg-violet-900 bg-opacity-20 border border-violet-800',
      active: true
    },
    {
      id: 'semifinals',
      name: 'Semi-Finals',
      count: 4,
      icon: <Medal size={20} />,
      color: 'bg-green-500',
      textColor: 'text-green-500',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-900 bg-opacity-20 border border-green-800',
      active: false
    },
    {
      id: 'finals',
      name: 'Finals',
      count: 2,
      icon: <Trophy size={20} />,
      color: 'bg-red-500',
      textColor: 'text-red-500',
      borderColor: 'border-red-500',
      bgColor: 'bg-red-900 bg-opacity-20 border border-red-800',
      active: false
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-0">Judge Portal</h1>
            <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-0">
              <Button
                onClick={() => setShowCalibrationTutorial(true)}
                variant="outline"
                size="sm"
                className="min-w-[170px] px-3 border-blue-600 text-blue-500 hover:bg-blue-950 hover:text-blue-400 transition-colors duration-200"
                leftIcon={<Scale size={16} />}
              >
                Calibration Guide
              </Button>
              <Button
                onClick={() => setShowTutorial(true)}
                variant="outline"
                size="sm"
                className="min-w-[170px] px-3 border-violet-600 text-violet-500 hover:bg-violet-950 hover:text-violet-400 transition-colors duration-200"
                leftIcon={<Info size={16} />}
              >
                Evaluation Guide
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <Card className="bg-blue-900 bg-opacity-20 border border-blue-800">
          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="text-center">
              <h3 className="text-accent-blue text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">36</h3>
              <p className="text-text-secondary text-sm sm:text-base">Projects to evaluate</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-900 bg-opacity-20 border border-green-800">
          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="text-center">
              <h3 className="text-accent-green text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">12</h3>
              <p className="text-text-secondary text-sm sm:text-base">Submissions evaluated</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-900 bg-opacity-20 border border-orange-800">
          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="text-center">
              <h3 className="text-accent-orange text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">3</h3>
              <p className="text-text-secondary text-sm sm:text-base">Days until deadline</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-xl font-semibold mb-2 sm:mb-0">Your Evaluation Queue</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {evaluationPhases.map((phase) => (
            <Card key={phase.id} className={phase.active ? phase.bgColor : ""}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <span className={`p-1 sm:p-2 rounded-full ${phase.color}`}>
                    {phase.icon}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold">{phase.name} Evaluations</h3>
                </div>
                <p className={`mb-4 text-sm sm:text-base ${phase.active ? 'text-gray-300' : 'text-gray-400'}`}>
                  {phase.count} submissions awaiting review
                </p>
                <Link to={`/judge/evaluations/${phase.id}`}>
                  <Button 
                    className={`w-full sm:w-auto ${phase.active ? `bg-white ${phase.textColor} hover:bg-gray-200` : ""}`} 
                    disabled={!phase.active}
                    size="sm"
                  >
                    Start
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader className="px-4 sm:px-6 py-3 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
            <ActivityFeed activities={activities} />
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Evaluation Process Tutorial */}
      <EvaluationProcessTutorial 
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
        role="judge"
      />
      
      {/* Judge Calibration Tutorial */}
      <JudgeCalibrationTutorial
        isOpen={showCalibrationTutorial}
        onClose={() => setShowCalibrationTutorial(false)}
        role="judge"
      />
    </div>
  );
}

export default JudgeDashboard;