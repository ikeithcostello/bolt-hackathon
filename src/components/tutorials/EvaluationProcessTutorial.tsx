import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '../ui/modal';
import { Button } from '../ui/button';
import { 
  ChevronRight, 
  ChevronLeft, 
  Filter, 
  CheckSquare, 
  ClipboardList, 
  Medal, 
  Trophy,
  X,
  BarChart4,
  UserCog,
} from 'lucide-react';

type UserRole = 'judge' | 'admin';

interface EvaluationProcessTutorialProps {
  isOpen: boolean;
  onClose: () => void;
  role: UserRole;
}

export function EvaluationProcessTutorial({
  isOpen,
  onClose,
  role = 'judge',
}: EvaluationProcessTutorialProps) {
  const [step, setStep] = useState(0);
  
  const judgeSteps = [
    {
      title: 'Welcome to the Evaluation Process',
      content: (
        <div>
          <p className="text-lg mb-6">
            Thank you for participating as a judge in the World's Largest Hackathon! Your expertise and 
            feedback will help identify the most innovative projects.
          </p>
          <p className="text-lg mb-6">
            Here's a quick overview of the 5-stage evaluation process designed to 
            efficiently review thousands of submissions and select the best projects.
          </p>
          <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4 mb-4">
            <p className="text-accent-blue font-medium">Remember:</p>
            <p>Your evaluations help shape the future of technology by highlighting promising innovations.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 1: Initial Triage',
      icon: <Filter size={24} className="text-orange-500" />,
      color: 'bg-orange-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-orange-500">
              <Filter size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Initial Triage</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-orange-500 mb-6">
            <ul className="space-y-2">
              <li>• Review each submission for <strong>30-60 seconds</strong></li>
              <li>• Make a binary decision: "Advance" or "Do Not Advance"</li>
              <li>• Verify submission meets minimum requirements</li>
              <li>• Confirm or modify AI-suggested category</li>
              <li>• Process approximately <strong>2,000 submissions</strong></li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Pro Tip:</strong> Focus on the problem being solved, technical implementation,
              and overall creativity. Don't spend too much time on each submission at this stage.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 2: Preliminary Evaluation',
      icon: <CheckSquare size={24} className="text-accent-blue" />,
      color: 'bg-accent-blue',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-accent-blue">
              <CheckSquare size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Preliminary Evaluation</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-accent-blue mb-6">
            <ul className="space-y-2">
              <li>• Review submissions for <strong>2-5 minutes each</strong></li>
              <li>• Score on 3-4 core criteria (1-10 scale)</li>
              <li>• Each submission is evaluated by 2-3 judges</li> 
              <li>• Focus on innovation, usability, and market potential</li>
              <li>• Evaluate approximately <strong>200 submissions</strong></li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Pro Tip:</strong> Be consistent in your scoring approach across submissions.
              Use the middle of the scale (4-7) for average projects and reserve the extremes for
              exceptional or poor submissions.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 3: Detailed Evaluation',
      icon: <ClipboardList size={24} className="text-violet-500" />,
      color: 'bg-violet-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-violet-500">
              <ClipboardList size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Detailed Evaluation</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-violet-500 mb-6">
            <ul className="space-y-2">
              <li>• Review submissions for <strong>10-15 minutes each</strong></li>
              <li>• Score on 6-8 detailed criteria with comments</li>
              <li>• Each submission is evaluated by 3-4 judges</li>
              <li>• Provide constructive feedback for participants</li>
              <li>• Evaluate approximately <strong>40 submissions</strong></li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Pro Tip:</strong> Your written feedback is extremely valuable to participants.
              Try to include at least one specific strength and one area for improvement in each evaluation.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 4: Semi-Finals',
      icon: <Medal size={24} className="text-green-500" />,
      color: 'bg-green-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-green-500">
              <Medal size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Semi-Finals</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-green-500 mb-6">
            <ul className="space-y-2">
              <li>• Review submissions for <strong>20+ minutes each</strong></li>
              <li>• Provide detailed scores and extensive comments</li>
              <li>• Each submission is evaluated by 5+ specialized judges</li>
              <li>• Flag projects for special recognition categories</li>
              <li>• Evaluate approximately <strong>8 submissions</strong></li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Pro Tip:</strong> At this stage, consider the long-term potential and broader impact
              of each project. Look beyond the immediate implementation to assess how the idea could
              evolve and scale.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 5: Finals',
      icon: <Trophy size={24} className="text-red-500" />,
      color: 'bg-red-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-red-500">
              <Trophy size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Finals</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-red-500 mb-6">
            <ul className="space-y-2">
              <li>• Collaborative judging session with all judges</li>
              <li>• In-depth discussion of top 20-30 submissions</li>
              <li>• Final selection of winners and special awards</li>
              <li>• Prepare detailed justifications for selections</li>
              <li>• Recognize excellence across multiple categories</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Pro Tip:</strong> During collaborative judging, be open to the perspectives
              of other judges. The best decisions come from thoughtful discussion that considers
              diverse viewpoints and expertise.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Judge Calibration Process',
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Calibration: Ensuring Fair Evaluations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-accent-blue mb-2">Initial Calibration</h4>
              <p className="text-sm">Judge evaluates 5-10 benchmark submissions with known scores</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-accent-blue mb-2">Score Normalization</h4>
              <p className="text-sm">System calculates adjustment factor for each judge's scoring patterns</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-accent-blue mb-2">Periodic Recalibration</h4>
              <p className="text-sm">After every 100 evaluations, judges undergo recalibration</p>
            </div>
          </div>
          
          <p className="text-lg mb-4">
            This process ensures consistent scoring across all judges, accounting for differences in 
            scoring tendencies (lenient vs. strict evaluators).
          </p>
          
          <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4">
            <p className="text-sm">
              <strong>Note:</strong> Your scores may be automatically adjusted based on calibration
              factors, but this doesn't change your ranking of submissions relative to each other.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Ready to Start',
      content: (
        <div>
          <div className="text-center mb-6">
            <div className="inline-block p-3 rounded-full bg-accent-blue mb-4">
              <Trophy size={36} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">You're Ready to Begin!</h3>
            <p className="text-lg text-gray-300">
              Thank you for your dedication to the World's Largest Hackathon
            </p>
          </div>
          
          <div className="space-y-4 mb-6">
            <p className="">
              Your evaluation queue on the dashboard shows which stages are currently active
              and how many submissions are waiting for your review.
            </p>
            <p className="">
              If you have any questions during the judging process, please contact the administrator
              team via the support chat.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="font-medium mb-2">Need to reference this guide again?</h4>
            <p className="text-sm">
              You can access this tutorial anytime by clicking on "Evaluation Process Guide" 
              in the help menu.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const adminSteps = [
    {
      title: 'Welcome to the Evaluation Management System',
      content: (
        <div>
          <p className="text-lg mb-6">
            The World's Largest Hackathon uses a 5-stage evaluation process to effectively manage
            judging thousands of submissions and select the most innovative projects.
          </p>
          <p className="text-lg mb-6">
            As an administrator, you'll monitor the flow of submissions through the system,
            manage judge assignments, resolve scoring conflicts, and ensure the process runs smoothly.
          </p>
          <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4 mb-4">
            <p className="text-accent-blue font-medium">Key Administrative Responsibilities:</p>
            <p>• Monitor judge throughput and consistency</p>
            <p>• Resolve scoring conflicts and manage calibration</p>
            <p>• Configure evaluation criteria and parameters</p>
            <p>• Generate reports and analytics</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 1: Initial Triage',
      icon: <Filter size={24} className="text-orange-500" />,
      color: 'bg-orange-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-orange-500">
              <Filter size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Initial Triage (Admin View)</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-orange-500 mb-6">
            <ul className="space-y-2">
              <li>• AI system pre-categorizes all submissions to assist judges</li>
              <li>• 10-20% of submissions advance to the next stage (~100K-200K submissions)</li>
              <li>• Monitor judge throughput and resolve any categorization conflicts</li>
              <li>• Assign submissions in batches to judges based on expertise</li>
              <li>• Track completion rates and judge workload balance</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Admin Tip:</strong> Use the real-time judge performance dashboard to identify
              judges who may need additional guidance or are processing submissions too quickly.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 2: Preliminary Evaluation',
      icon: <CheckSquare size={24} className="text-accent-blue" />,
      color: 'bg-accent-blue',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-accent-blue">
              <CheckSquare size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Preliminary Evaluation (Admin View)</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-accent-blue mb-6">
            <ul className="space-y-2">
              <li>• Each submission evaluated by 2-3 judges for consistency</li>
              <li>• Top 10% advance to detailed evaluation (~10K-20K submissions)</li>
              <li>• Monitor score distributions and judge consistency</li>
              <li>• Identify and address outlier judges (too strict/lenient)</li>
              <li>• Review preliminary categorization performance</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Admin Tip:</strong> Use the scoring analysis tools to ensure a balanced
              distribution of scores and identify any categories with unusual scoring patterns.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 3: Detailed Evaluation',
      icon: <ClipboardList size={24} className="text-violet-500" />,
      color: 'bg-violet-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-violet-500">
              <ClipboardList size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Detailed Evaluation (Admin View)</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-violet-500 mb-6">
            <ul className="space-y-2">
              <li>• Each submission evaluated by 3-4 judges with specialized expertise</li>
              <li>• Top 10% advance to semi-finals (~1K-2K submissions)</li>
              <li>• Conduct quality control on judge feedback and comments</li>
              <li>• Manage judge specializations and expertise matching</li>
              <li>• Begin analyzing trends for potential winners</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Admin Tip:</strong> At this stage, reviewing feedback quality becomes critical.
              Use the comment quality metrics to identify judges who may need guidance on providing
              constructive feedback.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 4: Semi-Finals',
      icon: <Medal size={24} className="text-green-500" />,
      color: 'bg-green-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-green-500">
              <Medal size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Semi-Finals (Admin View)</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-green-500 mb-6">
            <ul className="space-y-2">
              <li>• Each submission evaluated by 5+ specialized judges</li>
              <li>• Top 25% advance to finals (~200-500 submissions)</li>
              <li>• Coordinate judge schedules for collaborative sessions</li>
              <li>• Begin award shortlist creation process</li>
              <li>• Prepare preliminary winner announcements</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Admin Tip:</strong> Use the award category analytics to ensure balanced
              representation across different technologies, domains, and team demographics.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Stage 5: Finals',
      icon: <Trophy size={24} className="text-red-500" />,
      color: 'bg-red-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-red-500">
              <Trophy size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Finals (Admin View)</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-red-500 mb-6">
            <ul className="space-y-2">
              <li>• Facilitate deliberation sessions among judges</li>
              <li>• Prepare winner announcements and award materials</li>
              <li>• Finalize scoring and feedback for all participants</li>
              <li>• Generate comprehensive evaluation reports</li>
              <li>• Archive judging data for post-event analysis</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Admin Tip:</strong> The collaborative judging dashboard lets you moderate
              discussions, document key decision factors, and track progress through final selections.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Calibration & Conflict Resolution',
      content: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent-blue">Judge Calibration System</h3>
              <div className="pl-4 border-l-2 border-accent-blue mb-4">
                <ul className="space-y-2">
                  <li>• Initial calibration with benchmark submissions</li>
                  <li>• System calculates normalization factors</li>
                  <li>• Automatic score adjustment for fairness</li>
                  <li>• Periodic recalibration every 100 evaluations</li>
                  <li>• Analytics to identify scoring pattern changes</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Conflict Resolution Process</h3>
              <div className="pl-4 border-l-2 border-orange-500 mb-4">
                <ul className="space-y-2">
                  <li>• Automatic detection of scoring discrepancies</li>
                  <li>• Threshold-based flagging of unusual variances</li>
                  <li>• Options for third judge assignment or manual review</li>
                  <li>• Documentation of resolution decisions</li>
                  <li>• Feedback loop to improve judge guidance</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="font-medium text-white mb-2">Administrator Dashboard Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <p className="text-sm text-gray-300">• Judge score distribution analytics</p>
              <p className="text-sm text-gray-300">• Calibration factor monitoring</p>
              <p className="text-sm text-gray-300">• Conflict resolution workflow</p>
              <p className="text-sm text-gray-300">• Judge performance metrics</p>
              <p className="text-sm text-gray-300">• Submission flow visualization</p>
              <p className="text-sm text-gray-300">• System health indicators</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Admin Reporting & Analytics',
      icon: <BarChart4 size={24} className="text-accent-blue" />,
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-accent-blue">
              <BarChart4 size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Reporting & Analytics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Real-time Dashboards</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Submission flow and funnel metrics</li>
                <li>• Judge activity and throughput</li>
                <li>• Score distributions by category</li>
                <li>• System performance indicators</li>
                <li>• Completion progress tracking</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Export Capabilities</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Detailed CSV/Excel exports</li>
                <li>• Judge performance summaries</li>
                <li>• Participant feedback compilations</li>
                <li>• Award category analytics</li>
                <li>• Post-event analysis reports</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4 mb-4">
            <p className="text-sm">
              <strong>Note:</strong> All reports can be scheduled for automatic generation
              and distribution to stakeholders on daily, weekly or custom frequencies.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Ready to Manage',
      content: (
        <div>
          <div className="text-center mb-6">
            <div className="inline-block p-3 rounded-full bg-accent-blue mb-4">
              <UserCog size={36} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">You're Ready to Start Managing!</h3>
            <p className="text-lg text-gray-300">
              The administrative controls are now at your fingertips
            </p>
          </div>
          
          <div className="space-y-4 mb-6">
            <p>
              Your administrator dashboard provides a comprehensive view of the entire evaluation
              process, with specialized tools for each stage.
            </p>
            <p>
              Remember that training resources for judges are available in the Help section,
              and the system allows you to send targeted guidance to judges who may need
              additional support.
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="font-medium mb-2">Quick Support Access</h4>
            <p className="text-sm">
              Technical support is available 24/7 during the evaluation period.
              Contact the technical team through the admin support channel for
              any system-related issues.
            </p>
          </div>
        </div>
      ),
    },
  ];
  
  const steps = role === 'judge' ? judgeSteps : adminSteps;
  const maxSteps = steps.length;
  
  const handleNext = () => {
    if (step < maxSteps - 1) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };
  
  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  const handleSkip = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      title={
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-semibold flex-1">
            {steps[step].title}
          </h2>
          <div className="text-sm text-gray-400 ml-4 whitespace-nowrap">
            Step {step + 1} of {maxSteps}
          </div>
        </div>
      }
      showCloseButton={false}
    >
      <div className="space-y-6">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[300px]"
        >
          {steps[step].content}
        </motion.div>
        
        <div className="pt-4 border-t border-gray-700 flex justify-between">
          <div>
            {step > 0 ? (
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                leftIcon={<ChevronLeft size={16} />}
              >
                Previous
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                onClick={handleSkip}
                leftIcon={<X size={16} />}
              >
                Skip Tutorial
              </Button>
            )}
          </div>
          <Button 
            onClick={handleNext}
            rightIcon={step < maxSteps - 1 ? <ChevronRight size={16} /> : undefined}
          >
            {step < maxSteps - 1 ? 'Next' : 'Get Started'}
          </Button>
        </div>
      </div>
    </Modal>
  );
} 