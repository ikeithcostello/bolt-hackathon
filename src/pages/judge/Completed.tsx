import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Calendar, CheckCircle, Clock, Download, ExternalLink, Filter, Search } from 'lucide-react';

function Completed() {
  // Mock data for completed evaluations
  const completedEvaluations = [
    {
      id: '12458',
      projectTitle: 'Urban Harvest AI',
      teamName: 'Team Pixel',
      category: 'Sustainability',
      submissionDate: 'Feb 20, 2025',
      evaluationDate: 'Feb 22, 2025',
      score: 8.4,
    },
    {
      id: '10234',
      projectTitle: 'EcoSync',
      teamName: 'Green Innovators',
      category: 'Energy',
      submissionDate: 'Feb 19, 2025',
      evaluationDate: 'Feb 21, 2025',
      score: 9.2,
    },
    {
      id: '11567',
      projectTitle: 'CleanWaves',
      teamName: 'Ocean Defenders',
      category: 'Environment',
      submissionDate: 'Feb 18, 2025',
      evaluationDate: 'Feb 20, 2025',
      score: 8.8,
    },
    {
      id: '12789',
      projectTitle: 'MediTrack',
      teamName: 'Health Heroes',
      category: 'Healthcare',
      submissionDate: 'Feb 17, 2025',
      evaluationDate: 'Feb 19, 2025',
      score: 7.5,
    },
    {
      id: '13456',
      projectTitle: 'SmartCity Hub',
      teamName: 'Urban Explorers',
      category: 'Smart Cities',
      submissionDate: 'Feb 16, 2025',
      evaluationDate: 'Feb 18, 2025',
      score: 8.1,
    },
  ];

  // Filter options
  const categories = ['All Categories', 'Sustainability', 'Energy', 'Environment', 'Healthcare', 'Smart Cities'];
  const dateRanges = ['All Time', 'Last 24 Hours', 'Last 7 Days', 'Last 30 Days'];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Completed Evaluations</h1>
            <p className="text-gray-400">Review your previously evaluated submissions</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <Button variant="outline" leftIcon={<Download size={16} />}>
              Export
            </Button>
            <Button leftIcon={<Calendar size={16} />}>
              View Schedule
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
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto text-accent-green mb-2" />
              <h3 className="text-4xl font-bold mb-2 text-accent-green">{completedEvaluations.length}</h3>
              <p className="text-text-secondary">Completed Evaluations</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto text-accent-blue mb-2" />
              <h3 className="text-4xl font-bold mb-2 text-accent-blue">14.2</h3>
              <p className="text-text-secondary">Avg. Minutes per Evaluation</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto text-accent-purple mb-2" />
              <h3 className="text-4xl font-bold mb-2 text-accent-purple">8.4</h3>
              <p className="text-text-secondary">Avg. Score Given</p>
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
            <CardTitle>Filter & Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue appearance-none">
                    {categories.map((category, index) => (
                      <option key={index} value={category.toLowerCase().replace(/\s+/g, '-')}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <Filter className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Date Range</label>
                <div className="relative">
                  <select className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue appearance-none">
                    {dateRanges.map((range, index) => (
                      <option key={index} value={range.toLowerCase().replace(/\s+/g, '-')}>
                        {range}
                      </option>
                    ))}
                  </select>
                  <Calendar className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by project name or ID..."
                    className="w-full px-4 py-2 pl-10 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                </div>
              </div>
            </div>
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
            <CardTitle>Completed Evaluations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">ID</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Project</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400 hidden md:table-cell">Team</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400 hidden lg:table-cell">Category</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Score</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400 hidden lg:table-cell">Evaluated On</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {completedEvaluations.map((evaluation) => (
                    <tr key={evaluation.id} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                      <td className="py-3 px-4 text-gray-400">#{evaluation.id}</td>
                      <td className="py-3 px-4 font-medium text-white">{evaluation.projectTitle}</td>
                      <td className="py-3 px-4 text-gray-300 hidden md:table-cell">{evaluation.teamName}</td>
                      <td className="py-3 px-4 text-gray-300 hidden lg:table-cell">{evaluation.category}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${
                          evaluation.score >= 9 ? 'text-accent-green' : 
                          evaluation.score >= 7 ? 'text-accent-blue' : 
                          'text-gray-300'
                        }`}>
                          {evaluation.score.toFixed(1)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-300 hidden lg:table-cell">{evaluation.evaluationDate}</td>
                      <td className="py-3 px-4 text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          rightIcon={<ExternalLink size={14} />}
                        >
                          View
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

export default Completed;