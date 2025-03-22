import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Filter, 
  CheckSquare, 
  ClipboardList, 
  Medal, 
  Trophy, 
  Info, 
  HelpCircle,
  ArrowRight,
  Users,
  AlertTriangle,
  Scale,
  BarChart3
} from 'lucide-react';
import { EvaluationProcessTutorial } from '../../components/tutorials/EvaluationProcessTutorial';

function EvaluationProcess() {
  const [showTutorial, setShowTutorial] = useState(false);
  
  // Show tutorial on first visit
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenAdminEvaluationTutorial');
    if (!hasSeenTutorial) {
      setShowTutorial(true);
      localStorage.setItem('hasSeenAdminEvaluationTutorial', 'true');
    }
  }, []);

  // Define the evaluation phases and their details
  const evaluationPhases = [
    {
      id: 'triage',
      name: 'Initial Triage',
      description: 'Quick binary evaluation to filter out submissions that don\'t meet basic requirements.',
      icon: <Filter size={28} className="text-blue-400" />,
      tasks: [
        'Monitor judge assignments and workload distribution',
        'Review borderline or contested submissions',
        'Adjust triage thresholds as needed',
        'Address any judge questions or concerns'
      ],
      metrics: {
        submissions: 1000000,
        complete: 750000,
        pending: 250000,
        flagged: 15000
      }
    },
    {
      id: 'preliminary',
      name: 'Preliminary Evaluation',
      description: 'First round of scoring on core criteria to identify promising submissions.',
      icon: <CheckSquare size={28} className="text-green-400" />,
      tasks: [
        'Ensure consistent application of scoring criteria',
        'Identify scoring anomalies across judges',
        'Adjust judge training or criteria as needed',
        'Monitor progress against timeline goals'
      ],
      metrics: {
        submissions: 500000,
        complete: 350000,
        pending: 150000,
        flagged: 8000
      }
    },
    {
      id: 'detailed',
      name: 'Detailed Evaluation',
      description: 'In-depth evaluation with detailed feedback on all criteria.',
      icon: <ClipboardList size={28} className="text-purple-400" />,
      tasks: [
        'Assign specialized judges to appropriate categories',
        'Review quality of feedback provided',
        'Address judge concerns about scoring criteria',
        'Begin preparation for awards determination'
      ],
      metrics: {
        submissions: 100000,
        complete: 65000,
        pending: 35000,
        flagged: 3000
      }
    },
    {
      id: 'semifinals',
      name: 'Semi-Finals',
      description: 'Expert evaluation of top-performing submissions to determine finalists.',
      icon: <Medal size={28} className="text-amber-400" />,
      tasks: [
        'Coordinate senior judge assignments',
        'Begin compiling awards nominations',
        'Review evaluation consistency across judges',
        'Prepare for final round deliberations'
      ],
      metrics: {
        submissions: 20000,
        complete: 12000,
        pending: 8000,
        flagged: 800
      }
    },
    {
      id: 'finals',
      name: 'Finals',
      description: 'Final collaborative judging to select winners across all categories.',
      icon: <Trophy size={28} className="text-yellow-400" />,
      tasks: [
        'Facilitate deliberation sessions',
        'Document judging decisions',
        'Compile final report and winner list',
        'Address any final conflicts or appeals'
      ],
      metrics: {
        submissions: 5000,
        complete: 2500,
        pending: 2500,
        flagged: 300
      }
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Evaluation Process Management</h1>
          <p className="text-gray-400 mb-4">
            Monitor and manage your entire hackathon evaluation workflow
          </p>
        </div>
        <Button 
          variant="outline"
          className="flex items-center gap-2 mt-4 md:mt-0"
          onClick={() => setShowTutorial(true)}
        >
          <Info size={16} />
          <span>View Process Overview</span>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Evaluation Stages Overview</CardTitle>
              <Button 
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 text-gray-400 hover:text-white"
                onClick={() => setShowTutorial(true)}
              >
                <HelpCircle size={14} />
                <span className="text-xs">How the process works</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="triage" className="space-y-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {evaluationPhases.map(phase => (
                  <TabsTrigger 
                    key={phase.id} 
                    value={phase.id}
                    className="flex items-center gap-2"
                  >
                    {phase.icon}
                    <span className="hidden md:inline">{phase.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {evaluationPhases.map(phase => (
                <TabsContent key={phase.id} value={phase.id} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {phase.icon}
                          <span>{phase.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-gray-400">{phase.description}</p>
                        <h3 className="text-lg font-semibold mb-2">Admin Responsibilities</h3>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ArrowRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Metrics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">Total Submissions</p>
                            <p className="text-2xl font-bold">{phase.metrics.submissions.toLocaleString()}</p>
                          </div>
                          <div className="bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">Complete</p>
                            <p className="text-2xl font-bold text-green-400">{phase.metrics.complete.toLocaleString()}</p>
                          </div>
                          <div className="bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">Pending</p>
                            <p className="text-2xl font-bold text-amber-400">{phase.metrics.pending.toLocaleString()}</p>
                          </div>
                          <div className="bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">Flagged</p>
                            <p className="text-2xl font-bold text-red-400">{phase.metrics.flagged.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" className="mr-2">View Details</Button>
                          <Button>Manage Stage</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Process Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
              {evaluationPhases.map((phase, index) => (
                <div key={index} className="mb-8 relative pl-12">
                  <div className={`absolute left-2 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-blue-500' : 
                    index === 1 ? 'bg-green-500' : 
                    index === 2 ? 'bg-purple-500' : 
                    index === 3 ? 'bg-amber-500' : 
                    'bg-yellow-500'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    {phase.icon}
                    {phase.name}
                  </h3>
                  <p className="text-gray-400 mt-1">{phase.description}</p>
                  <div className="mt-2 flex gap-2">
                    <div className="bg-gray-800 px-2 py-1 rounded text-xs">
                      <span className="text-gray-400 mr-1">Progress:</span>
                      <span className="font-semibold">{Math.round((phase.metrics.complete / phase.metrics.submissions) * 100)}%</span>
                    </div>
                    <div className="bg-gray-800 px-2 py-1 rounded text-xs">
                      <span className="text-gray-400 mr-1">Submissions:</span>
                      <span className="font-semibold">{phase.metrics.submissions.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Filter size={16} className="mr-2" />
                Adjust Triage Thresholds
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <CheckSquare size={16} className="mr-2" />
                Update Scoring Criteria
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users size={16} className="mr-2" />
                Manage Judge Assignments
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <AlertTriangle size={16} className="mr-2" />
                Review Flagged Submissions
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Scale size={16} className="mr-2" />
                Calibrate Judge Scores
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 size={16} className="mr-2" />
                Generate Status Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Evaluation Process Tutorial */}
      <EvaluationProcessTutorial 
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
        role="admin"
      />
    </div>
  );
}

export default EvaluationProcess; 