import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LineChart } from '../../components/visualizations/line-chart';
import { RadarChart } from '../../components/visualizations/radar-chart';
import { HeatMap } from '../../components/visualizations/heat-map';
import { BarChart3, Download, Filter } from 'lucide-react';

function Reports() {
  // Mock data for charts
  const lineChartData = [
    { day: 'Day 1', name: 'Day 1', submissions: 25000, evaluations: 15000 },
    { day: 'Day 2', name: 'Day 2', submissions: 48000, evaluations: 31000 },
    { day: 'Day 3', name: 'Day 3', submissions: 95000, evaluations: 60000 },
    { day: 'Day 4', name: 'Day 4', submissions: 220000, evaluations: 140000 },
    { day: 'Day 5', name: 'Day 5', submissions: 350000, evaluations: 260000 },
    { day: 'Day 6', name: 'Day 6', submissions: 580000, evaluations: 430000 },
    { day: 'Day 7', name: 'Day 7', submissions: 1000000, evaluations: 750000 },
  ];

  const radarData = [
    {
      subject: 'Innovation',
      'Average': 7.2,
      'Top 10%': 9.5,
    },
    {
      subject: 'User Experience',
      'Average': 6.8,
      'Top 10%': 9.3,
    },
    {
      subject: 'Technical Merit',
      'Average': 7.0,
      'Top 10%': 9.7,
    },
    {
      subject: 'Design',
      'Average': 6.5,
      'Top 10%': 9.0,
    },
    {
      subject: 'Impact',
      'Average': 7.5,
      'Top 10%': 9.4,
    },
  ];

  // Improved heatmap data for score distribution across categories and scoring ranges
  const heatMapData = [
    // Score ranges (x) represent 1-10 scale, Categories (y) are different project types
    // AI/ML Projects
    { x: 0, y: 0, value: 1.2 }, // 1-2 score range
    { x: 1, y: 0, value: 2.3 }, // 2-3 score range
    { x: 2, y: 0, value: 3.1 }, // 3-4 score range
    { x: 3, y: 0, value: 5.8 }, // 4-5 score range
    { x: 4, y: 0, value: 7.9 }, // 5-6 score range
    { x: 5, y: 0, value: 8.4 }, // 6-7 score range
    { x: 6, y: 0, value: 9.3 }, // 7-8 score range
    { x: 7, y: 0, value: 9.8 }, // 8-9 score range
    { x: 8, y: 0, value: 8.5 }, // 9-10 score range
    { x: 9, y: 0, value: 6.2 }, // 10 score range
    
    // Web Applications
    { x: 0, y: 1, value: 0.5 }, 
    { x: 1, y: 1, value: 1.2 }, 
    { x: 2, y: 1, value: 2.7 }, 
    { x: 3, y: 1, value: 4.8 }, 
    { x: 4, y: 1, value: 7.6 }, 
    { x: 5, y: 1, value: 9.2 }, 
    { x: 6, y: 1, value: 9.0 }, 
    { x: 7, y: 1, value: 7.1 }, 
    { x: 8, y: 1, value: 5.5 }, 
    { x: 9, y: 1, value: 3.8 }, 
    
    // Mobile Applications
    { x: 0, y: 2, value: 0.8 }, 
    { x: 1, y: 2, value: 1.9 }, 
    { x: 2, y: 2, value: 3.5 }, 
    { x: 3, y: 2, value: 5.7 }, 
    { x: 4, y: 2, value: 8.2 }, 
    { x: 5, y: 2, value: 9.5 }, 
    { x: 6, y: 2, value: 8.6 }, 
    { x: 7, y: 2, value: 6.4 }, 
    { x: 8, y: 2, value: 4.2 }, 
    { x: 9, y: 2, value: 2.1 }, 
    
    // Developer Tools
    { x: 0, y: 3, value: 1.1 }, 
    { x: 1, y: 3, value: 2.0 }, 
    { x: 2, y: 3, value: 2.8 }, 
    { x: 3, y: 3, value: 4.2 }, 
    { x: 4, y: 3, value: 6.7 }, 
    { x: 5, y: 3, value: 8.5 }, 
    { x: 6, y: 3, value: 9.7 }, 
    { x: 7, y: 3, value: 9.2 }, 
    { x: 8, y: 3, value: 7.5 }, 
    { x: 9, y: 3, value: 5.1 }, 
    
    // Games
    { x: 0, y: 4, value: 0.3 }, 
    { x: 1, y: 4, value: 0.9 }, 
    { x: 2, y: 4, value: 2.5 }, 
    { x: 3, y: 4, value: 5.1 }, 
    { x: 4, y: 4, value: 7.3 }, 
    { x: 5, y: 4, value: 8.8 }, 
    { x: 6, y: 4, value: 7.9 }, 
    { x: 7, y: 4, value: 6.2 }, 
    { x: 8, y: 4, value: 4.7 }, 
    { x: 9, y: 4, value: 2.5 },
  ];

  // Report types for filtering
  const reportTypes = [
    'Submission Volume',
    'Judge Performance',
    'Score Distribution',
    'Category Analysis',
    'Geographical Analysis',
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
            <p className="text-gray-400">Comprehensive insights into hackathon performance</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div className="relative">
              <select className="appearance-none pl-4 pr-10 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue w-full md:w-48">
                {reportTypes.map((type, index) => (
                  <option key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                    {type}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
            </div>
            <Button leftIcon={<Download size={16} />}>
              Export Data
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
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Submission & Evaluation Trends</CardTitle>
            <Button variant="ghost" size="sm" leftIcon={<BarChart3 size={14} />}>
              Change View
            </Button>
          </CardHeader>
          <CardContent>
            <LineChart
              data={lineChartData}
              lines={[
                { dataKey: 'submissions', color: '#3B82F6', name: 'Submissions' },
                { dataKey: 'evaluations', color: '#22C55E', name: 'Evaluations' },
              ]}
              xAxisDataKey="day"
              title=""
              xLabel="Time Period"
              yLabel="Count"
            />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>Project Evaluation Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <RadarChart
              data={radarData}
              dataKeys={[
                { key: 'Average', color: '#3B82F6', name: 'Average Score' },
                { key: 'Top 10%', color: '#22C55E', name: 'Top 10% Scores' },
              ]}
              title=""
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Score Distribution Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <HeatMap
              data={heatMapData}
              title=""
              rows={5}
              cols={10}
              xLabel="Score Range (1-10)"
              yLabel="Project Categories (AI/ML, Web, Mobile, DevTools, Games)"
              xAxisLabels={["1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10"]} 
              yAxisLabels={["AI/ML", "Web", "Mobile", "DevTools", "Games"]}
            />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Key Metrics Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Average Score</div>
                <div className="text-2xl font-bold text-white">7.4 / 10</div>
                <div className="text-sm text-gray-400 mt-1">Across all submissions</div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Evaluation Rate</div>
                <div className="text-2xl font-bold text-accent-green">98.2%</div>
                <div className="text-sm text-gray-400 mt-1">Submissions with at least 2 reviews</div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-gray-400 mb-1">Judge Consistency</div>
                <div className="text-2xl font-bold text-accent-blue">92.5%</div>
                <div className="text-sm text-gray-400 mt-1">Score agreement within 10%</div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Top Performing Categories</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Category</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Avg. Score</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Submissions</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Top Project</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-white">AI & Machine Learning</td>
                      <td className="py-3 px-4 text-accent-green">8.7</td>
                      <td className="py-3 px-4">142,387</td>
                      <td className="py-3 px-4">EcoPredict AI</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-white">Healthcare</td>
                      <td className="py-3 px-4 text-accent-green">8.5</td>
                      <td className="py-3 px-4">98,562</td>
                      <td className="py-3 px-4">MediTrack Pro</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-white">Sustainability</td>
                      <td className="py-3 px-4 text-accent-blue">8.2</td>
                      <td className="py-3 px-4">124,951</td>
                      <td className="py-3 px-4">Urban Harvest AI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default Reports;