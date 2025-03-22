import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  ExternalLink, 
  ChevronRight, 
  AlertTriangle 
} from 'lucide-react';

type EvaluationStage = 'triage' | 'preliminary' | 'detailed' | 'semifinals' | 'finals';

interface Criterion {
  id: string;
  name: string;
  description: string;
  scale: string;
}

function Evaluations() {
  const [evaluationStage, setEvaluationStage] = useState<EvaluationStage>('triage');
  const location = useLocation();
  const [selectedRatings, setSelectedRatings] = useState<Record<string, number>>({});
  const [notes, setNotes] = useState<string>('');
  const [specialRecognition, setSpecialRecognition] = useState<string[]>([]);
  
  // Set evaluation stage based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/triage')) {
      setEvaluationStage('triage');
    } else if (path.includes('/preliminary')) {
      setEvaluationStage('preliminary');
    } else if (path.includes('/detailed')) {
      setEvaluationStage('detailed');
    } else if (path.includes('/semifinals')) {
      setEvaluationStage('semifinals');
    } else if (path.includes('/finals')) {
      setEvaluationStage('finals');
    }
  }, [location]);
  
  // Mock submission data for evaluation
  const submission = {
    id: '12458',
    title: 'Urban Harvest AI',
    team: 'Team Pixel',
    category: 'Sustainability',
    description: 'An AI-powered platform for optimizing urban farming operations to maximize yields and minimize waste.',
    url: 'https://example-hackathon-entry.com/',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  };

  // Mock progress data
  const progressData = {
    triage: { completed: 156, total: 2000 },
    preliminary: { completed: 78, total: 200 },
    detailed: { completed: 12, total: 40 },
    semifinals: { completed: 3, total: 8 },
    finals: { completed: 10, total: 20 }
  };

  // Stage-specific criteria
  const triageCriteria = {
    aiSuggestedCategory: 'Sustainability',
    availableCategories: ['AI/ML', 'Sustainability', 'Health Tech']
  };

  const preliminaryCriteria = [
    { id: '1', name: 'Innovation', description: 'Uniqueness and creativity of the solution', scale: '1-10' },
    { id: '2', name: 'Usability', description: 'User experience and interface design', scale: '1-10' },
    { id: '3', name: 'Market Potential', description: 'Viability as a product or service', scale: '1-10' },
  ];

  const detailedCriteria = [
    { id: '1', name: 'Innovation', description: 'Uniqueness and creativity of the solution', scale: '1-10' },
    { id: '2', name: 'Technical Implementation', description: 'Quality and complexity of the code', scale: '1-10' },
    { id: '3', name: 'User Experience', description: 'Usability and interface design', scale: '1-10' },
    { id: '4', name: 'Market Potential', description: 'Viability as a product or service', scale: '1-10' },
    { id: '5', name: 'Scalability', description: 'Ability to scale to many users/clients', scale: '1-10' },
    { id: '6', name: 'Sustainability Impact', description: 'Potential for positive environmental impact', scale: '1-10' },
  ];

  const semifinalsCriteria = [
    ...detailedCriteria,
    { id: '7', name: 'Originality', description: 'Uniqueness compared to existing solutions', scale: '1-10' },
    { id: '8', name: 'Presentation Quality', description: 'Clarity and effectiveness of presentation', scale: '1-10' },
  ];

  const finalsCriteria = [
    ...semifinalsCriteria,
    { id: '9', name: 'Overall Impact', description: 'Potential to create meaningful change', scale: '1-10' },
    { id: '10', name: 'Team Collaboration', description: 'Evidence of effective teamwork', scale: '1-10' },
  ];

  const specialRecognitionOptions = [
    'Innovation Excellence',
    'Design Excellence',
    'Sustainability Impact',
    'Technical Achievement',
    'Most Promising Startup',
    'Best Social Impact'
  ];

  const handleRatingChange = (criterionId: string, value: number) => {
    setSelectedRatings({
      ...selectedRatings,
      [criterionId]: value
    });
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const handleSpecialRecognitionToggle = (recognition: string) => {
    if (specialRecognition.includes(recognition)) {
      setSpecialRecognition(specialRecognition.filter(r => r !== recognition));
    } else {
      setSpecialRecognition([...specialRecognition, recognition]);
    }
  };

  const getProgressDisplay = () => {
    const { completed, total } = progressData[evaluationStage];
    return `${completed} of ${total} assigned submissions`;
  };
  
  const getStageTitle = () => {
    switch (evaluationStage) {
      case 'triage': return 'Initial Triage';
      case 'preliminary': return 'Preliminary Evaluation';
      case 'detailed': return 'Detailed Evaluation';
      case 'semifinals': return 'Semi-Finals Evaluation';
      case 'finals': return 'Finals Evaluation';
    }
  };
  
  const getStageColor = () => {
    switch (evaluationStage) {
      case 'triage': return 'bg-orange-500';
      case 'preliminary': return 'bg-blue-500';
      case 'detailed': return 'bg-violet-500';
      case 'semifinals': return 'bg-green-500';
      case 'finals': return 'bg-red-500';
    }
  };

  const getStageNumber = () => {
    switch (evaluationStage) {
      case 'triage': return 1;
      case 'preliminary': return 2;
      case 'detailed': return 3;
      case 'semifinals': return 4;
      case 'finals': return 5;
    }
  };
  
  const renderNumberSelector = (criterion: Criterion) => {
    const currentValue = selectedRatings[criterion.id] || 0;
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
              currentValue === num 
                ? 'bg-accent-blue text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => handleRatingChange(criterion.id, num)}
          >
            {num}
          </button>
        ))}
      </div>
    );
  };

  const renderProgressBar = () => {
    const { completed, total } = progressData[evaluationStage];
    const percentage = (completed / total) * 100;
    
    return (
      <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
        <div 
          className={`${getStageColor()} h-4 rounded-full`} 
          style={{ width: `${percentage}%` }} 
        />
      </div>
    );
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
            <h1 className="text-3xl font-bold mb-2">{getStageTitle()} | Project #{submission.id}</h1>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            <div className={`rounded-full px-4 py-1 text-white ${getStageColor()}`}>
              Stage {getStageNumber()}: {getStageTitle().split(' ')[0]}
            </div>
            <Button variant="outline" onClick={() => window.location.href = '/judge'}>
              Dashboard
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/judge/evaluations/next'}>
              Exit
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-medium">Overall Progress:</h3>
          <span className="text-gray-400">{getProgressDisplay()}</span>
        </div>
        {renderProgressBar()}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader className="border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle>{`Project: "${submission.title}"`}</CardTitle>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs mt-2">
                    {submission.category}
                  </span>
                </div>
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
                
                {/* Video Embed Section */}
                <div className="bg-gray-900 rounded overflow-hidden">
                  <div className="p-3 bg-gray-800 flex justify-between items-center">
                    <h4 className="font-medium">Project Video</h4>
                    <div className="flex items-center">
                      <a 
                        href="https://youtu.be/example" 
                        className="text-xs flex items-center gap-1 text-accent-blue"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} />
                        <span>View in New Tab</span>
                      </a>
                    </div>
                  </div>
                  <div className="relative" style={{ paddingBottom: '56.25%', maxWidth: '640px', margin: '0 auto' }}>
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      title="Project Video"
                    ></iframe>
                  </div>
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
              <CardTitle>{getStageTitle()}</CardTitle>
            </CardHeader>
            <CardContent>
              {evaluationStage === 'triage' && (
                <div className="py-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-6">Quick Evaluation</h3>
                      <p className="text-gray-300 mb-4">
                        Project Description: {submission.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">1. Review or Change Category if Needed:</h4>
                      <div className="mb-4">
                        <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs mb-2">
                          User-Submitted Category: {submission.category}
                        </div>
                        
                        <p className="text-sm text-gray-300 mb-2">
                          If the submission is clearly in the wrong category, please select the correct one:
                        </p>
                        
                        <select className="w-full px-4 py-2 mt-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue">
                          <option value={submission.category}>Keep Current: {submission.category}</option>
                          {triageCriteria.availableCategories
                            .filter(category => category !== submission.category)
                            .map(category => (
                              <option key={category} value={category}>{category}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">2. Does this submission meet minimum requirements?</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="meets-req" 
                            name="meets-requirements" 
                            className="mr-2 rounded bg-gray-700 border-gray-600 text-accent-blue focus:ring-accent-blue focus:ring-opacity-25"
                          />
                          <label htmlFor="meets-req" className="text-gray-300">Yes - Advance to evaluation</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="not-meets-req" 
                            name="meets-requirements" 
                            className="mr-2 rounded bg-gray-700 border-gray-600 text-accent-blue focus:ring-accent-blue focus:ring-opacity-25"
                          />
                          <label htmlFor="not-meets-req" className="text-gray-300">No - Does not meet standards</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4 border-t border-gray-800 mt-6">
                    <Button variant="outline">
                      Skip
                    </Button>
                    <Button rightIcon={<ChevronRight size={16} />}>
                      Submit & Next
                    </Button>
                  </div>
                </div>
              )}

              {evaluationStage === 'preliminary' && (
                <div className="py-4">
                  <h3 className="text-lg font-semibold mb-6">Rating Criteria</h3>
                  
                  <div className="space-y-6">
                    {preliminaryCriteria.map((criterion) => (
                      <div key={criterion.id} className="rounded-lg bg-gray-800 p-4">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">{criterion.id}. {criterion.name} ({criterion.scale})</h4>
                          <span className="text-sm text-gray-400">
                            {selectedRatings[criterion.id] ? selectedRatings[criterion.id] : '-'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{criterion.description}</p>
                        {renderNumberSelector(criterion)}
                      </div>
                    ))}
                    
                    <div>
                      <label className="font-medium block mb-2">Brief Note (Optional):</label>
                      <textarea 
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        placeholder="Add a quick note about this submission..."
                        rows={3}
                        value={notes}
                        onChange={handleNotesChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4 border-t border-gray-800 mt-6">
                    <Button variant="outline">
                      Save Draft
                    </Button>
                    <Button rightIcon={<ChevronRight size={16} />}>
                      Submit & Next
                    </Button>
                  </div>
                </div>
              )}

              {evaluationStage === 'detailed' && (
                <div className="py-4">
                  <div className="flex mb-6 w-full border-b border-gray-700">
                    <button className="px-4 py-2 border-b-2 border-accent-blue text-white font-medium">
                      Scoring
                    </button>
                    <button className="px-4 py-2 text-gray-400 font-medium">
                      Comments
                        </button>
                  </div>
                  
                  <div className="mb-4 rounded-lg bg-gray-800 p-3">
                    <p className="font-medium">Previous Average: <span className="text-accent-blue">8.2/10</span></p>
                  </div>
                  
                  <div className="space-y-6">
                    {detailedCriteria.map((criterion) => (
                      <div key={criterion.id}>
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">{criterion.id}. {criterion.name} ({criterion.scale})</h4>
                          <span className="text-sm text-gray-400 font-medium">
                            {selectedRatings[criterion.id] ? selectedRatings[criterion.id] : '--'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{criterion.description}</p>
                        <input 
                          type="range" 
                          min="1" 
                          max="10" 
                          step="0.5" 
                          value={selectedRatings[criterion.id] || 0}
                          onChange={(e) => handleRatingChange(criterion.id, parseFloat(e.target.value))}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-blue"
                        />
                      </div>
                    ))}
                    
                    <div>
                      <label className="font-medium block mb-2">Detailed Comments:</label>
                      <textarea 
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        placeholder="Provide detailed feedback on this submission..."
                        rows={4}
                        value={notes}
                        onChange={handleNotesChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4 border-t border-gray-800 mt-6">
                    <Button variant="outline">
                      Save Draft
                    </Button>
                    <Button rightIcon={<ChevronRight size={16} />}>
                      Submit & Next
                      </Button>
                  </div>
                </div>
              )}

              {evaluationStage === 'semifinals' && (
                <div className="py-4">
                  <div className="flex mb-6 w-full border-b border-gray-700">
                    <button className="px-4 py-2 border-b-2 border-accent-blue text-white font-medium">
                      Scoring
                    </button>
                    <button className="px-4 py-2 text-gray-400 font-medium">
                      Comments
                    </button>
                  </div>
                  
                  <div className="mb-4 rounded-lg bg-gray-800 p-3">
                    <p className="font-medium">Previous Average: <span className="text-accent-blue">8.2/10</span></p>
                  </div>
                  
                  <div className="space-y-6">
                    {semifinalsCriteria.map((criterion) => (
                      <div key={criterion.id}>
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">{criterion.id}. {criterion.name} ({criterion.scale})</h4>
                          <span className="text-sm text-gray-400 font-medium">
                            {selectedRatings[criterion.id] ? selectedRatings[criterion.id] : '--'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{criterion.description}</p>
                        <input 
                          type="range" 
                          min="1" 
                          max="10" 
                          step="0.5" 
                          value={selectedRatings[criterion.id] || 0}
                          onChange={(e) => handleRatingChange(criterion.id, parseFloat(e.target.value))}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-blue"
                        />
                      </div>
                    ))}
                    
                    <div>
                      <label className="font-medium block mb-2">Flag for Special Recognition:</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {specialRecognitionOptions.map(option => (
                          <div key={option} className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={option.replace(/\s/g, '-').toLowerCase()} 
                              checked={specialRecognition.includes(option)}
                              onChange={() => handleSpecialRecognitionToggle(option)}
                              className="mr-2 rounded bg-gray-700 border-gray-600 text-accent-blue focus:ring-accent-blue focus:ring-opacity-25"
                            />
                            <label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-gray-300">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="font-medium block mb-2">Detailed Assessment:</label>
                      <textarea 
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        placeholder="Provide comprehensive feedback and award recommendations..."
                        rows={5}
                        value={notes}
                        onChange={handleNotesChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4 border-t border-gray-800 mt-6">
                    <Button variant="outline">
                      Save Draft
                    </Button>
                    <Button rightIcon={<ChevronRight size={16} />}>
                      Submit & Next
                    </Button>
                  </div>
                </div>
              )}

              {evaluationStage === 'finals' && (
                <div className="py-4">
                  <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4 flex items-start mb-6">
                    <AlertTriangle className="text-accent-blue flex-shrink-0 mr-3 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-accent-blue font-medium mb-1">Finals Judging</p>
                      <p className="text-sm">
                        This is the final evaluation stage. Your scores and comments will be used to determine the overall winners.
                        A collaborative judging session will follow your individual assessment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {finalsCriteria.map((criterion) => (
                      <div key={criterion.id}>
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">{criterion.id}. {criterion.name} ({criterion.scale})</h4>
                          <span className="text-sm text-gray-400 font-medium">
                            {selectedRatings[criterion.id] ? selectedRatings[criterion.id] : '--'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{criterion.description}</p>
                        <input 
                          type="range" 
                          min="1" 
                          max="10" 
                          step="0.5" 
                          value={selectedRatings[criterion.id] || 0}
                          onChange={(e) => handleRatingChange(criterion.id, parseFloat(e.target.value))}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-blue"
                        />
                        <textarea 
                          className="w-full mt-2 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                          placeholder={`Comments about ${criterion.name.toLowerCase()}...`}
                          rows={2}
                        />
                      </div>
                    ))}
                    
                    <div>
                      <label className="font-medium block mb-2">Flag for Special Recognition:</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {specialRecognitionOptions.map(option => (
                          <div key={option} className="flex items-center">
                            <input 
                              type="checkbox" 
                              id={option.replace(/\s/g, '-').toLowerCase()} 
                              checked={specialRecognition.includes(option)}
                              onChange={() => handleSpecialRecognitionToggle(option)}
                              className="mr-2 rounded bg-gray-700 border-gray-600 text-accent-blue focus:ring-accent-blue focus:ring-opacity-25"
                            />
                            <label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-gray-300">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="font-medium block mb-2">Final Justification:</label>
                      <textarea 
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        placeholder="Provide final justification for your scoring and award recommendations..."
                        rows={5}
                        value={notes}
                        onChange={handleNotesChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4 border-t border-gray-800 mt-6">
                    <Button variant="outline">
                      Save Draft
                    </Button>
                    <Button>
                      Submit Final Evaluation
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Stage selector (for development purposes) */}
      <div className="p-4 bg-gray-800 rounded-lg mt-8">
        <h3 className="text-lg font-medium mb-4">Development Controls: Select Stage</h3>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={evaluationStage === 'triage' ? 'primary' : 'outline'}
            onClick={() => setEvaluationStage('triage')}
          >
            Stage 1: Triage
          </Button>
          <Button 
            variant={evaluationStage === 'preliminary' ? 'primary' : 'outline'}
            onClick={() => setEvaluationStage('preliminary')}
          >
            Stage 2: Preliminary
          </Button>
          <Button 
            variant={evaluationStage === 'detailed' ? 'primary' : 'outline'}
            onClick={() => setEvaluationStage('detailed')}
          >
            Stage 3: Detailed
          </Button>
          <Button 
            variant={evaluationStage === 'semifinals' ? 'primary' : 'outline'}
            onClick={() => setEvaluationStage('semifinals')}
          >
            Stage 4: Semi-Finals
          </Button>
          <Button 
            variant={evaluationStage === 'finals' ? 'primary' : 'outline'}
            onClick={() => setEvaluationStage('finals')}
          >
            Stage 5: Finals
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Evaluations;