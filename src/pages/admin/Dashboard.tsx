import React from 'react';
import { motion } from 'framer-motion';
import { MetricCard } from '@/components/metrics/metric-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricCard as MetricCardType } from '@/types';
import { ScatterPlot } from '@/components/visualizations/scatter-plot';
import { HeatMap } from '@/components/visualizations/heat-map';
import { LineChart } from '@/components/visualizations/line-chart';
import { useAppStore } from '@/store';

function Dashboard() {
  const { dashboardStats } = useAppStore();
  
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
    { day: 'Day 1', submissions: 120000, evaluations: 80000 },
    { day: 'Day 2', submissions: 250000, evaluations: 150000 },
    { day: 'Day 3', submissions: 320000, evaluations: 220000 },
    { day: 'Day 4', submissions: 450000, evaluations: 300000 },
    { day: 'Day 5', submissions: 670000, evaluations: 420000 },
    { day: 'Day 6', submissions: 820000, evaluations: 580000 },
    { day: 'Day 7', submissions: 1000000, evaluations: 750000 },
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

  // Mock data for heat map
  const heatMapData = Array.from({ length: 6 * 6 }, (_, i) => ({
    x: i % 6,
    y: Math.floor(i / 6),
    value: Math.random() * 10,
  }));

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-6">Administrator Dashboard</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            metric={metric}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Submission & Evaluation Trends</CardTitle>
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
            />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>Innovation vs. User Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <ScatterPlot
              data={scatterData}
              xLabel="Innovation"
              yLabel="User Experience"
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
              rows={6}
              cols={6}
              xLabel="Low → High"
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default Dashboard;