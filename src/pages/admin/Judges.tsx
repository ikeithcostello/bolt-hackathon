import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Search, UserPlus, Scale, Medal } from 'lucide-react';

function Judges() {
  // Mock judges data
  const judges = [
    {
      id: '1',
      name: 'Dr. Jennifer Smith',
      email: 'jennifer.smith@example.com',
      expertise: 'AI & Machine Learning',
      evaluationsCompleted: 87,
      avgScore: 7.8,
      status: 'active',
    },
    {
      id: '2',
      name: 'Prof. Michael Johnson',
      email: 'michael.johnson@example.com',
      expertise: 'Sustainability',
      evaluationsCompleted: 65,
      avgScore: 6.9,
      status: 'active',
    },
    {
      id: '3',
      name: 'Sarah Williams',
      email: 'sarah.williams@example.com',
      expertise: 'UX Design',
      evaluationsCompleted: 92,
      avgScore: 7.2,
      status: 'active',
    },
    {
      id: '4',
      name: 'Dr. David Chen',
      email: 'david.chen@example.com',
      expertise: 'Blockchain',
      evaluationsCompleted: 54,
      avgScore: 8.1,
      status: 'active',
    },
    {
      id: '5',
      name: 'Rebecca Taylor',
      email: 'rebecca.taylor@example.com',
      expertise: 'Healthcare',
      evaluationsCompleted: 73,
      avgScore: 7.5,
      status: 'inactive',
    },
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
            <h1 className="text-3xl font-bold mb-2">Judge Management</h1>
            <p className="text-gray-400">Manage and monitor judge performance</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search judges..."
                className="px-4 py-2 pl-10 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue w-full md:w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            </div>
            <Button leftIcon={<UserPlus size={16} />}>
              Add Judge
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
              <h3 className="text-4xl font-bold mb-2 text-accent-blue">{judges.length}</h3>
              <p className="text-text-secondary">Active Judges</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2 text-accent-green">74</h3>
              <p className="text-text-secondary">Avg. Evaluations per Judge</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2 text-accent-purple">7.5</h3>
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
            <CardTitle>Judge Roster</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Name</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Expertise</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Evaluations</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Avg. Score</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Status</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {judges.map((judge) => (
                    <tr key={judge.id} className="border-b border-gray-800">
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-white">{judge.name}</div>
                          <div className="text-sm text-gray-400">{judge.email}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-300">{judge.expertise}</td>
                      <td className="py-3 px-4 text-gray-300">{judge.evaluationsCompleted}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <span className={`mr-2 ${
                            judge.avgScore >= 8 ? 'text-accent-green' : 
                            judge.avgScore >= 7 ? 'text-accent-blue' : 
                            'text-gray-300'
                          }`}>
                            {judge.avgScore}
                          </span>
                          <Medal size={14} className={
                            judge.avgScore >= 8 ? 'text-accent-green' : 
                            judge.avgScore >= 7 ? 'text-accent-blue' : 
                            'text-gray-400'
                          } />
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          judge.status === 'active' 
                            ? 'bg-green-900 bg-opacity-20 text-accent-green' 
                            : 'bg-gray-700 bg-opacity-50 text-gray-400'
                        }`}>
                          {judge.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm" leftIcon={<Scale size={14} />}>
                            Calibrate
                          </Button>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
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

export default Judges;