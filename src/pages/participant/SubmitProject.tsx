import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { ProjectSubmissionForm } from '../../components/forms/ProjectSubmissionForm';
import { Scale } from "lucide-react";
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { JudgeCalibrationTutorial } from '../../components/tutorials/JudgeCalibrationTutorial';

export default function SubmitProjectPage() {
  const [activeTab, setActiveTab] = useState<string>("form");
  const [showCalibrationTutorial, setShowCalibrationTutorial] = useState(false);

  return (
    <div className="container py-6 mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Submit Your Project</h1>
          <TabsList>
            <TabsTrigger value="form">Form</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="form" className="space-y-4">
          <ProjectSubmissionForm 
            onSubmit={(data) => {
              console.log(data);
              // TODO: Submit to API
              alert('Project submitted successfully!');
            }}
            isLoading={false}
          />
        </TabsContent>
        
        <TabsContent value="guidelines">
          <Card className="p-6 border border-gray-700 bg-background-secondary">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white border-b border-gray-700 pb-4">Submission Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-accent-blue">Project Requirements</h3>
                  </div>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Your project must be submitted before the deadline.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>All code must be original or properly attributed.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Your repository should include a README with setup instructions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-blue mr-2">•</span>
                      <span>Projects must be developed during the hackathon period.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-accent-green">Tips for a Great Submission</h3>
                  </div>
                  <ol className="space-y-2 pl-4">
                    <li className="flex items-start">
                      <span className="text-accent-green mr-2">1.</span>
                      <span>Include a video demo to showcase your project in action.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-green mr-2">2.</span>
                      <span>Clearly explain the problem your project solves.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-green mr-2">3.</span>
                      <span>Highlight the technologies and APIs you used.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-green mr-2">4.</span>
                      <span>Share any challenges you faced and how you overcame them.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-green mr-2">5.</span>
                      <span>Mention future features or improvements you'd like to implement.</span>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-purple-400">Judging Criteria</h3>
                  </div>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <div>
                        <span className="font-medium text-white">Innovation (25%):</span>
                        <span className="block text-sm text-gray-300">How creative and original is your solution?</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <div>
                        <span className="font-medium text-white">Technical Complexity (25%):</span>
                        <span className="block text-sm text-gray-300">How technically impressive is your implementation?</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <div>
                        <span className="font-medium text-white">Design & UX (20%):</span>
                        <span className="block text-sm text-gray-300">How polished and user-friendly is your project?</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <div>
                        <span className="font-medium text-white">Completeness (15%):</span>
                        <span className="block text-sm text-gray-300">How well-rounded and complete is your project?</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <div>
                        <span className="font-medium text-white">Impact (15%):</span>
                        <span className="block text-sm text-gray-300">How useful and impactful is your solution?</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-900/30 rounded-lg p-5 border border-indigo-700/50">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-indigo-400">Evaluation Process</h3>
                  </div>
                  <div className="space-y-3 pl-4">
                    <p className="text-gray-300">Our judges will review all submissions after the deadline. The evaluation process consists of:</p>
                    <ul className="pl-5 space-y-1">
                      <li className="list-disc text-gray-300">Initial screening for eligibility requirements</li>
                      <li className="list-disc text-gray-300">Technical evaluation by a panel of expert judges</li>
                      <li className="list-disc text-gray-300">Final scoring based on the judging criteria</li>
                      <li className="list-disc text-gray-300">Selection of winners and honorable mentions</li>
                    </ul>
                    
                    <div className="mt-4 bg-indigo-800/30 p-4 rounded-md border border-indigo-700/50">
                      <p className="text-white font-medium mb-2">Want to know more about how projects are evaluated?</p>
                      <Button 
                        variant="outline" 
                        className="border-indigo-500 hover:bg-indigo-800/50 text-indigo-400"
                        onClick={() => setShowCalibrationTutorial(true)}
                      >
                        <span className="flex items-center">
                          <Scale size={16} className="mr-2" />
                          View Evaluation System
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="bg-blue-900/20 p-4 rounded-md border border-blue-800/50 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-blue-400 font-medium mb-1">Need Help?</h4>
                  <p className="text-gray-300">
                    If you have any questions or need assistance with your submission, please contact our support team at <a href="mailto:support@bolthackathon.com" className="text-blue-400 underline">support@bolthackathon.com</a> or check out our <a href="/faq" className="text-blue-400 underline">FAQ section</a>.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Judge Calibration Tutorial (simplified for participants) */}
      <JudgeCalibrationTutorial
        isOpen={showCalibrationTutorial}
        onClose={() => setShowCalibrationTutorial(false)}
        role="participant"
      />
    </div>
  );
} 