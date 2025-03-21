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
    { day: 'Day 1', submissions: 25000, evaluations: 15000 },
    { day: 'Day 2', submissions: 48000, evaluations: 31000 },
    { day: 'Day 3', submissions: 95000, evaluations: 60000 },
    { day: 'Day 4', submissions: 220000, evaluations: 140000 },
    { day: 'Day 5', submissions: 350000, evaluations: 260000 },
    { day: 'Day 6', submissions: 580000, evaluations: 430000 },
    { day: 'Day 7', submissions: 1000000, evaluations: 750000 },
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

  const heatMapData = Array.from({ length: 5 * 10 }, (_, i) => ({
    x: i % 10,
    y: Math.floor(i / 10),
    value: Math.floor(Math.random() * 10 + 1),
  }));

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
              yLabel="Categories"
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