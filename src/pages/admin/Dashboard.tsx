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
import { Info, Scale } from 'lucide-react';
import { EvaluationProcessTutorial } from '../../components/tutorials/EvaluationProcessTutorial';
import { JudgeCalibrationTutorial } from '../../components/tutorials/JudgeCalibrationTutorial';

function Dashboard() {
  const { dashboardStats, projectCategories, evaluationCategories } = useAppStore();
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
  
  // Generate heatmap data dynamically based on the categories
  const generateHeatMapData = () => {
    const data = [];
    const rows = evaluationCategories.length;
    const cols = projectCategories.length;
    
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        // Generate random score between 5.0 and 9.5
        const value = Math.round((5 + Math.random() * 4.5) * 10) / 10;
        data.push({ x, y, value });
      }
    }
    
    return data;
  };
  
  // Dynamic heatmap data
  const heatMapData = generateHeatMapData();

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
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 sm:py-4">
            <CardTitle className="text-lg sm:text-xl mb-2 sm:mb-0">Score Distribution Heatmap</CardTitle>
            <div className="text-sm text-gray-400">
              Showing patterns across categories
            </div>
          </CardHeader>
          <CardContent className="px-0 py-0 overflow-x-auto">
            <div className="min-w-[400px]">
              <HeatMap
                data={heatMapData}
                title=""
                rows={evaluationCategories.length}
                cols={projectCategories.length}
                xLabel="Project Categories"
                yLabel="Evaluation Criteria"
                xAxisLabels={projectCategories}
                yAxisLabels={evaluationCategories}
              />
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