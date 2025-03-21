import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ExternalLink, Flag, ThumbsUp, Star, LayoutGrid } from 'lucide-react';

function Evaluations() {
  const [evaluationMode, setEvaluationMode] = useState<'preliminary' | 'detailed'>('preliminary');
  
  // Mock submission data for evaluation
  const submission = {
    id: '12458',
    title: 'Urban Harvest AI',
    team: 'Team Pixel',
    category: 'Sustainability',
    description: 'An AI-powered solution for optimizing urban farming, improving yield, and reducing resource consumption.',
    url: 'https://example.com/urbanharvest',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  };

  // Evaluation criteria for detailed evaluation
  const criteria = [
    { id: '1', name: 'Innovation', description: 'Uniqueness and creativity of the solution' },
    { id: '2', name: 'Design', description: 'Visual appeal, user interface, and experience' },
    { id: '3', name: 'Functionality', description: 'How well the solution works and meets its objectives' },
    { id: '4', name: 'Impact', description: 'Potential to create meaningful change' },
    { id: '5', name: 'Technical Merit', description: 'Complexity and quality of technical implementation' },
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
            <h1 className="text-3xl font-bold mb-2">Evaluate Submission</h1>
            <p className="text-gray-400">
              Currently in {evaluationMode === 'preliminary' ? 'preliminary' : 'detailed'} evaluation mode
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button 
              variant={evaluationMode === 'preliminary' ? 'primary' : 'outline'} 
              onClick={() => setEvaluationMode('preliminary')}
            >
              Preliminary
            </Button>
            <Button 
              variant={evaluationMode === 'detailed' ? 'primary' : 'outline'} 
              onClick={() => setEvaluationMode('detailed')}
            >
              Detailed
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader className="border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <CardTitle>{submission.title}</CardTitle>
                <a 
                  href={submission.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent-blue flex items-center mt-2 md:mt-0 text-sm"
                >
                  Visit Project <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: `url(${submission.image})` }}
              />
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-400">Team: {submission.team} • Category: {submission.category}</p>
                </div>
                <p className="mb-4">{submission.description}</p>
                
                {/* Embedded iframe would go here in a real application */}
                <div className="bg-gray-800 rounded p-4 text-center text-gray-400">
                  <LayoutGrid size={24} className="mx-auto mb-2" />
                  Project would be embedded here as an iframe
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader className="border-b border-gray-800">
              <CardTitle>Evaluation Form</CardTitle>
            </CardHeader>
            <CardContent>
              {evaluationMode === 'preliminary' ? (
                <div className="py-4">
                  <h3 className="text-lg font-semibold mb-6">Preliminary Evaluation</h3>
                  
                  <div className="mb-8">
                    <p className="mb-2 font-medium">Does this submission meet the basic requirements?</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">No</Button>
                      <Button variant="outline" className="flex-1">Yes</Button>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="mb-2 font-medium">Quick Rating</p>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                          key={star} 
                          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                        >
                          <Star size={24} className="text-gray-500 hover:text-yellow-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="mb-2 font-medium">Should this proceed to detailed evaluation?</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" leftIcon={<ThumbsUp size={16} />} className="flex-1">
                        Yes, Worthy of Detailed Review
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-4">
                  <h3 className="text-lg font-semibold mb-6">Detailed Evaluation</h3>
                  
                  <div className="space-y-6">
                    {criteria.map((criterion) => (
                      <div key={criterion.id}>
                        <div className="flex justify-between mb-2">
                          <label className="font-medium">{criterion.name}</label>
                          <span className="text-sm text-gray-400">Score: 0/10</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{criterion.description}</p>
                        <input 
                          type="range" 
                          min="0" 
                          max="10" 
                          step="0.1" 
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-blue"
                        />
                        <textarea 
                          className="w-full mt-2 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                          placeholder={`Comments about ${criterion.name.toLowerCase()}...`}
                          rows={2}
                        />
                      </div>
                    ))}
                    
                    <div>
                      <label className="font-medium block mb-2">Overall Comments</label>
                      <textarea 
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                        placeholder="Provide overall feedback and comments..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between pt-4 border-t border-gray-800 mt-4">
                <Button variant="outline" leftIcon={<Flag size={16} />}>
                  Flag Issues
                </Button>
                <div className="space-x-2">
                  <Button variant="outline">Save Draft</Button>
                  <Button>Submit Evaluation</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Evaluations;