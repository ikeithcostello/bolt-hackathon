import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MetricCard } from '@/components/metrics/metric-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricCard as MetricCardType } from '@/types';
import { ScatterPlot } from '@/components/visualizations/scatter-plot';
import { HeatMap } from '@/components/visualizations/heat-map';
import { LineChart } from '@/components/visualizations/line-chart';
import { useAppStore } from '@/store';
import { Button } from '@/components/ui/button';
import { Info, Filter, CheckSquare, ClipboardList, Medal, Trophy, Scale } from 'lucide-react';
import { EvaluationProcessTutorial } from '../../components/tutorials/EvaluationProcessTutorial';
import { JudgeCalibrationTutorial } from '../../components/tutorials/JudgeCalibrationTutorial';
import { Link } from 'react-router-dom';

function Dashboard() {
  const { dashboardStats } = useAppStore();
  const [showTutorial, setShowTutorial] = useState(false);
  const [showCalibrationTutorial, setShowCalibrationTutorial] = useState(false);
  
  // Show tutorial on first visit (using localStorage to track)
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenAdminTutorial');
    if (!hasSeenTutorial) {
      setShowTutorial(true);
      localStorage.setItem('hasSeenAdminTutorial', 'true');
    }
  }, []);
  
  // Metric cards data
  const metrics: MetricCardType[] = [
    {
      title: 'Total Submissions',
      value: dashboardStats.totalSubmissions,
      trend: 'up',
      percentChange: 12,
    },
    {
      title: 'Evaluations Complete',
      value: dashboardStats.evaluationsComplete,
      color: 'green',
    },
    {
      title: 'Pending Evaluations',
      value: dashboardStats.pendingEvaluations,
      color: 'orange',
    },
    {
      title: 'Flagged',
      value: dashboardStats.flaggedSubmissions,
      color: 'red',
    },
  ];

  // Mock data for line chart
  const lineChartData = [
    { day: 'Day 1', name: 'Day 1', submissions: 120000, evaluations: 80000 },
    { day: 'Day 2', name: 'Day 2', submissions: 250000, evaluations: 150000 },
    { day: 'Day 3', name: 'Day 3', submissions: 320000, evaluations: 220000 },
    { day: 'Day 4', name: 'Day 4', submissions: 450000, evaluations: 300000 },
    { day: 'Day 5', name: 'Day 5', submissions: 670000, evaluations: 420000 },
    { day: 'Day 6', name: 'Day 6', submissions: 820000, evaluations: 580000 },
    { day: 'Day 7', name: 'Day 7', submissions: 1000000, evaluations: 750000 },
  ];

  // Mock data for scatter plot
  const scatterData = [
    { x: 8.2, y: 7.3, z: 350, name: 'Project A' },
    { x: 5.1, y: 9.2, z: 200, name: 'Project B' },
    { x: 9.3, y: 8.7, z: 400, name: 'Project C' },
    { x: 7.8, y: 6.1, z: 300, name: 'Project D' },
    { x: 4.5, y: 4.2, z: 150, name: 'Project E' },
    { x: 6.7, y: 7.9, z: 250, name: 'Project F' },
    { x: 3.8, y: 8.2, z: 180, name: 'Project G' },
    { x: 7.2, y: 3.5, z: 220, name: 'Project H' },
    { x: 8.1, y: 5.9, z: 280, name: 'Project I' },
  ];

  // Mock data for heat map - replaced random data with realistic score distribution
  // Represents scores for different criteria (x) across different project categories (y)
  const heatMapData = [
    // Innovation scores
    { x: 0, y: 0, value: 8.4 }, // AI/ML
    { x: 1, y: 0, value: 7.9 }, // Web Apps
    { x: 2, y: 0, value: 6.3 }, // Mobile
    { x: 3, y: 0, value: 9.1 }, // DevTools
    { x: 4, y: 0, value: 7.5 }, // Games
    { x: 5, y: 0, value: 5.8 }, // IoT
    
    // Technical Complexity scores
    { x: 0, y: 1, value: 9.2 }, // AI/ML
    { x: 1, y: 1, value: 6.7 }, // Web Apps
    { x: 2, y: 1, value: 7.1 }, // Mobile
    { x: 3, y: 1, value: 8.8 }, // DevTools
    { x: 4, y: 1, value: 6.9 }, // Games
    { x: 5, y: 1, value: 7.7 }, // IoT
    
    // Design scores
    { x: 0, y: 2, value: 6.2 }, // AI/ML
    { x: 1, y: 2, value: 8.3 }, // Web Apps
    { x: 2, y: 2, value: 8.5 }, // Mobile
    { x: 3, y: 2, value: 7.4 }, // DevTools
    { x: 4, y: 2, value: 9.0 }, // Games
    { x: 5, y: 2, value: 5.9 }, // IoT
    
    // User Experience scores
    { x: 0, y: 3, value: 5.7 }, // AI/ML
    { x: 1, y: 3, value: 8.9 }, // Web Apps
    { x: 2, y: 3, value: 9.2 }, // Mobile
    { x: 3, y: 3, value: 7.0 }, // DevTools
    { x: 4, y: 3, value: 8.8 }, // Games
    { x: 5, y: 3, value: 6.1 }, // IoT
    
    // Impact scores
    { x: 0, y: 4, value: 9.5 }, // AI/ML
    { x: 1, y: 4, value: 7.8 }, // Web Apps
    { x: 2, y: 4, value: 7.4 }, // Mobile
    { x: 3, y: 4, value: 8.2 }, // DevTools
    { x: 4, y: 4, value: 6.5 }, // Games
    { x: 5, y: 4, value: 8.7 }, // IoT
    
    // Popularity scores
    { x: 0, y: 5, value: 8.1 }, // AI/ML
    { x: 1, y: 5, value: 8.5 }, // Web Apps
    { x: 2, y: 5, value: 7.2 }, // Mobile
    { x: 3, y: 5, value: 6.8 }, // DevTools
    { x: 4, y: 5, value: 9.3 }, // Games
    { x: 5, y: 5, value: 7.0 }, // IoT
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
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-0">Admin Portal</h1>
            <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-0">
              <Button
                onClick={() => setShowCalibrationTutorial(true)}
                variant="outline"
                size="sm"
                className="inline-flex items-center justify-center gap-2 min-w-[170px] px-3 border-blue-600 text-blue-500 hover:bg-blue-950 hover:text-blue-400 transition-colors duration-200"
              >
                <Scale size={16} className="shrink-0 flex-none" />
                <span className="whitespace-nowrap truncate">Calibration Guide</span>
              </Button>
              <Button
                onClick={() => setShowTutorial(true)}
                variant="outline"
                size="sm"
                className="inline-flex items-center justify-center gap-2 min-w-[170px] px-3 border-violet-600 text-violet-500 hover:bg-violet-950 hover:text-violet-400 transition-colors duration-200"
              >
                <Info size={16} className="shrink-0 flex-none" />
                <span className="whitespace-nowrap truncate">Evaluation Guide</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-xl font-semibold mb-2 sm:mb-0">Key Metrics</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader className="px-4 sm:px-6 py-3 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Submission & Evaluation Trends</CardTitle>
          </CardHeader>
          <CardContent className="px-0 py-0 overflow-x-auto">
            <div className="min-w-[600px]">
              <LineChart
                data={lineChartData}
                lines={[
                  { dataKey: 'submissions', color: '#3B82F6', name: 'Submissions' },
                  { dataKey: 'evaluations', color: '#22C55E', name: 'Evaluations' },
                ]}
                xAxisDataKey="day"
                title=""
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
      >
        <Card>
          <CardHeader className="px-4 sm:px-6 py-3 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Innovation vs. User Experience</CardTitle>
          </CardHeader>
          <CardContent className="px-0 py-0 overflow-x-auto">
            <div className="min-w-[400px]">
              <ScatterPlot
                data={scatterData}
                xLabel="Innovation"
                yLabel="User Experience"
                title=""
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="px-4 sm:px-6 py-3 sm:py-4">
            <CardTitle className="text-lg sm:text-xl">Score Distribution Heatmap</CardTitle>
          </CardHeader>
          <CardContent className="px-0 py-0 overflow-x-auto">
            <div className="min-w-[400px]">
              <HeatMap
                data={heatMapData}
                title=""
                rows={6}
                cols={6}
                xLabel="Project Categories"
                yLabel="Evaluation Criteria"
                xAxisLabels={["AI/ML", "Web", "Mobile", "DevTools", "Games", "IoT"]}
                yAxisLabels={["Innovation", "Technical", "Design", "UX", "Impact", "Popularity"]}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 sm:py-4">
            <CardTitle className="text-lg sm:text-xl mb-2 sm:mb-0">Evaluation Process Overview</CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowTutorial(true)}
              className="w-full sm:w-auto border-violet-600 text-violet-500 hover:bg-violet-950 hover:text-violet-400 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Info size={16} className="mr-2 shrink-0" />
              <span className="whitespace-nowrap">How it works</span>
            </Button>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                <Link to="/admin/evaluation-process" className="block no-underline">
                  <div className="flex flex-col items-center gap-2 p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md cursor-pointer text-center">
                    <Filter size={20} className="text-blue-400" />
                    <span className="text-xs sm:text-sm font-medium">Initial Triage</span>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-xs text-green-400">75%</span>
                    </div>
                  </div>
                </Link>
                <Link to="/admin/evaluation-process" className="block no-underline">
                  <div className="flex flex-col items-center gap-2 p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md cursor-pointer text-center">
                    <CheckSquare size={20} className="text-green-400" />
                    <span className="text-xs sm:text-sm font-medium">Preliminary</span>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-xs text-green-400">70%</span>
                    </div>
                  </div>
                </Link>
                <Link to="/admin/evaluation-process" className="block no-underline">
                  <div className="flex flex-col items-center gap-2 p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md cursor-pointer text-center">
                    <ClipboardList size={20} className="text-purple-400" />
                    <span className="text-xs sm:text-sm font-medium">Detailed</span>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-xs text-amber-400">65%</span>
                    </div>
                  </div>
                </Link>
                <Link to="/admin/evaluation-process" className="block no-underline">
                  <div className="flex flex-col items-center gap-2 p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md cursor-pointer text-center">
                    <Medal size={20} className="text-amber-400" />
                    <span className="text-xs sm:text-sm font-medium">Semi-Finals</span>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-xs text-orange-400">60%</span>
                    </div>
                  </div>
                </Link>
                <Link to="/admin/evaluation-process" className="block no-underline">
                  <div className="flex flex-col items-center gap-2 p-2 sm:p-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md cursor-pointer text-center">
                    <Trophy size={20} className="text-yellow-400" />
                    <span className="text-xs sm:text-sm font-medium">Finals</span>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-xs text-red-400">50%</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-end">
                <Link to="/admin/evaluation-process">
                  <Button 
                    variant="outline"
                    size="sm"
                  >
                    View Full Process
                  </Button>
                </Link>
              </div>
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
      
      {/* Judge Calibration Tutorial */}
      <JudgeCalibrationTutorial
        isOpen={showCalibrationTutorial}
        onClose={() => setShowCalibrationTutorial(false)}
        role="admin"
      />
    </div>
  );
}

export default Dashboard;