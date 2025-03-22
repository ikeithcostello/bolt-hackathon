import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { Download, Filter, Calendar, BarChart3 } from 'lucide-react';
import { LineChart } from '@/components/visualizations/line-chart';
import { HeatMap } from '@/components/visualizations/heat-map';
import { ScatterPlot } from '@/components/visualizations/scatter-plot';
import { useAppStore } from '@/store';

// Define the time range options
type TimeRange = 'last7days' | 'last30days' | 'allTime';

function Reports() {
  // State for time range filter
  const [timeRange, setTimeRange] = useState<TimeRange>('last7days');
  const [activeReportTab, setActiveReportTab] = useState('submissions');

  // Get categories from app store
  const { projectCategories, evaluationCategories } = useAppStore();

  // Mock data for submission trends over time
  const submissionTrendsData = [
    { day: 'Day 1', name: 'Day 1', submissions: 12, evaluations: 5 },
    { day: 'Day 2', name: 'Day 2', submissions: 18, evaluations: 14 },
    { day: 'Day 3', name: 'Day 3', submissions: 25, evaluations: 18 },
    { day: 'Day 4', name: 'Day 4', submissions: 32, evaluations: 24 },
    { day: 'Day 5', name: 'Day 5', submissions: 28, evaluations: 30 },
    { day: 'Day 6', name: 'Day 6', submissions: 20, evaluations: 26 },
    { day: 'Day 7', name: 'Day 7', submissions: 15, evaluations: 22 }
  ];

  // Mock data for category distribution
  const categoryData = [
    { name: 'Web Development', value: 35 },
    { name: 'Mobile App', value: 25 },
    { name: 'AI/ML', value: 20 },
    { name: 'IoT', value: 10 },
    { name: 'Game Development', value: 8 },
    { name: 'Other', value: 2 }
  ];

  // Mock data for judge activity (evaluations per judge)
  const judgeActivityData = [
    { name: 'Judge 1', evaluations: 15, avgScore: 8.2 },
    { name: 'Judge 2', evaluations: 22, avgScore: 7.8 },
    { name: 'Judge 3', evaluations: 18, avgScore: 7.5 },
    { name: 'Judge 4', evaluations: 26, avgScore: 8.1 },
    { name: 'Judge 5', evaluations: 12, avgScore: 8.5 },
    { name: 'Judge 6', evaluations: 19, avgScore: 7.9 }
  ];

  // Mock data for score distribution
  const scoreDistributionData = [
    { score: '1-2', count: 2 },
    { score: '3-4', count: 8 },
    { score: '5-6', count: 18 },
    { score: '7-8', count: 42 },
    { score: '9-10', count: 30 }
  ];

  // Mock data for criteria correlation scatter plot
  const criteriaCorrelationData = [
    { x: 7.2, y: 8.5, z: 15, name: 'Innovation vs UX' },
    { x: 8.4, y: 7.9, z: 18, name: 'Technical Merit vs Innovation' },
    { x: 6.5, y: 8.2, z: 12, name: 'UX vs Completion' },
    { x: 9.1, y: 8.8, z: 25, name: 'Innovation vs Completion' },
    { x: 7.8, y: 6.7, z: 14, name: 'Technical Merit vs UX' },
    { x: 8.6, y: 7.5, z: 20, name: 'Documentation vs Completion' },
    { x: 6.9, y: 8.3, z: 16, name: 'Technical Merit vs Documentation' },
    { x: 7.7, y: 7.2, z: 17, name: 'UX vs Documentation' }
  ];

  // Generate heatmap data dynamically based on categories
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
  const categoryScoreHeatMapData = generateHeatMapData();

  const handleTimeRangeChange = (range: TimeRange) => {
    setTimeRange(range);
    // In a real app, you would fetch new data based on the time range
  };

  const renderMetricsCards = () => {
    const metrics = [
      {
        title: 'Total Submissions',
        value: '142',
        change: '+12%',
        changeType: 'positive'
      },
      {
        title: 'Average Score',
        value: '7.8',
        change: '+0.3',
        changeType: 'positive'
      },
      {
        title: 'Completion Rate',
        value: '85%',
        change: '-2%',
        changeType: 'negative'
      },
      {
        title: 'Active Judges',
        value: '14',
        change: '+2',
        changeType: 'positive'
      }
    ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-5">
              <div className="flex flex-col">
                <p className="text-gray-400 text-sm">{metric.title}</p>
                <div className="flex items-baseline justify-between mt-2">
                  <h3 className="text-2xl font-bold">{metric.value}</h3>
                  <span className={`text-sm ${metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
            <p className="text-gray-400">Comprehensive analytics and reports for the hackathon</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={timeRange === 'last7days' ? 'primary' : 'outline'}
                onClick={() => handleTimeRangeChange('last7days')}
                className="rounded-r-none"
                leftIcon={<Calendar size={16} />}
              >
                Last 7 Days
              </Button>
              <Button
                variant={timeRange === 'last30days' ? 'primary' : 'outline'}
                onClick={() => handleTimeRangeChange('last30days')}
                className="rounded-none border-l-0"
              >
                30 Days
              </Button>
              <Button
                variant={timeRange === 'allTime' ? 'primary' : 'outline'}
                onClick={() => handleTimeRangeChange('allTime')}
                className="rounded-l-none border-l-0"
              >
                All Time
              </Button>
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Filters
            </Button>
            <Button leftIcon={<Download size={16} />}>
              Export
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {renderMetricsCards()}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="w-full"
      >
        <Card className="mb-12 w-full overflow-visible">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <BarChart3 size={20} className="mr-2" />
                Detailed Reports
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="overflow-visible">
            <Tabs 
              value={activeReportTab} 
              onValueChange={setActiveReportTab}
              className="w-full"
            >
              <TabsList className="mb-6">
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
                <TabsTrigger value="evaluations">Evaluations</TabsTrigger>
                <TabsTrigger value="judges">Judges</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
              </TabsList>
            
              <TabsContent 
                value="submissions" 
                className="space-y-8 pb-4 w-full block overflow-visible"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-4">Submission Trends</h3>
                  <div className="h-[350px]">
                    <LineChart
                      data={submissionTrendsData}
                      lines={[
                        { dataKey: 'submissions', color: '#64748b', name: 'Submissions' },
                        { dataKey: 'evaluations', color: '#94a3b8', name: 'Evaluations' }
                      ]}
                      xAxisDataKey="day"
                      title=""
                      xLabel="Timeline"
                      yLabel="Count"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Category Distribution</h3>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="space-y-4">
                        {categoryData.map((category, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span>{category.name}</span>
                              <span>{category.value}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                              <div 
                                className="bg-slate-600 h-2.5 rounded-full" 
                                style={{ width: `${category.value}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Submission Status</h3>
                    <div className="bg-gray-800 p-4 rounded-lg h-[280px] flex items-center justify-center">
                      <div className="relative w-40 h-40">
                        {/* Simplified donut chart */}
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#444"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#64748b"
                            strokeWidth="4"
                            strokeDasharray="75, 100"
                            strokeDashoffset="0"
                          />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                          <div className="text-3xl font-bold">75%</div>
                          <div className="text-sm text-gray-400">Evaluated</div>
                        </div>
                      </div>
                      <div className="ml-4 space-y-2">
                        <div className="flex items-center text-sm">
                          <span className="w-3 h-3 rounded-full bg-slate-600 mr-2"></span>
                          <span>Evaluated (75%)</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="w-3 h-3 rounded-full bg-gray-600 mr-2"></span>
                          <span>Pending (25%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent 
                value="evaluations" 
                className="space-y-8 pb-4 w-full block overflow-visible"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-4">Score Distribution</h3>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="h-[250px] flex items-end justify-around pt-6">
                      {scoreDistributionData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div 
                            className="bg-slate-600 w-12 rounded-t-md mb-2"
                            style={{ height: `${item.count * 3}px` }}
                          ></div>
                          <div className="text-sm">{item.score}</div>
                          <div className="text-xs text-gray-400">{item.count}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Criteria Correlation</h3>
                  <div className="h-[350px]">
                    <ScatterPlot
                      data={criteriaCorrelationData}
                      xLabel="Innovation Score"
                      yLabel="Technical Merit Score"
              title=""
            />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Category Score Heatmap</h3>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 shadow-lg overflow-hidden">
                    <div className="h-[420px] w-full relative">
            <HeatMap
                        data={categoryScoreHeatMapData}
                        title=""
                        rows={evaluationCategories.length}
                        cols={projectCategories.length}
                        xLabel="Project Categories"
                        yLabel="Evaluation Criteria"
                        xAxisLabels={projectCategories}
                        yAxisLabels={evaluationCategories}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-4 text-center italic">
                      Hover over cells to see detailed scores between evaluation criteria and project categories
                    </div>
                  </div>
                </div>
                
                {/* Additional Evaluation Insights */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Score Trends By Week</h3>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                        <div className="text-4xl font-bold text-slate-300">7.8</div>
                        <div className="text-sm text-gray-400 mt-2">Week 1 Average</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                        <div className="text-4xl font-bold text-slate-300">8.2</div>
                        <div className="text-sm text-gray-400 mt-2">Week 2 Average</div>
                        <div className="text-xs text-slate-500 mt-1">↑ 5.1%</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
                        <div className="text-4xl font-bold text-slate-300">8.5</div>
                        <div className="text-sm text-gray-400 mt-2">Week 3 Average</div>
                        <div className="text-xs text-slate-500 mt-1">↑ 3.7%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent 
                value="judges" 
                className="space-y-8 pb-4 w-full block overflow-visible"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-4">Judge Activity</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="text-xs text-gray-400 border-b border-gray-800">
                          <th className="px-4 py-3 text-left">Judge</th>
                          <th className="px-4 py-3 text-center">Evaluations</th>
                          <th className="px-4 py-3 text-center">Avg. Score</th>
                          <th className="px-4 py-3 text-center">Completion Rate</th>
                          <th className="px-4 py-3 text-center">Activity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {judgeActivityData.map((judge, index) => (
                          <tr key={index} className="text-sm">
                            <td className="px-4 py-3 font-medium">{judge.name}</td>
                            <td className="px-4 py-3 text-center">{judge.evaluations}</td>
                            <td className="px-4 py-3 text-center">{judge.avgScore}</td>
                            <td className="px-4 py-3 text-center">
                              {Math.round(judge.evaluations / 30 * 100)}%
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative w-full h-2 bg-gray-700 rounded-full">
                                <div 
                                  className="absolute h-full bg-slate-600 rounded-full"
                                  style={{ width: `${(judge.evaluations / 30) * 100}%` }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Evaluations Per Day</h3>
                    <div className="bg-gray-800 p-4 rounded-lg h-[250px]">
                      <div className="h-full">
                        <LineChart
                          data={submissionTrendsData}
                          lines={[
                            { dataKey: 'evaluations', color: '#64748b', name: 'Evaluations' }
                          ]}
                          xAxisDataKey="day"
              title=""
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Average Evaluation Time</h3>
                    <div className="bg-gray-800 p-4 rounded-lg h-[250px] flex flex-col justify-center">
                      <div className="text-6xl font-bold text-center text-slate-300">14.2</div>
                      <div className="text-lg text-gray-400 text-center">minutes per project</div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Quickest</span>
                          <span>4.5 min</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Longest</span>
                          <span>28.7 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Judge Performance Summary */}
                <div className="bg-gray-850 rounded-lg border border-gray-800 p-6 shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Judge Performance Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-slate-300 mb-1">Most Active Judge</h4>
                          <p className="text-xl font-bold text-white">Judge 4</p>
                        </div>
                        <div className="p-2 bg-slate-700 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-slate-300">
                        <span className="font-medium text-slate-200">26</span> evaluations completed
                      </div>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-slate-300 mb-1">Highest Scoring</h4>
                          <p className="text-xl font-bold text-white">Judge 5</p>
                        </div>
                        <div className="p-2 bg-slate-700 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-slate-300">
                        <span className="font-medium text-slate-200">8.5</span> average score
                      </div>
                    </div>
                    
                    <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-slate-300 mb-1">Most Consistent</h4>
                          <p className="text-xl font-bold text-white">Judge 1</p>
                        </div>
                        <div className="p-2 bg-slate-700 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-slate-300">
                        <span className="font-medium text-slate-200">±0.4</span> score deviation
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent 
                value="categories" 
                className="space-y-8 pb-16 w-full block overflow-visible"
              >
                {/* Category Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-1">Total Categories</h4>
                        <p className="text-3xl font-bold text-white">{projectCategories.length}</p>
                      </div>
                      <div className="p-2 bg-slate-700 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-slate-300">
                      <span className="font-medium text-slate-200">+2</span> from last month
                    </div>
              </div>
              
                  <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-1">Most Active Category</h4>
                        <p className="text-xl font-bold text-white">Web Development</p>
                      </div>
                      <div className="p-2 bg-slate-700 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-slate-300">
                      <span className="font-medium text-slate-200">+35%</span> submission growth
                    </div>
              </div>
              
                  <div className="bg-slate-800 rounded-lg p-5 shadow-lg border border-slate-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-slate-300 mb-1">Highest Rated</h4>
                        <p className="text-xl font-bold text-white">AI/ML Projects</p>
                      </div>
                      <div className="p-2 bg-slate-700 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-slate-300">
                      <span className="font-medium text-slate-200">9.2/10</span> average score
                    </div>
              </div>
            </div>
            
                {/* Category Performance Section */}
                <div className="bg-gray-850 rounded-lg border border-gray-800 p-6 shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Category Performance
                  </h3>
                  <div className="overflow-x-auto bg-gray-900 rounded-lg border border-gray-800 shadow-lg">
                    <table className="w-full min-w-[600px]">
                  <thead>
                        <tr className="text-sm text-gray-300 border-b border-gray-700 bg-gray-800">
                          <th className="px-6 py-4 text-left font-medium">Category</th>
                          <th className="px-6 py-4 text-center font-medium">Submissions</th>
                          <th className="px-6 py-4 text-center font-medium">Avg. Score</th>
                          <th className="px-6 py-4 text-center font-medium">Top Score</th>
                          <th className="px-6 py-4 text-left font-medium">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                        {categoryData.map((category, index) => (
                          <tr 
                            key={index} 
                            className={`text-sm hover:bg-gray-800 transition-colors 
                                      ${index % 2 === 0 ? 'bg-gray-850' : 'bg-transparent'}`}
                          >
                            <td className="px-6 py-4 font-medium text-white">{category.name}</td>
                            <td className="px-6 py-4 text-center">{Math.floor(category.value * 1.5)}</td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-block py-1 px-2 rounded bg-gray-800">
                                {(6.5 + Math.random() * 2.5).toFixed(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <span className="inline-block py-1 px-2 rounded bg-slate-700 text-slate-200">
                                {(8.5 + Math.random() * 1.5).toFixed(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full 
                                              ${index % 3 === 0 ? 'bg-slate-700 text-green-200' : 
                                                index % 3 === 1 ? 'bg-slate-700 text-slate-200' : 
                                                'bg-slate-700 text-slate-300'}`}>
                                {index % 3 === 0 ? '↑' : index % 3 === 1 ? '→' : '↓'}
                              </span>
                            </td>
                    </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="text-sm text-slate-400 hover:text-slate-300 flex items-center">
                      View full category details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Criteria Scores Heatmap */}
                <div className="bg-gray-850 rounded-lg border border-gray-800 p-6 shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    Criteria Scores by Category
                  </h3>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 shadow-lg overflow-hidden">
                    <div className="h-[420px] w-full relative">
                      <HeatMap
                        data={categoryScoreHeatMapData}
                        title=""
                        rows={evaluationCategories.length}
                        cols={projectCategories.length}
                        xLabel="Project Categories"
                        yLabel="Evaluation Criteria"
                        xAxisLabels={projectCategories}
                        yAxisLabels={evaluationCategories}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-4 text-center italic">
                      The heatmap shows average scores for each evaluation criteria across different project categories
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                      <div className="text-xs text-gray-400">Highest Criteria</div>
                      <div className="font-medium mt-1">Innovation - Web Dev</div>
                      <div className="text-slate-300 text-sm font-medium">9.3/10</div>
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                      <div className="text-xs text-gray-400">Lowest Criteria</div>
                      <div className="font-medium mt-1">Documentation - IoT</div>
                      <div className="text-slate-300 text-sm font-medium">6.2/10</div>
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                      <div className="text-xs text-gray-400">Most Consistent</div>
                      <div className="font-medium mt-1">UX Design - Mobile</div>
                      <div className="text-slate-300 text-sm font-medium">±0.3 deviation</div>
                    </div>
                    <div className="bg-gray-900 p-3 rounded-lg border border-gray-800">
                      <div className="text-xs text-gray-400">Most Variable</div>
                      <div className="font-medium mt-1">Technical - Game Dev</div>
                      <div className="text-slate-300 text-sm font-medium">±1.7 deviation</div>
                    </div>
                  </div>
                </div>
                
                {/* Category Growth Analysis */}
                <div className="bg-gray-850 rounded-lg border border-gray-800 p-6 shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Category Growth Analysis
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                      <h4 className="text-md font-medium mb-4 text-slate-300 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Fastest Growing Categories
                      </h4>
                      <div className="space-y-5">
                        {categoryData.slice(0, 3).map((category, index) => (
                          <div key={index} className="relative">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full mr-2 bg-slate-600"></div>
                                <span className="font-medium">{category.name}</span>
                              </div>
                              <span className="text-sm text-slate-300">+{(30 - index * 8)}%</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                              <div 
                                className="bg-slate-600 h-2 rounded-full"
                                style={{ width: `${(30 - index * 8) * 2}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 text-xs text-gray-400">
                        Growth measured against previous 30-day period
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                      <h4 className="text-md font-medium mb-4 text-slate-300 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Categories Needing Attention
                      </h4>
                      <div className="space-y-5">
                        {categoryData.slice(3, 6).map((category, index) => (
                          <div key={index} className="relative">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <div className="h-3 w-3 rounded-full mr-2 bg-slate-500"></div>
                                <span className="font-medium">{category.name}</span>
                              </div>
                              <span className="text-sm text-slate-300">{index === 2 ? '-' : '+'}{(8 - index * 4)}%</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                              <div 
                                className="bg-slate-500 h-2 rounded-full"
                                style={{ width: `${index === 2 ? 10 : (8 - index * 4) * 3}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 text-xs text-gray-400">
                        Criteria: Low growth (&lt;10%) or negative trend in submissions
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Category Comparison */}
                <div className="bg-gray-850 rounded-lg border border-gray-800 p-6 shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    Category Comparison Matrix
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] border-collapse">
                      <thead>
                        <tr>
                          <th className="p-3 border-b border-gray-700"></th>
                          <th className="p-3 border-b border-gray-700 text-center text-gray-400 text-sm">Submissions</th>
                          <th className="p-3 border-b border-gray-700 text-center text-gray-400 text-sm">Average Score</th>
                          <th className="p-3 border-b border-gray-700 text-center text-gray-400 text-sm">Completion Rate</th>
                          <th className="p-3 border-b border-gray-700 text-center text-gray-400 text-sm">Judging Time</th>
                          <th className="p-3 border-b border-gray-700 text-center text-gray-400 text-sm">Overall Rank</th>
                    </tr>
                      </thead>
                      <tbody>
                        {categoryData.slice(0, 5).map((category, index) => (
                          <tr key={index} className="hover:bg-gray-800/50">
                            <td className="p-3 border-b border-gray-700 font-medium">{category.name}</td>
                            <td className="p-3 border-b border-gray-700 text-center">
                              <div className="flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full mr-2 bg-slate-600"></div>
                                <span>{Math.floor(category.value * 1.5)}</span>
                              </div>
                            </td>
                            <td className="p-3 border-b border-gray-700 text-center">
                              {(8.5 - index * 0.4).toFixed(1)}
                            </td>
                            <td className="p-3 border-b border-gray-700 text-center">
                              {90 - index * 5}%
                            </td>
                            <td className="p-3 border-b border-gray-700 text-center">
                              {12 + index * 2} min
                            </td>
                            <td className="p-3 border-b border-gray-700 text-center">
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold bg-slate-700 text-slate-200">
                                {index + 1}
                              </span>
                            </td>
                    </tr>
                        ))}
                  </tbody>
                </table>
              </div>
                  <div className="mt-4 text-xs text-gray-400 text-center">
                    Rankings based on combined metrics including submission volume, scores, and engagement
              </div>
            </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
      
      <div className="h-16"></div>
    </div>
  );
}

export default Reports;