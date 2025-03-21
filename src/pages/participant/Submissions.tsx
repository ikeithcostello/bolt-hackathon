import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  ChevronRight, 
  Clock, 
  Edit, 
  ExternalLink, 
  Eye, 
  FileText, 
  PlusCircle, 
  Trash2,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

function Submissions() {
  const [viewMode, setViewMode] = useState<'active' | 'past'>('active');
  
  // Mock data for participant submissions
  const activeSubmissions = [
    {
      id: '1',
      title: 'Urban Harvest AI',
      description: 'AI-powered urban farming solution that optimizes crop growth, water usage, and harvesting schedules.',
      category: 'Sustainability',
      submissionDate: 'Feb 20, 2025',
      status: 'in_review',
      thumbnailUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/urban-harvest-ai',
    }
  ];

  const pastSubmissions = [
    {
      id: '2',
      title: 'SmartCity Hub',
      description: 'Urban infrastructure management platform for optimizing city services and resource distribution.',
      category: 'Smart Cities',
      submissionDate: 'Jan 15, 2025',
      status: 'completed',
      score: 86.5,
      ranking: 28,
      thumbnailUrl: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      demoUrl: 'https://example.com/demo-smartcity',
      githubUrl: 'https://github.com/example/smartcity-hub',
    },
    {
      id: '3',
      title: 'EcoSync',
      description: 'Renewable energy management platform for optimizing energy distribution and consumption.',
      category: 'Energy',
      submissionDate: 'Oct 5, 2024',
      status: 'completed',
      score: 92.0,
      ranking: 12,
      thumbnailUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      demoUrl: 'https://example.com/demo-ecosync',
      githubUrl: 'https://github.com/example/ecosync',
    }
  ];

  const getStatusBadge = (status: string, score?: number) => {
    switch (status) {
      case 'in_review':
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-blue-900 bg-opacity-20 text-accent-blue flex items-center">
            <Clock size={12} className="mr-1" /> In Review
          </span>
        );
      case 'completed':
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-green-900 bg-opacity-20 text-accent-green flex items-center">
            <CheckCircle size={12} className="mr-1" /> Evaluated
          </span>
        );
      case 'rejected':
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-red-900 bg-opacity-20 text-accent-red flex items-center">
            <AlertTriangle size={12} className="mr-1" /> Rejected
          </span>
        );
      default:
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Project Submissions</h1>
            <p className="text-gray-400">Manage your hackathon project submissions</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button leftIcon={<PlusCircle size={16} />}>
              Create New Submission
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex space-x-2 mb-6">
          <Button
            variant={viewMode === 'active' ? 'primary' : 'outline'}
            onClick={() => setViewMode('active')}
          >
            Active Submissions
          </Button>
          <Button
            variant={viewMode === 'past' ? 'primary' : 'outline'}
            onClick={() => setViewMode('past')}
          >
            Past Submissions
          </Button>
        </div>
      </motion.div>

      {viewMode === 'active' ? (
        <div>
          {activeSubmissions.length > 0 ? (
            activeSubmissions.map((submission) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="h-48 md:h-auto md:col-span-1">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${submission.thumbnailUrl})` }}
                      />
                    </div>
                    <div className="p-6 md:col-span-2">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{submission.title}</h2>
                          <div className="flex items-center mb-4">
                            <span className="text-sm text-gray-400 mr-2">Category: {submission.category}</span>
                            <span className="text-sm text-gray-400 mr-2">•</span>
                            <span className="text-sm text-gray-400">Submitted: {submission.submissionDate}</span>
                          </div>
                        </div>
                        <div className="mb-4 md:mb-0 md:ml-4">
                          {getStatusBadge(submission.status)}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6">
                        {submission.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          rightIcon={<ExternalLink size={14} />}
                          onClick={() => window.open(submission.demoUrl, '_blank')}
                        >
                          Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          rightIcon={<ExternalLink size={14} />}
                          onClick={() => window.open(submission.githubUrl, '_blank')}
                        >
                          GitHub
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          leftIcon={<Edit size={14} />}
                        >
                          Edit
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          leftIcon={<Eye size={14} />}
                        >
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <FileText className="w-16 h-16 text-gray-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Active Submissions</h3>
                  <p className="text-gray-400 text-center mb-6">
                    You don't have any active submissions for the current hackathon.
                  </p>
                  <Button leftIcon={<PlusCircle size={16} />}>
                    Create New Submission
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      ) : (
        <div>
          {pastSubmissions.length > 0 ? (
            pastSubmissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <Card className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="h-48 md:h-auto md:col-span-1">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${submission.thumbnailUrl})` }}
                      />
                    </div>
                    <div className="p-6 md:col-span-2">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{submission.title}</h2>
                          <div className="flex items-center mb-4">
                            <span className="text-sm text-gray-400 mr-2">Category: {submission.category}</span>
                            <span className="text-sm text-gray-400 mr-2">•</span>
                            <span className="text-sm text-gray-400">Submitted: {submission.submissionDate}</span>
                          </div>
                        </div>
                        <div className="mb-4 md:mb-0 md:ml-4 flex flex-col items-end">
                          {getStatusBadge(submission.status)}
                          {submission.score && (
                            <div className="mt-2 text-sm">
                              <span className="text-gray-400">Score: </span>
                              <span className="font-bold text-accent-green">{submission.score.toFixed(1)}</span>
                            </div>
                          )}
                          {submission.ranking && (
                            <div className="mt-1 text-sm">
                              <span className="text-gray-400">Ranking: </span>
                              <span className="font-bold text-accent-blue">#{submission.ranking}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6">
                        {submission.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          rightIcon={<ExternalLink size={14} />}
                          onClick={() => window.open(submission.demoUrl, '_blank')}
                        >
                          Demo
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          rightIcon={<ExternalLink size={14} />}
                          onClick={() => window.open(submission.githubUrl, '_blank')}
                        >
                          GitHub
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          leftIcon={<Eye size={14} />}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <FileText className="w-16 h-16 text-gray-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Past Submissions</h3>
                  <p className="text-gray-400 text-center mb-6">
                    You don't have any submissions from previous hackathons.
                  </p>
                  <Button variant="outline">
                    View Hackathon History
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      )}

      {viewMode === 'active' && activeSubmissions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Submission Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>All submissions must include a working demo URL</li>
                <li>Source code must be available via GitHub or equivalent</li>
                <li>Submissions must include a detailed description of your solution</li>
                <li>Projects must address at least one of the hackathon challenge categories</li>
                <li>Teams are limited to one active submission per hackathon</li>
              </ul>
            </CardContent>
            <CardFooter className="border-t border-gray-800 pt-4">
              <div className="flex justify-between w-full">
                <Button variant="outline" leftIcon={<FileText size={16} />}>
                  View Full Guidelines
                </Button>
                <Button rightIcon={<ChevronRight size={16} />}>
                  Check Submission Status
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

export default Submissions;