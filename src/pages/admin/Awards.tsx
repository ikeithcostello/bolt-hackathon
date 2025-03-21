import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Award, Calendar, ChevronRight, Edit, Plus, Trophy, Users } from 'lucide-react';

function Awards() {
  // Mock data for awards
  const awardCategories = [
    {
      id: '1',
      name: 'Best Overall Project',
      description: 'The most impressive project considering all evaluation criteria',
      prize: '$250,000',
      winner: {
        projectName: 'EcoSync',
        teamName: 'Green Innovators',
        score: 92.5
      }
    },
    {
      id: '2',
      name: 'Most Innovative Solution',
      description: 'A ground-breaking approach that demonstrates exceptional creativity',
      prize: '$150,000',
      winner: {
        projectName: 'NeuralLink XR',
        teamName: 'Mind Matter',
        score: 91.7
      }
    },
    {
      id: '3',
      name: 'Best Technical Implementation',
      description: 'Outstanding technical excellence and engineering quality',
      prize: '$100,000',
      winner: {
        projectName: 'Quantum Mesh',
        teamName: 'Quantum Coders',
        score: 90.3
      }
    },
    {
      id: '4',
      name: 'Best User Experience',
      description: 'Exceptional interface design and overall user experience',
      prize: '$100,000',
      winner: null
    },
    {
      id: '5',
      name: 'Greatest Social Impact',
      description: 'Project with the most potential for positive social change',
      prize: '$100,000',
      winner: null
    },
  ];

  // Mock finalists data
  const finalists = [
    { id: '1', projectName: 'EcoSync', teamName: 'Green Innovators', category: 'Sustainability', score: 92.5 },
    { id: '2', projectName: 'NeuralLink XR', teamName: 'Mind Matter', category: 'AI/ML', score: 91.7 },
    { id: '3', projectName: 'Quantum Mesh', teamName: 'Quantum Coders', category: 'Infrastructure', score: 90.3 },
    { id: '4', projectName: 'CleanWaves', teamName: 'Ocean Defenders', category: 'Environment', score: 88.2 },
    { id: '5', projectName: 'MediTrack', teamName: 'Health Heroes', category: 'Healthcare', score: 87.9 },
    { id: '6', projectName: 'Urban Harvest AI', teamName: 'Team Pixel', category: 'Sustainability', score: 87.1 },
    { id: '7', projectName: 'DataGuard', teamName: 'Secure Solutions', category: 'Cybersecurity', score: 86.5 },
    { id: '8', projectName: 'FinanceAI', teamName: 'Money Makers', category: 'Finance', score: 85.9 },
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
            <h1 className="text-3xl font-bold mb-2">Awards Management</h1>
            <p className="text-gray-400">Manage and assign awards to top-performing hackathon submissions</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button leftIcon={<Calendar size={16} />}>
              Schedule Ceremony
            </Button>
            <Button leftIcon={<Plus size={16} />}>
              Create Award
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
              <Trophy className="h-8 w-8 mx-auto text-yellow-400 mb-2" />
              <h3 className="text-4xl font-bold mb-2 text-yellow-400">5</h3>
              <p className="text-text-secondary">Award Categories</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto text-accent-blue mb-2" />
              <h3 className="text-4xl font-bold mb-2 text-accent-blue">8</h3>
              <p className="text-text-secondary">Finalists</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto text-accent-green mb-2" />
              <h3 className="text-4xl font-bold mb-2 text-accent-green">3/5</h3>
              <p className="text-text-secondary">Awards Assigned</p>
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
            <CardTitle>Award Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {awardCategories.map((award) => (
                <div key={award.id} className="border border-gray-800 rounded-lg p-4 transition hover:bg-gray-800">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center">
                        <Trophy className={`mr-2 h-5 w-5 ${award.winner ? 'text-yellow-400' : 'text-gray-400'}`} />
                        <h3 className="font-semibold text-lg">{award.name}</h3>
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-700 text-white">{award.prize}</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{award.description}</p>
                      
                      {award.winner ? (
                        <div className="mt-2 bg-green-900 bg-opacity-20 p-2 rounded border border-green-800">
                          <p className="text-sm">
                            <span className="font-semibold text-accent-green">Winner:</span>{' '}
                            {award.winner.projectName} by {award.winner.teamName} ({award.winner.score})
                          </p>
                        </div>
                      ) : (
                        <div className="mt-2 bg-orange-900 bg-opacity-20 p-2 rounded border border-orange-800">
                          <p className="text-sm text-accent-orange">
                            No winner assigned yet
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 md:mt-0 flex space-x-2">
                      <Button size="sm" variant="outline" leftIcon={<Edit size={14} />}>
                        Edit
                      </Button>
                      <Button size="sm" leftIcon={<Award size={14} />}>
                        {award.winner ? 'Reassign' : 'Assign Winner'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
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
            <CardTitle>Finalist Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Project</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Team</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Category</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Score</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {finalists.map((finalist, index) => (
                    <tr key={finalist.id} className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium text-white">
                        {finalist.projectName}
                        {index < 3 && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-900 text-yellow-300">
                            <Trophy className="w-3 h-3 mr-1" />
                            Winner
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-gray-300">{finalist.teamName}</td>
                      <td className="py-3 px-4 text-gray-300">{finalist.category}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${index < 3 ? 'text-accent-green' : 'text-accent-blue'}`}>
                          {finalist.score.toFixed(1)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          rightIcon={<ChevronRight size={14} />}
                        >
                          View Project
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

export default Awards;