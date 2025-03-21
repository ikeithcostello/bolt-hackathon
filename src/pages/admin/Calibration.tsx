import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadarChart } from '@/components/visualizations/radar-chart';

function Calibration() {
  // Mock radar chart data
  const radarData = [
    {
      subject: 'Innovation',
      'Judge Average': 7.4,
      'Benchmark': 8.0,
    },
    {
      subject: 'User Experience',
      'Judge Average': 6.8,
      'Benchmark': 7.5,
    },
    {
      subject: 'Technical Merit',
      'Judge Average': 8.2,
      'Benchmark': 8.0,
    },
    {
      subject: 'Design',
      'Judge Average': 7.0,
      'Benchmark': 7.5,
    },
    {
      subject: 'Impact',
      'Judge Average': 8.5,
      'Benchmark': 7.8,
    },
  ];

  // Judge calibration data
  const judgeData = [
    { name: 'Judge 1', deviation: '+8%', status: 'Calibrated' },
    { name: 'Judge 2', deviation: '-5%', status: 'Calibrated' },
    { name: 'Judge 3', deviation: '+15%', status: 'Needs Calibration' },
    { name: 'Judge 4', deviation: '-3%', status: 'Calibrated' },
    { name: 'Judge 5', deviation: '+2%', status: 'Calibrated' },
    { name: 'Judge 6', deviation: '-12%', status: 'Needs Calibration' },
  ];

  // Mock benchmark projects
  const benchmarkProjects = [
    { id: '1', title: 'Benchmark Project A', category: 'Innovation' },
    { id: '2', title: 'Benchmark Project B', category: 'Healthcare' },
    { id: '3', title: 'Benchmark Project C', category: 'Sustainability' },
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
            <h1 className="text-3xl font-bold mb-2">Judge Calibration</h1>
            <p className="text-gray-400">Ensure consistent scoring across the judging panel</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>
              Schedule Calibration Session
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>Benchmark vs. Judge Averages</CardTitle>
          </CardHeader>
          <CardContent>
            <RadarChart
              data={radarData}
              dataKeys={[
                { key: 'Judge Average', color: '#3B82F6', name: 'Judge Average' },
                { key: 'Benchmark', color: '#22C55E', name: 'Benchmark' },
              ]}
              title=""
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Judge Calibration Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Judge</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Deviation</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Status</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-gray-400">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {judgeData.map((judge, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-white">{judge.name}</td>
                      <td className="py-3 px-4 text-gray-300">{judge.deviation}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          judge.status === 'Calibrated' 
                            ? 'bg-green-900 bg-opacity-20 text-accent-green' 
                            : 'bg-orange-900 bg-opacity-20 text-accent-orange'
                        }`}>
                          {judge.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">
                          {judge.status === 'Calibrated' ? 'View Details' : 'Send Reminder'}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Benchmark Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {benchmarkProjects.map((project) => (
                <Card key={project.id} className="bg-gray-800">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">Category: {project.category}</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Add New Benchmark Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default Calibration;